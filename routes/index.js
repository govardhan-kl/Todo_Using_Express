const express = require('express');
const router = express.Router()

const Todo = require('../models/Todo');


//this is for initial display
router.get('/', function(req, res){
    console.log('home rendered')
    Todo.find({})
    .then(function(todo){
        return res.render('home',{
            todo_data: todo
        })
    })
    .catch(function(err){
        console.log(`Error is : ${err}`)
    })
   
});


// this is to store data and create a TODO
router.post('/create-task', function(req, res){
    Todo.create({
        title: req.body.title,
        category: req.body.category,
        date: req.body.dueDate
    })
    .then(function(){
        console.log("new todo added")
        res.redirect('back')
    })
    .catch(function(err){
        console.log(`Error while creating is : ${err}`)
    })
})


//this is to remove or delete the TODO
router.get('/delete-task/:id', function(req,res){
    let id = req.params.id;
    Todo.findByIdAndDelete(id)
    .then(function(del){
        console.log("deleted successfully"+ del)
        res.redirect('/')
    })
    .catch(function(err){
        console.log(`Error in deleting is : ${err}`)
    })
})



module.exports = router