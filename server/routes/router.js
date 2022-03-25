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
router.post('/api/users',controller.create);
router.get('/api/users',(req,res)=>{
    Userdb.find()
    .then(user =>{
        res.send(user);
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "Error Ocurd While Finding data"});
    });
});
router.put('/api/users/:id',(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Update Cannot be empity"});
    }
    const id = req.params.id;
    Userdb.findById(id)
    .then(user =>{
        res.send(user);
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "User Not Find"});
    });

});
// router.delete('/api/users',controller.delete);

module.exports = router;