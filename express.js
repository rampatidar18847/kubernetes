const exp = require('constants');
const express = require('express')
const route = express();

// route.get('',(req,res)=>
// {
//    console.log("bowser req => ",req.query.name)
//    res.send("this is my home");
//    res.send("this is the second line of this code");
// })

// route.get('/about',(req,res)=>
// {
//     res.send("this is my about page");
// })

// route.listen(5000);


const path = require('path');
const dirpath = path.join(__dirname,'files');

route.use(express.static(dirpath));
route.listen(5000);

//firewall is a network security system 