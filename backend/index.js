'use strict';


const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');


const URLMappings = require('./url-mappings');
const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const CONFLICT = 409;
const SERVER_ERROR = 500;

const port = 9090;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.get('/fetchAllCountryData', (req, res) => {
    let baseURL = URLMappings.all;

    axios.get(baseURL)
        .then(response => {
            res.statusCode = OK;
            res.send(response.data)
        })
        .catch(e => {
            res.statusCode = BAD_REQUEST;
            res.send(e)
        });

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))