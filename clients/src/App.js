import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.css';
import StoryDetail from './detail/detail';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getStories')
      .then(res => res.json())
      .then(data => setStories(data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              {stories.map((story, index) => (
                <div key={index} className="Story-card">
                  <h3>{story.title}</h3>
                  <img src={story.multimedia[0].url} alt={story.title} />
                  <Link to={`/story/${index}`}>Read More</Link>
                </div>
              ))}
            </header>
          }/>
          <Route path="/story/:id" element={<StoryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;