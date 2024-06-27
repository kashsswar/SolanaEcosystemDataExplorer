const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://fetch.thegrid.id/');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from The Grid API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
router.get('/:id', async (req, res) => {
    const profileId = req.params.id; // Extract profile ID from request parameters
    const apiUrl = `https://fetch.thegrid.id/?id=${profileId}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from The Grid API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router;
