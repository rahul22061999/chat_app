const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
dotenv.config();

app.use(cors({
     origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
    res.send("API is running")
} );


app.get('/api/chat', (req, res) => {
    res.send(chats)
});


app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });


