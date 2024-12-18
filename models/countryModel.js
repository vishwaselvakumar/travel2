const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  mainImage: { type: String, required: true },
  otherImages: [{ type: String }], // List of images
});

module.exports = mongoose.model('Country', countrySchema);
