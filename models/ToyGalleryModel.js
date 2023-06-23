const mongoose = require('mongoose');

var ToyGalleryScheme = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
})

var ToyGalleryModel = mongoose.model( "ToyGallary",ToyGalleryScheme, "ToyGallary")

module.exports = ToyGalleryModel;