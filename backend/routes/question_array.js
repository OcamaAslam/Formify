var express = require('express');
var router = express.Router();
const csv = require('csvtojson');
//const form_backOffice = require('../model/back_db');

/* GET home page. */
router.post('/', function (req, res, next) {
    const csvFilePath = req.body.path;

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            res.send(jsonObj);
        }).catch(error => console.log(error));


});

module.exports = router;
