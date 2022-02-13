const mongoose =require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    name: {type: String, required: true},
    rank: String,
    kills: Number,
    legend: String
})

module.exports = mongoose.model('Profile', profileSchema)