const mongoose = require("mongoose")

var ToySchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String
})

var ToyModel = mongoose.model("Toy",ToySchema, 'Toy')
module.exports = ToyModel;