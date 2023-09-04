const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const showRoomController = require('../controllers/showRoomCotroller')

router.get('/showRoom', showRoomController.controller.renderShowRoom)


module.exports = router