import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log("hier [id].js");
  if (request.method === "GET") {
    console.log("HIER in der api/[id].js");
    const activity = await Activity.findById(id);
    console.log(activity);
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
