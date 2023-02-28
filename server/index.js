const express = require('express')
const cors =require('cors')
const connectDB = require('./config/db');
connectDB();
const app=express()

port=process.env.PORT||3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log('server is running');
})




