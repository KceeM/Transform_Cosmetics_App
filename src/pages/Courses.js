import React, { useState } from "react";
import "./Courses.css";
import courseData from "../data/courseData";
import VideoModal from "../components/VideoModal";

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="courses-page">
      <h2>Our Learning Hub</h2>

      {/* Categories Section */}
      <div className="course-categories">
        {courseData.map(category => (
          <div
            key={category.id}
            className="course-category"
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.image} alt={category.title} />
            <span>{category.title}</span>
          </div>
        ))}
      </div>

      {/* Video Section */}
      {selectedCategory && (
        <div className="video-section">
          <h3>{selectedCategory.title}</h3>
          <p>{selectedCategory.description}</p>
          <div className="video-grid">
            {selectedCategory.videos.map((video, index) => (
              <div key={index} className={`video-card ${video.locked ? "locked" : ""}`}>
                {video.locked ? (
                  <div className="video-overlay">
                    <p>Locked - Pay R550 <br></br> COMING SOON</p>
                    
                  </div>
                ) : (
                  <div
                    className="video-thumbnail"
                    onClick={() => setSelectedVideo(video)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-overlay">▶</div>
                 </div>
                )}
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
      
    </div>
  );
}

export default Courses;
