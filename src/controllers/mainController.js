const path = require('path');
const fs = require('fs');

const controller = {
    index: (req, res) => {
        return res.render(path.resolve('src/views/index'))
    },

    renderContact: (req, res) => {
        return res.render(path.resolve('src/views/contact'))
    },

    renderAbout: (req, res) => {
        return res.render(path.resolve('src/views/about'))
    }
}

module.exports = {controller}