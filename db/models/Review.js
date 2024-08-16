import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  author: { type: Schema.Types.ObjectId, required: false, ref: "User" },
  rating: { type: Number, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
