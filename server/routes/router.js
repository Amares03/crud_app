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
router.get('/api/users',controller.find);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);

module.exports = router;