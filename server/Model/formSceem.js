const mongoose=require('mongoose')


 const userSceehma=mongoose.Schema({
firstName:String,
lastName:String,
email:String,
password:String
 })

 const User =mongoose.model('User',userSceehma)
  module.exports= User