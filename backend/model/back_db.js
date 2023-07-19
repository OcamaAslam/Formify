const mongoose = require('mongoose');

var back_form_series = mongoose.model("backOffice", {
    dateOfCCommencement: {
        type: Date,
        required: true
    },
    dateOfAdjournment: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    question: {
        type: Array,
        required: true
    },
});

module.exports = back_form_series;
