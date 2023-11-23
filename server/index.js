// uploadData.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://amandaomasta1:1234@cluster0.4djec6h.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

connect();

// Define a simple mongoose model
const Item = mongoose.model('Item', { name: String });

// Set up a route for uploading data
app.post('/upload', async (req, res) => {
    try {
        // Assuming the uploaded data is in the request body
        const data = req.body;

        // Insert the data into MongoDB
        await Item.insertMany(data);

        res.status(200).json({ message: 'Data uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
