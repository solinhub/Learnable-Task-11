const mongoose = require('mongoose');

// Define RoomType model
const RoomType = mongoose.model('RoomType', new mongoose.Schema({
    name: String,
}));

module.exports = RoomType;