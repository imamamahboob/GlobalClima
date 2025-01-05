const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;
const apiKey = 'yourAPIkeyhere'; // Replace with OpenWeatherMap API key

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Weather App');
  });

app.get('/weather', async (req, res) => {

  const city = req.query.city;
  try {

    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
    
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'City not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
