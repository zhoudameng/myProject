const express = require('express');
const router = express.Router();
const homeModel=require("../models/homeModule");

router.get('/home',(req,res)=>{
    res.jsonp(home,homeInfo())
})