import React, { useState ,useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoPlayerPage from "./components/VideoPlayer";
import DesktopLayout from "./layout/Desktop";
import MobileLayout from "./layout/Mob";
import Auth from "./pages/Auth";
import Upload from "./pages/Upload";
import Landing from "./pages/Landing";
import axios from "axios";


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedCriterion, setSelectedCriterion] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`"http://localhost:3001/api/videos?page={page}"`); // adjust page if needed
        setVideos(response.data.videos); // store videos in state
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, []);

  console.log(videos);

  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Home Page with Desktop + Mobile layouts */}
          <Route
            path="/"
            element={
              <div className="container mx-auto max-w-7xl px-2 py-4">
                <DesktopLayout
                  onVideoClick={handleVideoClick}
                  selectedFilter={selectedFilter}
                  onFilterChange={setSelectedFilter}
                  selectedCriterion={selectedCriterion}
                  onCriterionChange={setSelectedCriterion}
                  mockVideos={videos}
                />
                <MobileLayout
                  onVideoClick={handleVideoClick}
                  selectedFilter={selectedFilter}
                  onFilterChange={setSelectedFilter}
                  selectedCriterion={selectedCriterion}
                  onCriterionChange={setSelectedCriterion}
                  mockVideos={videos}
                />
              </div>
            }
          />
          <Route path="/signup" element={<Auth isLoginView={false} />} />
          <Route path="/login" element={<Auth isLoginView={true} />} />
          <Route path="/upload" element={<Upload />} />
          <Route
            path="/video/:id"
            element={<Landing mockVideos={videos} />}
          />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
