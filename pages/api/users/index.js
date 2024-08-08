import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";


export default async function handler(request, response) {
  const token = await getToken({req: request});
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();

  if (request.method === "GET") {
    if (session) {
      const user = await User.find({
        email: token.email,
      });
      console.log(user);
      if (!user) {
        return response.status(404).json({ status: "Not Found" });
      }
      response.status(200).json();
    } else {
      return response.status(200).json([]);
    }
  } else {
    return response.status(405).json({ status: "Method not allowed" });
  }
}

if (request.method === "POST") {
  //const existingUser = await User.findOne({ email: token.email });

  //if (existingUser) {
   // response.status(409).json({ message: "User already exists" });
   // return;
  //}

  try {
    const userData = { name: token.name, email: token.email };
    await User.create({ ...userData });
    response.status(201).json({ status: "User created" });
  } catch {
    console.error(error);
    response.status(400).json({ error: error.message });
  }
}
