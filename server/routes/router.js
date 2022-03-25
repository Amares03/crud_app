const express = require('express');
const router = express.Router();
const services = require('../services/render');


router.get('/',services.homeRoute);

router.get('/add-user',(req,res)=>{
    res.render('add_user');
});

router.get('/update-user',(req,res)=>{
    res.render('update_user');
});

module.exports = router;