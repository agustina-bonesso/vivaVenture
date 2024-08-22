import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const activity = await Activity.findById(id).populate({
        path: "reviews",
        populate: {
          path: "author",
          select: "name picture comment", 
        },
      });

      if (!activity) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(activity);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ status: "Server Error", error });
    }
  }

  if (session) {
    if (request.method === "PUT") {
      try {
        const activityData = request.body;
        await Activity.findByIdAndUpdate(id, activityData);
        return response.status(200).json({ status: `Activity ${id} updated!` });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ status: "Server Error", error });
      }
    }
  }

  if (request.method === "DELETE") {
    try {
      await Activity.findByIdAndDelete(id);
      response
        .status(200)
        .json({ status: `Activity ${id} successfully deleted.` });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ status: "Server Error", error });
    }
  } else {
    response.status(405).json({ status: "Method Not Allowed" });
  }
}
