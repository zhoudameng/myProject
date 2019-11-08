const express = require('express');
const router = express.Router();
const purchaseModel=require("../models/purchaseModel");

// 解决跨域问题
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','PUT,GET,DELETE,OPTIONS');
    res.header("Access-Coantrol-Allow-Headers","X-Requested-With");
    res.header('Access-Control-Allow-Headers','Content-Type');
    if(req.method=="OPTIONS")res.send(200);
    else next();
})




router.get('/purchaseModel',(req,res)=>{
    res.jsonp(purchaseModel.getpurchaseInfoById())
})

module.exports=router;