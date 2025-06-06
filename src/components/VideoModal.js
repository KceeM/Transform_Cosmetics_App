
import "./VideoModal.css";
import React, { useState } from "react";

function VideoModal({ video, onClose }) {
  const [showVideo, setShowVideo] = useState(false);
  if (!video) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>{video.title}</h3>
        <p>{video.description}</p>

        <div className="video-wrapper">
          {!showVideo ? (
            <img
              src={video.thumbnail}
              alt="Thumbnail"
              className="video-thumbnail"
              onClick={() => setShowVideo(true)}
              style={{ cursor: "pointer", width: "100%", borderRadius: "8px" }}
            />
           ) : (
            <iframe
              src={video.url}
              width="100%"
              height="400"
              allow="autoplay"
              title={video.title}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
