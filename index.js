const express = require('express');
const app = express();
var $ = require('jquery');
const port = 8880;

//connect to mongoDB using mongoose
const db = require('./config/mongoose');

// this is to encode form data
app.use(express.urlencoded({ extended: true }));

//this is to access static files
app.use(express.static('assets'));


//this is to setup our view engine and views folder
app.set('view engine', 'ejs');
app.set('views', './views');


//middleware where all the routes are accesed herer
app.use('/',require('./routes/index')); 



app.listen(port, function(err){
    if (err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})