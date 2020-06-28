const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hwangso595:asdf@cluster0-jsyn1.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'));

app.get('/', (req,res) => {
    res.send('hello world');
})

app.listen(5000);

