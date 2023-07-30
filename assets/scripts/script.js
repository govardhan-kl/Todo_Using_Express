// var ad = require('jquery') //we cant do require bcoz reqire is only recognized by the node, so we have take jquery script itself
console.log("scripts")


//this is for calling delete for whichever we have marked as checked for input tag.
function delete_task(){
    var checkbox = document.querySelectorAll('.custom-checkbox:checked')
    for (let i of checkbox){
        $.get('/delete-task/'+i.id)
    }  
}

function add(a,b){
    return a+b;
}

console.log(add(1))