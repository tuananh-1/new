const mongoose = require("mongoose")

var ToySpecialSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String
})

var ToySpecialModel = mongoose.model("ToySpecial",ToySpecialSchema, 'ToySpecial')

module.exports = ToySpecialModel;