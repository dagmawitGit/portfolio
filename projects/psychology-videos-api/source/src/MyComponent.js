import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import videosData from './videos.json';

function App() {
  const [videos] = useState(videosData);

  return (
    <div className="container my-5 Big">
      <h1 className="text-center mb-2">💻 Latest Computer Science Videos</h1>
      <p className="text-center text-muted mb-5">Curated from freeCodeCamp.org — free courses on programming, systems, and CS fundamentals</p>
      <div className="row g-4">
        {videos.map((video, i) => (
          <div key={video.id} className="col-md-4">
            <div className="card shadow-sm h-100 video-card" style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}>
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
