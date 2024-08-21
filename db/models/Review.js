import mongoose from "mongoose";
import "./User";
import "./Activity";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  author: { type: Schema.Types.ObjectId, required: false, ref: "User" },
  rating: { type: Number, required: true },
  activity: { type: Schema.Types.ObjectId, required: false, ref: "Activity" },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
