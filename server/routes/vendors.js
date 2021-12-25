const express=require('express')

const router=express.Router();

const Vendor = require("../models/vendor");

router.get("/",async(req,res)=>{
    try{
        const vendors = await Vendor.find();
        res.json(vendors);
    }
    catch(err)
    {
        res.send("error",err);
    }
})

router.post('/',async (req,res)=>{
    try{
const vendor1 = new Vendor({
    name:req.body.name,
    email: req.body.email,
    contact:req.body.contact,
    machine:req.body.machine,
    price_per_day:req.body. price_per_day,
    place:req.body.place,
    description:req.body.description
})
    const v =await vendor1.save();
    res.json(v);
}catch(err)
{
    res.send("Error" , err);
}
})

module.exports=router