const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({});
const PORT = process.env.PORT || 3001;

// Data base
const connectDB = require('./src/config/connectiondb');
connectDB()

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT,(error)=>{
    if (error) {
        console.log("❌Error in stablish server: ", error);
    } else {
        console.log(`✅Server is running on ${PORT} port number`);
    }
});
