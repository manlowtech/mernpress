const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path')
//const logger = require('morgan');
require('dotenv').config()
const app = express();
app.use(cors());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let url =""
let options ={}
if(process.env.MONGO_URL && process.env.MONGO_URL !== ""){
    require('./mongodb/db')(mongoose,url,options)
    require('./mongodb')(app)
}else{
    require('./routes')(app);
}
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to  the beginning of nothingness.',
}));/*
if(process.env.NODE_ENV == "production"){

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

} */
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app now running on port ${port}`);
})