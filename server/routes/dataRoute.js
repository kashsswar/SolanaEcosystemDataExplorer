const express = require('express');
const axios = require('axios');
const router = express.Router();

// Search endpoint to find profile ID
router.get('/search', async (req, res) => {
    const query = req.query.q; // Example: 'bitcoin'
    try {
        const response = await axios.get(`https://search.thegrid.id/?q=${query}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching for profile:', error.message);
        res.status(500).json({ error: 'Failed to search profile' });
    }
});

// Fetch endpoint to get detailed profile information
router.get('/fetch', async (req, res) => {
    const profileId = req.query.id; // Example: 'ID-1'
    try {
        const response = await axios.get(`https://fetch.thegrid.id/?id=${profileId}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching profile details:', error.message);
        res.status(500).json({ error: 'Failed to fetch profile details' });
    }
});

module.exports = router;
