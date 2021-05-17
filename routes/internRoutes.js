const express = require("express");
const internRouter = express.Router();
const internController = require("../controllers/internControllers");


internRouter.get("/interns", internController.fetchInterns);
internRouter.get("/interns/:id", internController.fetchIntern);
internRouter.post("/interns", internController.createNewIntern);
internRouter.put("/interns/:id", internController.updateIntern);
internRouter.delete("/interns/:id", internController.deleteIntern);

module.exports = internRouter;