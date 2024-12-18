const Country = require('../models/countryModel');

// Add a new country
const addCountry = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const mainImage = req.files['mainImage'][0].path;
    const otherImages = req.files['otherImages'] ? req.files['otherImages'].map(file => file.path) : [];

    const newCountry = new Country({ name, description, price, mainImage, otherImages });
    await newCountry.save();
    res.status(201).json({ message: 'Country added successfully', data: newCountry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all countries
const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addCountry, getCountries };


