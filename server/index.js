const express = require('express')
const cors =require('cors')
const connectDB = require('./config/db');
const dotenv=require('dotenv')
const contactRouter = require("./routes/contactsRoutes");
dotenv.config()
connectDB();
const app=express()

port=process.env.PORT||3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/contacts", contactRouter);

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})




