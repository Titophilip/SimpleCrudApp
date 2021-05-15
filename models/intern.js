const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
});

mongoose.set('useCreateIndex', true);

const Intern = mongoose.model("intern", internSchema);

module.exports = Intern;