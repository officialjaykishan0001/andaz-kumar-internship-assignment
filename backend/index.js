const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./utils/mongodb')

const doctorRoutes = require('./routes/doctor.route')

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection

// Routes
app.use('/api/v1', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB()
  console.log(`Server running on port ${PORT}`)
});
