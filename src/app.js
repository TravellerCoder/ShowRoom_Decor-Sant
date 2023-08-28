const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs')

const port = process.env.PORT || 3001;

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.listen (port, () =>
    console.log('**** Server Running ****')
);

app.get('/', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/index.html'))
)