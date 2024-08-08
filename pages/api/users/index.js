import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await dbConnect();
  const token = await getToken({ req: request });
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    return response.status(401).json({ status: "Unauthorized" });
  }

  switch (request.method) {
    case "GET":
      return handleGetRequest(response, token);
    case "POST":
      return handlePostRequest(response, token);
    case "PUT":
      return handlePutRequest(request, response, token);
    default:
      return response.status(405).json({ status: "Method Not Allowed" });
  }
}

async function handleGetRequest(response, token) {
  const user = await User.findOne({ email: token.email }).populate("favorites");
  if (!user) {
    return response.status(404).json({ status: "Not Found" });
  }
  response.status(200).json(user.favorites);
}

async function handlePostRequest(response, token) {
  const existingUser = await User.findOne({ email: token.email });
  if (existingUser) {
    return response.status(200).json({ status: "User already exists" });
  }

  try {
    const userData = { name: token.name, email: token.email };
    await User.create(userData);
    response.status(201).json({ status: "User created" });
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: error.message });
  }
}

async function handlePutRequest(request, response, token) {
  try {
    const { favoriteId } = request.body;
    const user = await User.findOne({ email: token.email });
    const isFavorite = user.favorites.includes(favoriteId);

    if (isFavorite) {
      user.favorites.pull(favoriteId);
    } else {
      user.favorites.push(favoriteId);
    }

    await user.save();
    return response.status(200).json(user.favorites);
  } catch (error) {
    console.error(error);
    return response.status(400).json({ error: error.message });
  }
}
