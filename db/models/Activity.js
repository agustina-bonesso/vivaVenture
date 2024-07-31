import mongoose from "mongoose";

const { Schema } = mongoose;

const activitySchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  category: [{ type: String, required: true }],
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  images: [
    {
      data_url: { type: String, required: true },
    },
  ],
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
