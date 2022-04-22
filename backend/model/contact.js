const { contentType } = require('express/lib/response')
const mongoose = require('mongoose')
const{isEmail} =require('validator')

const ContactSchema = new mongoose.Schema(
    {
        
        first_name:{
            type:String,
            required:[true,"Name must be provided"]
        },
        last_name:{
            type:String,
            required:[true,"Name must be provided"]
        },
        email:{
            type:String,
            required:[true,"Email must be provided"],
            unique:true,
            validate:[isEmail,'Invalid Email']
        },
        phone:{
            type:Number,
            unique:true
        },
        
    }
)

module.exports =mongoose.model('Contacts',ContactSchema)