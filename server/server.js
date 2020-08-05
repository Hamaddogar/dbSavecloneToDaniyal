const express=require("express")
const server=express()
   require('../server/db/dbconfigdata')
 const bodyparser= require("body-parser")
 const  User = require('../server/Model/formSceem')
 var cors = require('cors')
const  PORT=5000;



server.use(cors())
server.use(bodyparser.json())

 server.post('/form',(req,res)=>{
  var user= new User(req.body)
  user.save((err,data)=>{
    if(err)
    {
     
  return res.json({success:false,err:err})
    }

   res.json({success:true,data:data})

  })

 })




server.get('/',(req,res)=>{
 res.send("server is running")
})
server.listen(PORT,()=>{console.log("Server is running",PORT)})