// const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const imageSchema = new Schema({
    title: { type: String},
    description: { type: String},
    filename: { type: String},
    path: { type: String},
    originalname: { type: String},
    minetype: { type: String},
    size: { type: String},
    created_at: { type: Date, default: Date.now()}
});

//module.exports = model('Image', imageSchema);
module.exports = mongoose.model('Image', imageSchema);