import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  const token = await getToken({ req: request });
  
  await dbConnect();

  if (request.method === "GET") {
    try {
      const activities = await Activity.find();
      return response.status(200).json(activities);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      if (session) {
        const activityData = request.body;
        await Activity.create(activityData);

        response.status(201).json({ status: "Activity created" });
      } else {
        response.status(400).json({ error: error.message });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
