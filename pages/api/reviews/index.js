import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";
import Activity from "@/db/models/Activity";
import User from "@/db/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";
export default async function handler(request, response) {
  await dbConnect();
  const token = await getToken({ req: request });
  const session = await getServerSession(request, response, authOptions);
  const userId = token?.sub;
  const userName = token?.name;
  const picture = token?.picture;
  if (!session) {
    return response.status(401).json({ message: "Not authorized" });
  }
  if (request.method === "POST") {
    try {
      const { activityId, rating, comment } = request.body;
      if (!activityId || !rating) {
        return response
          .status(400)
          .json({ message: "Activity ID and rating are required" });
      }

      const existingUser = await User.findOne({ userId });
      const user = existingUser
        ? existingUser
        : await User.create({
            userId: userId,
            name: userName,
            picture: picture,
          });

      const newReview = await Review.create({
        author: user._id,
        rating,
        activity: activityId,
        comment,
      });
      const updatedActivity = await Activity.findByIdAndUpdate(
        activityId,
        { $push: { reviews: newReview._id } },
        { new: true }
      );
      return response.status(201).json(updatedActivity);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
