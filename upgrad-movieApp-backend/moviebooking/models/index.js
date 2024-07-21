// models/index.js
const mongoose = require('mongoose');
const dbConfig = require('../config/db.config.js'); // Ensure this path is correct

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require('./movie.model.js')(mongoose);
db.users = require('./user.model.js')(mongoose);
db.artists = require('./artist.model.js')(mongoose);
db.genres = require('./genre.model.js')(mongoose);

module.exports = db;
