const express = require('express');
const router = express.Router();
const ArtistController = require('../controllers/artist.controller');

// Define route to get artists
router.get('/', ArtistController.getArtists);

module.exports = router;
