const express = require('express');
const app=express();
const cors = require('cors');
const userUpload=require('./routes/index.js');
app.use(cors())

app.use('/user',userUpload);


app.listen(3000,()=>{
    console.log('Server is Running');
});