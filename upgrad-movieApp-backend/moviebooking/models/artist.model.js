const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    wiki_url: String,
    profile_url: String,
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Artist', ArtistSchema);