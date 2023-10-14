require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRoutes);

const mongoUri =
  'mongodb+srv://Track-server:TrackerDB@cluster0.9nxqpef.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});


app.get('/',requireAuth,(req,res)=>{
        res.send(`Your Email : ${req.user.email}`);
});


app.listen(3000,()=>{
    console.log('listening on port 3000');
})

//===================> npm run dev <===============================//
//===================> node src/index.js <===========================//