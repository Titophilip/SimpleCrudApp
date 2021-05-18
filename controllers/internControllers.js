const Intern = require("../models/intern.js");

exports.createNewIntern = (req, res) => {
    Intern.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (error, newIntern) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else {
            return res.status(200).json({ message: "New intern created.", newIntern});
        }
    });
};

exports.fetchInterns = (req, res) => {
    Intern.find({}, (error, interns) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else {
            return res.status(200).json({ message: "Interns Found.", interns });
        }
    });
};

exports.fetchIntern = (req, res) => {
    Intern.findById(req.params.id, (error, intern) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!intern) {
            return res.status(404).json({ message: "Intern not found." });
        } else {
            return res.status(200).json({ intern });
        }
    });
};

exports.updateIntern = (req, res) => {
    let update = {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }
    update = Object.fromEntries(Object.entries(update).filter(val => val[1] != null))
    Intern.findByIdAndUpdate(req.params.id, update, (error, intern) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!intern) {
            return res.status(404).json({ message: "Intern not found. "});
        } else {    
            intern.save((error, updatedIntern) => {
                if (error) {
                    return res.status(500).json({ message: error });
                } else {
                    return res.status(200).json({ message: "Intern details updated successfully.", updatedIntern });
                }
            });
        }
    });
};

exports.deleteIntern = (req, res) => {
    Intern.findByIdAndDelete(req.params.id, (error, Intern) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!Intern) {
            return res.status(404).json({ message: "Intern not found." });
        } else {
            return res.status(200).json({ message: "Intern deleted successfully." });
        }
    });
};