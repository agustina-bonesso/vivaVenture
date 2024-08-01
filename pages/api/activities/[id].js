import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const activity = await Activity.findById(id);
    if (!activity) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(activity);
  }
  if (request.method === "PUT") {
    const activityData = request.body;
    await Activity.findByIdAndUpdate(id, activityData);
    return response.status(200).json({ status: `Activity ${id} updated!` });
  }
  if (request.method === "DELETE") {
    await Activity.findByIdAndDelete(id);
    response
      .status(200)
      .json({ status: `Activity ${id} successfully deleted.` });
  }
}
