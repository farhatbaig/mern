import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
 const StoryDetail = () => {
    const [story, setStory] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3001/getStories/${id}`)
        .then(res => res.json())
        .then(data => setStory(data))
        .catch(err => console.log(err));
    }, [id]);
  
    return (
      <div className="Story-detail">
        {story ? (
          <>
            <h2>{story.title}</h2>
            <img src={story.multimedia[0].url} alt={story.title} />
            <p>{story.abstract}</p>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
  export default StoryDetail;