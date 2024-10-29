const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const fs = require('fs');

// Enable CORS for all origins
app.use(cors());

const data = fs.readFileSync('API.txt', 'utf8').split('\n');
const app_id = data[0].trim();
const app_key = data[1].trim();

// Route to fetch word data
app.get('/api/word/:word', async (req, res) => {
    const word = req.params.word;
    const url = `https://od-api.sandbox.oxforddictionaries.com/api/v2/entries/en-gb/${word}`;

    try {
        const response = await axios.get(url, {
            headers: {
                app_id: app_id,
                app_key: app_key
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data from Oxford API:", error.response?.data || error.message);
        // Send back the error message and status code to the frontend
        res.status(error.response?.status || 500).json({
            message: "Failed to fetch data from Oxford API",
            error: error.response?.data || error.message,
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});

require('dns').lookup('google.com', (err, address, family) => {
    console.log('address:', address);
});


