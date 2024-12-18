const Hotel = require('../models/hotelModel');

// Add a new hotel
const addHotel = async (req, res) => {
  try {
    const { name, description, location, price } = req.body;
    const images = req.files.map(file => file.path);

    const newHotel = new Hotel({ name, description, location, price, images });
    await newHotel.save();
    res.status(201).json({ message: 'Hotel added successfully', data: newHotel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addHotel, getHotels };
