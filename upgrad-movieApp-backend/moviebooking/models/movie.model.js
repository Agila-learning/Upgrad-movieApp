const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: String,
    release_year: Number,
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }]
});

module.exports = mongoose.model('Movie', MovieSchema);
