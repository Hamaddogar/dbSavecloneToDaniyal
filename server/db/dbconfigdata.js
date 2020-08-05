const mongoose = require('mongoose');

 mongoose.connect("mongodb+srv://Muhammad:Muhammad@cluster0-oset3.mongodb.net/robertdb?retryWrites=true&w=majority",(err,data)=>{
    console.log("Mongodb connected")
 
 })