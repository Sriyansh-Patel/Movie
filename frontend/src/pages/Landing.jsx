import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Landing({ mockVideos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const video = mockVideos.find((v) => v.id === Number(id));

  if (!video) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-8 text-white">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-400 hover:text-white transition-colors"
        >
          &larr; Back to Home
        </button>
        <p className="text-lg text-red-400">Video not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 bg-gray-950 text-white min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-gray-400 hover:text-white transition-colors duration-200"
      >
        &larr; Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Player Section */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden mb-6">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-20 w-20 text-white opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Title + Meta */}
          <div className="border-b border-gray-800 pb-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {video.title}
            </h1>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{video.views} views</span>
              <span>|</span>
              <span>2 days ago</span>
            </div>
          </div>

          {/* Creator Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div>
              <p className="font-semibold">{video.creator}</p>
              <p className="text-gray-400 text-sm">1.5M Subscribers</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-sm">User123</p>
                <p className="text-gray-300 text-sm mt-1">Awesome video!</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-sm">Developer42</p>
                <p className="text-gray-300 text-sm mt-1">
                  Very helpful tutorial, thank you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
