import express from 'express';
import  { addVideo , getVideos, filterVideos } from '../controllers/videoController.js';

const videoRouter = express.Router();

videoRouter.post("/", addVideo);        // POST /api/videos
videoRouter.get("/", getVideos);        // GET /api/videos?page=1
videoRouter.get("/filter", filterVideos); // GET /api/videos/filter?category=...

export default videoRouter;
