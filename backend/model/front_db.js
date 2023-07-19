const mongoose = require('mongoose');

var front_form_series = mongoose.model("frontOffice", {
    form: {
        type: Object,
        required: true
    },
});

module.exports = front_form_series;
