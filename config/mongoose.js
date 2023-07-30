const mongoose = require('mongoose');

//connecting to our database
mongoose.connect('mongodb://0.0.0.0:27017/to_do_list_db');

//checking the connection
const db = mongoose.connection;

//if connection is not proper
db.on('error',console.error.bind(console,'error connecting to database'));

//if connection is proper
db.once('open', function(){
    console.log('succesfull conecction to DB');
});

module.exports = db