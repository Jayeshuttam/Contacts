const express =require("express")
const app=express()
const Connect = require('./db/connect')
const contact = require("./model/contact")
const routes = require('./routes/contact')
const Custom_Error = require('./errors/custom-errors')
const errorHandlerMiddleware = require('./middleware/error-handler')
const controller=require('./controller/controller')

app.use(express.json())
app.use(errorHandlerMiddleware)

//All CRUD routes
app.use('',routes)



MONGO_URI = 'mongodb+srv://jayesh:jayesh@cluster0.ri3a2.mongodb.net/ContactsApp?retryWrites=true&w=majority'
PORT = 5000
//starting server
const start=async()=>{
    try {
        await Connect(MONGO_URI)
        app.listen(PORT,console.log(`Server listening to Port ${PORT}`))
    } catch (error) {console.log(error)
        
    }
}

start()
