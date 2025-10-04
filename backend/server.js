require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const createDefaultAdmin = require('./createAdmin')


const app = express();
const PORT=5000;


app.use(cors());
app.use(express.json());

connectDB();
createDefaultAdmin();

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    
    console.log(`server running on http://localhost:${PORT}`);
})

