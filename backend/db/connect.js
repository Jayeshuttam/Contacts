const mongoose = require("mongoose")

const connectDB = (url)=>{
    return mongoose.connect(url,{        
        useUnifiedTopology:true,
    },(err)=>{
        if(err)
            console.log(err)
        console.log("Connected to DB")
    })
}

module.exports = connectDB