const express = require('express');
const router = express.Router();
const services = require('../services/render');

/**
 * @description Root Rout
 * @method GET
 */
router.get('/',services.homeRoute);

router.get('/add-user',services.addUserRoute);

router.get('/update-user',services.updateUserRout);

module.exports = router;