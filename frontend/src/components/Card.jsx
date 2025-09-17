export default function Card({ video, onClick }) {
  return (
    <div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    onClick={() => onClick(video)}
  >
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-white text-lg font-semibold truncate">{video.title}</h3>
      <p className="text-gray-400 text-sm mt-1">{video.creator}</p>
      <p className="text-gray-500 text-xs mt-1">{video.views} views</p>
    </div>
  </div>
  );
}