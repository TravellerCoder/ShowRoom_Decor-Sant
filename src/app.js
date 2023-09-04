const express = require('express');
const methodOverride =  require('method-override');
const path = require('path');
const app = express();
const mainRouter = require('./routers/mainRouter');
const storeRouter = require('./routers/storeRouter')



app.set('view engine', 'ejs')


app.use(methodOverride("_method"))
app.use(express.static('public'))

app.set('view engine', 'ejs')


const port = process.env.PORT || 3001;
app.listen (port, () =>
    console.log('**** Server Running ****')
);



app.use(mainRouter);

app.use(storeRouter);

