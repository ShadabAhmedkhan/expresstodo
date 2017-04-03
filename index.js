/**
 * Created by angular on 4/4/17.
 */
var express = require('express')
var bodyparser = require('body-parser');
var app = express()

app.set('view engine', 'ejs');

// create application/json parser
var jsonParser = bodyparser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyparser.urlencoded({ extended: false });
let todolist =[];
app.set('view engine', 'ejs');
app.use(express.static(`__dirname/views`));

app.get('/', urlencodedParser, function (req,res) {
    res.render('./todo',{list:""})
});
app.post('/', urlencodedParser, function (req,res) {
    todolist.push(req.body.task);
    res.render('./todo',{list:todolist});

});
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});