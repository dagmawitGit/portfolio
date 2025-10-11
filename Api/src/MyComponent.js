import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">🎬 Latest Psychology Videos</h1>
      <div className="row g-4">
        {videos.map(video => (
          <div key={video.id} className="col-md-4">
            <div className="card shadow-sm h-100 video-card">
              <img src={video.thumbnail} className="card-img-top" alt={video.title} />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
                <p className="text-muted mb-1"><small>Channel: {video.channel}</small></p>
                <p className="text-muted"><small>Published: {video.publishedAt}</small></p>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                  ▶ Watch Video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
