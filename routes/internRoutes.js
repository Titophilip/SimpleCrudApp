const express = require('express');
const internRouter = express.Router();
const internControllers = require('../controllers/internControllers');

internRouter.get('/', internControllers.fetchInterns);
internRouter.get('/:id', internControllers.fetchInternById);
internRouter.put('/:id', internControllers.updateIntern);
internRouter.delete('/:id', internControllers.deleteIntern);
internRouter.post('/create', internControllers.createIntern);

module.exports = internRouter;