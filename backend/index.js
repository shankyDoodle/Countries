'use strict';


const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');


const URLMappings = require('./url-mappings');
const OK = 200;
const BAD_REQUEST = 400;

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

app.get('/fetchCountryDataByName', (req, res) => {
    let {name, fullText} = req.query;
    let url = "";
    if(!name || !name.length){
        url = URLMappings.all;
    }else {
        url = URLMappings.countriesByName + name;
        if(fullText)
            url += "?fullText=true";
    }

    axios.get(url)
        .then(response => {
            res.statusCode = OK;
            res.send(response.data)
        })
        .catch(e => {
            res.statusCode = BAD_REQUEST;
            res.send(e)
        });

});

app.get('/fetchCountryDataByRegion', (req, res) => {
    let {region} = req.query;
    let url = !region|| !region.length ? URLMappings.all : URLMappings.countriesByRegion + region;
    axios.get(url)
        .then(response => {
            res.statusCode = OK;
            res.send(response.data)
        })
        .catch(e => {
            res.statusCode = BAD_REQUEST;
            res.send(e)
        });

});

app.get('/fetchCountryDataByCode3', (req, res) => {
    let {code} = req.query;
    axios.get(URLMappings.countriesByCode + code)
        .then(response => {
            res.statusCode = OK;
            res.send(response.data)
        })
        .catch(e => {
            res.statusCode = BAD_REQUEST;
            res.send(e)
        });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))