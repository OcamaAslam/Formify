var express = require('express');
var router = express.Router();
const form_frontOffice = require('../model/front_db');
const form_backOffice = require('../model/back_db');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/', function (req, res, next) {
    console.log(req.body)
    const obj = new form_frontOffice({
        form: req.body.Form
    });
    obj.save();

});

router.get('/:id', function (req, res, next) {
    console.log(req.params);
    form_backOffice.findById(new ObjectId(req.params.id), (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send(data)
        }
    })
});


router.post('/:uploadFile', function (req, res, next) {
    var x = req.body.key;
    res.send();
});

module.exports = router;
