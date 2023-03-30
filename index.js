/*const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})*/

var express=require('express');
var app=express();

app.get('/contact',function(req,res){
res.send('contact me for help');
});

app.get('/about',function(req,res){
res.send('i am a student');
});

app.get('/index',function(req,res){
res.send('This is the index page');
});

app.get('/:id',function(req,res){
res.send('the id you specified is'+req.params.id);
});

app.get('/',function(req,res){
res.send('Home Page');
});
app.listen(8000);