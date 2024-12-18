const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const enquiryRoutes = require('./routes/enquiryRoutes');
const countryRoutes = require('./routes/countryRoutes');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// MongoDB Connection
mongoose
  .connect("mongodb+srv://vishwaultraflysolutions:RJGme0ZWw2MAgVZs@cluster0.fwwc6.mongodb.net/travel?retryWrites=true&w=majority&appName=Cluster0"
, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/hotels', hotelRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
