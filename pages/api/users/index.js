import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error);
    return response.status(500).json({ error: "Database connection failed" });
  }

  const token = await getToken({ req: request });
  const session = await getServerSession(request, response, authOptions);
  const userId = token?.sub;
  const userName = token?.name;
  const picture = token?.picture;

  if (!session) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  if (request.method === "GET") {
    try {
      const user = await User.findOne({ userId: userId });
      if (!user) {
        return response.status(404).json({ status: "Not Found" });
      }
      response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "PUT") {
    try {
      const { favorites, country, city, aboutMe } = request.body;

      const updatedUserData = {
        favorites,
        name: userName,
        picture: picture,
        country,
        city,
        aboutMe,
      };

      const user = await User.findOneAndUpdate(
        { userId: userId },
        { $set: updatedUserData },
        { new: true, upsert: true }
      );

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
