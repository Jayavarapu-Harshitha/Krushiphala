const mongoose =require('mongoose')

const vendorSchema=mongoose.Schema({
   name:{
        type:String,
        required:true
    },
   email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    machine:{
        type:String,
        required:true
    },
    price_per_day:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('vendors',vendorSchema);