const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const connectDB = require("./config/db")
const colos = require('colors');
const userRoutes = require('./routes/userRoutes')
dotenv.config();

connectDB();
app.use(cors({
     origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
    res.send("API is running")
} );


app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`. green.bold);
  });


