const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const storeController = require('../controllers/storeController');


router.get('/store', storeController.controller.renderStore )


module.exports = router