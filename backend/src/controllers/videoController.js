import Video from '../models/Video.js';
// This file contains the logic for handling video-related requests.
// This is mock data; in a real app, you would fetch from a database.


export const getVideos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default page = 1
    const limit = 6;
    const skip = (page - 1) * limit;

    const [videos, total] = await Promise.all([
      Video.find().skip(skip).limit(limit),
      Video.countDocuments()
    ]);

    res.status(200).json({
      page,
      totalPages: Math.ceil(total / limit),
      totalVideos: total,
      videos,
    });
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addVideo = async (req, res) => {
  console.log("Incoming body:", req.body); // 👀 debug here

  try {
    const { title, category, year } = req.body;

    if (!title || !category || !year) {
      return res.status(400).json({ message: "Title, category, and year are required" });
    }

    const newVideo = new Video({ title, category, year });
    await newVideo.save();

    res.status(201).json({ message: "Video added successfully", video: newVideo });
  } catch (error) {
    console.error("Error adding video:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const filterVideos = (req, res) => {
  const { category, year, query } = req.query;
  let filteredVideos = [...mockVideos];

  // Filter by category if provided
  if (category && category !== 'All') {
    filteredVideos = filteredVideos.filter(video => video.category === category);
  }

  // Filter by year if provided
  if (year && year !== 'All Years') {
    filteredVideos = filteredVideos.filter(video => video.year.toString() === year);
  }

  // Filter by search query if provided
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredVideos = filteredVideos.filter(video =>
      video.title.toLowerCase().includes(searchQuery)
    );
  }

  res.status(200).json(filteredVideos);
};
