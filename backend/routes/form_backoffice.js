var express = require('express');
var router = express.Router();
const form_backOffice = require('../model/back_db');

/* GET home page. */
router.post('/', function (req, res, next) {

    const obj = new form_backOffice({
        dateOfCCommencement: req.body.date.start,
        dateOfAdjournment: req.body.date.end,
        title: req.body.information.Title,
        path: req.body.information.path,
        question: req.body.questions,
    });
    obj.save();
});

module.exports = router;
