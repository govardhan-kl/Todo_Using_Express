const mongoose = require('mongoose');

//creating the database schema
const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})

//whnever we are setting the collection start with capitalletter
const Todo =  mongoose.model('todoData',ToDoSchema) // this is to set the name in database


module.exports = Todo;