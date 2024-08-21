import mongoose from "mongoose";
import "./Review";
import "./User";
const { Schema } = mongoose;

const activitySchema = new Schema({
  title: { type: String, required: true },
  category: [{ type: String, required: true }],
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String },
  images: [
    {
      data_url: { type: String },
    },
  ],
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
