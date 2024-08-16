import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";
import Activity from "@/db/models/Activity";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(request, response) {
  const userId = session.user.id;
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  if (request.method === "POST") {
    try {
      const { activityId, rating } = request.body;
      if (!activityId || !rating) {
        return response
          .status(400)
          .json({ message: "Activity ID and rating are required" });
      }
      // Erstelle ein neues Review
      const newReview = await Review.create({
        author: userId, // Session enthält die Benutzer-ID
        rating,
      });
      // Füge das Review zur Aktivität hinzu
      const updatedActivity = await Activity.findByIdAndUpdate(
        activityId,
        { $push: { reviews: newReview._id } },
        { new: true }
      ).populate("reviews");
      return response.status(201).json(updatedActivity);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
