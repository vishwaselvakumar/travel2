const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Enquiry', enquirySchema);
