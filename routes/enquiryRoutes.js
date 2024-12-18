const express = require('express');
const { addEnquiry, getEnquiries } = require('../controllers/enquiryController');

const router = express.Router();

router.post('/', addEnquiry); // Add enquiry
router.get('/', getEnquiries); // Get all enquiries

module.exports = router;
