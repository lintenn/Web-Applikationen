var express = require("express");
var router = express.Router();
const fs = require('fs');


let blogposts = [];

let exampleBlog =
{
    id: 0,
    title: "Example Blog",
    username: "jesu-m0",
    date: "2021-05-01",
    text: "This is an example blog post."
}

let id = 1;

blogposts.push(exampleBlog);

router.get('/',function(req,res){
    res.render("blogs" , {blogposts: blogposts});
})

router.post('/',function(req,res){

    let newBlog = {
        id: id,
        title: req.body.title,
        username: req.body.username,
        date: req.body.date,
        //date: convertStringToDate(req.body.date),
        text: req.body.text
    }

    console.log(req.body.date);

    id++;

    blogposts.push(newBlog);

    res.redirect('/blog/');
})

function convertStringToDate(dateString) {
    let dateParts = dateString.split('-'); // Dividir la cadena en partes separadas por '-'
    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1; // Los meses en el objeto Date son zero-based, por lo que se resta 1
    let day = parseInt(dateParts[2]);
  
    let dateObject = new Date(year, month, day);
    return dateObject;
  }

router.get('/newPost',function(req,res){
    formSubmit={action: "/blog/", method: "POST"};
    formInputs= [
        {label: "Title", name: "title", type: "text", required: true},
        {label: "Username", name: "username", type: "text", required: true},
        {label: "Date", name: "date", type: "date", required: true},
        {label: "Text", name: "text", type: "text", required: true}
    ];
    res.render("blogpost", {formInputs: formInputs, formSubmit: formSubmit});
})

router.get('/:id',function(req,res){   
    res.render("fullBlog", {blog: blogposts[req.params.id]});
})

module.exports = router;
