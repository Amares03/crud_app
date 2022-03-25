const express = require('express');
const router = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
var Userdb = require('../model/model');

/**
 * @description Root Rout
 * @method GET
 */
router.get('/',services.homeRoute);


/**
 * @description add user Rout
 * @method GET/add-user
 */
router.get('/add-user',services.addUserRoute);


/**
 * @description Root Rout
 * @method GET/update-user
 */
router.get('/update-user',services.updateUserRout);


// API
router.post('/api/users',(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"content cannot be empity"});
        return;
    }

    // new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    // save the user in the database
    user
    .save(user)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "Some Error Ocured While Creating User"});
    });
});
// router.get('/api/users',controller.find);
// router.put('/api/users',controller.update);
// router.delete('/api/users',controller.delete);

module.exports = router;