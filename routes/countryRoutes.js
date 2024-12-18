const express = require('express');
const { addCountry, getCountries } = require('../controllers/countryController');
const upload = require('../middlewares/multerConfig');

const router = express.Router();

router.post(
  '/',
  upload.fields([{ name: 'mainImage', maxCount: 1 }, { name: 'otherImages', maxCount: 5 }]),
  addCountry
); // Add country
router.get('/', getCountries); // Get all countries

module.exports = router;
