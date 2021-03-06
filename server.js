const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan('tiny'));

// mongoDb connection
connectDB();

// parse request to body parser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");


// load assets
app.use('/css',express.static(path.resolve(__dirname,"asset/css")));
app.use('/img',express.static(path.resolve(__dirname,"asset/img")));
app.use('/js',express.static(path.resolve(__dirname,"asset/js")));


// load routes
app.use('/',require('./server/routes/router'));


app.listen(PORT,()=>{console.log(`server is Running at http://localhost:${PORT}`)});