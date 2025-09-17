import mongoose from "mongoose";
import { getDbConnection } from "../db/db.js";

const videosDb = getDbConnection("Videosb");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  year: { type: Number, required: true },
}, { timestamps: true });

// force collection name = "video"
const Video = videosDb.models.Video || videosDb.model("Video", videoSchema, "video");

export default Video;
