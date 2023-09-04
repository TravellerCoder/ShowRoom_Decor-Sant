const path = require('path');
const fs = require('fs');

const controller = {
    renderShowRoom: (req, res) =>{
        return res.render(path.resolve('src/views/showRoom'))
    }
}

module.exports = {controller}