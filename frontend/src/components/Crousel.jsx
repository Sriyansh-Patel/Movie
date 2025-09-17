import PropTypes from "prop-types";

function Carousel({ onVideoClick, mockVideos }) {
  if (!mockVideos || mockVideos.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Videos</h2>
        <p className="text-gray-400">No videos available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Featured Videos</h2>
      <div className="flex overflow-x-auto gap-4 p-2 -m-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {mockVideos.slice(0, 4).map((video) => (
          <button
            key={video.id}
            onClick={() => onVideoClick(video)}
            className="flex-none w-64 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 bg-gray-900 text-left">
              <h3 className="text-white text-md font-semibold truncate">
                {video.title}
              </h3>
              <p className="text-gray-400 text-sm">{video.creator}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  onVideoClick: PropTypes.func.isRequired,
  mockVideos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      creator: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;