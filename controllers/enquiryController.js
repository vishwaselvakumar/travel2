const Enquiry = require('../models/enquiryModel');

// Add a new enquiry
const addEnquiry = async (req, res) => {
  try {
    const { name, number, message } = req.body;
    const newEnquiry = new Enquiry({ name, number, message });
    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry saved successfully', data: newEnquiry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all enquiries
const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addEnquiry, getEnquiries };
