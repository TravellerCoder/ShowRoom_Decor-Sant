const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const showRoomController = require('../controllers/showRoomCotroller')

router.get('/showRoom', showRoomController.controller.renderShowRoom)

router.get('/showRoom/piso-flotante' , showRoomController.controller.renderPisoFlotante)

router.get('/showRoom/cortinas' , showRoomController.controller.renderCortinas)

router.get('/showRoom/cesped' , showRoomController.controller.renderCesped)

router.get('/showRoom/deck' , showRoomController.controller.renderDeck)

router.get('/showRoom/pulido' , showRoomController.controller.renderPulido)

router.get('/showRoom/epoxy', showRoomController.controller.renderEpoxy)

router.get('/showRoom/revestimiento' , showRoomController.controller.renderRevestimiento)

router.get('/showRoom/alfombra' , showRoomController.controller.renderAlfombras)

router.get('/showRoom/escaleras', showRoomController.controller.renderEscaleras)


module.exports = router