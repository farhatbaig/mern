const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000' 
  }));

app.listen(3001, () => {
  console.log("Server running on 3001");
});

app.get('/getStories', async (req, res) => {
  const stories = await axios.get(`${apiUrl}?api-key=${apiKey}`);
  res.send(stories.data);
});
app.get('/getStories/:index', async (req, res) => {
  const index = req.params.index;
  const stories = await axios.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=YIO7Wio7uc8kng2OQd5pvALrTQqs0rRA');
  const story = stories.data.results[index];
  console.log('data',story);
  if (story) {
    res.send(story);
  } else {
    res.status(404).send('Story not found');
  }
});