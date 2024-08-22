import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const user = await User.findById(id);
      if (!user) {
        return response.status(404).json({ status: "User Not Found" });
      }

      response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ status: "Server Error", error });
    }
  }
}
