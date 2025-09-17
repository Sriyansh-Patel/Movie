export default function VideoPlayer({ video, onClose }) {
    return (
        
  <div className="container mx-auto p-4 flex-1">
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-white mb-4 flex items-center space-x-2 transition-colors duration-200"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>Back to Home</span>
    </button>
    <div className="bg-gray-800 rounded-xl shadow-lg p-6">
      {/* Mock video player */}
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-contain" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="h-16 w-16 text-white opacity-70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Video details */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-3xl font-bold text-white mb-2 md:mb-0">{video.title}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm">{video.views} views</span>
          <span className="text-gray-400 text-sm">|</span>
          <span className="text-gray-400 text-sm">2 days ago</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
        <div>
          <p className="text-white font-semibold">{video.creator}</p>
          <p className="text-gray-400 text-sm">1.5M Subscribers</p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
          Subscribe
        </button>
      </div>
      {/* Mock description and comments */}
      <p className="text-gray-300 leading-relaxed mb-6">
        This is a detailed description of the video content. We'll cover everything from the basics to advanced techniques. Don't forget to like and subscribe for more great content!
      </p>
      <h2 className="text-xl font-bold text-white mb-4">Comments</h2>
      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="text-white font-semibold">User123</p>
          <p className="text-gray-300 text-sm">Awesome video, very helpful!</p>
        </div>
      </div>
    </div>
  </div>

    )}
