const path = require('path');
const fs = require('fs');

const controller = {
    index: (req, res) => {
        return res.render(path.resolve('src/views/index'))
    }
}

module.exports = {controller}