const path = require('path');
const fs = require('fs');

const controller =  {
    renderStore : (req, res) => {
        return res.render(path.resolve('src/views/store'))
    }
}

module.exports= {controller}