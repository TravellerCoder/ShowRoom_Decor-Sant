const path = require('path');
const fs = require('fs');

const controller = {
    renderShowRoom: (req, res) =>{
        return res.render(path.resolve('src/views/showRoom'))
    },

    renderPisoFlotante: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/pisoFlotante'))
    },

    renderCortinas: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/cortinas'))
    },

    renderCesped: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/cesped'))
    },

    renderDeck: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/deck'))
    },

    renderPulido: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/pulido'))
    },

    renderRevestimiento: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/revestimiento'))
    },

    renderAlfombras: (req, res) => {
        return res.render(path.resolve('src/views/showRoom/alfombra'))
    },
}

module.exports = {controller}