import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function Popular({ onVideoClick, mockVideos }) {
  // Add a check to ensure mockVideos is a valid array before trying to slice it.
  // If it's not a valid array, return a default JSX element.
  if (!mockVideos || !Array.isArray(mockVideos) || mockVideos.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4">Popular Videos</h2>
        <p className="text-gray-400">No popular videos available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Popular Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {mockVideos.slice(4, 6).map(video => (
          <Card key={video.id} video={video} onClick={onVideoClick} />
        ))}
      </div>
    </div>
  );
}

Popular.propTypes = {
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

export default Popular;