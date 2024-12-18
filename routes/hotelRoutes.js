const express = require('express');
const { addHotel, getHotels } = require('../controllers/hotelController');
const upload = require('../middlewares/multerConfig');

const router = express.Router();

router.post('/', upload.array('images', 5), addHotel); // Add hotel
router.get('/', getHotels); // Get all hotels

module.exports = router;
