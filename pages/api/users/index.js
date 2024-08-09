import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await dbConnect();
  const token = await getToken({ req: request });
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();

  if (request.method === "GET") {
    if (session) {
      const user = await User.find({
        email: token.email,
      });
      if (!user) {
        return response.status(404).json({ status: "Not Found" });
      }
      response.status(200).json(user);
    }
  }
  if (request.method === "PUT") {
    try {
      const { favorites } = request.body;
      const user = await User.findOneAndUpdate(
        { email: session.user.email },
        { $set: { favorites: favorites } },
        { new: true, upsert: true }
      );
      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
