const express = require('express');
const router = express.Router();
const services = require('../services/render');

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

module.exports = router;