const internControllers = require('../controllers/internControllers');

const {Router} = require('express');
const internRouter = Router();

internRouter.get('/', () => {internControllers.fetchInterns});
internRouter.get('/:id', () => {internControllers.fetchInternById});
internRouter.post('/create', () => {internControllers.createNewIntern});
internRouter.put('/:id', () => {internControllers.updateIntern});
internRouter.delete('/:id', () => {internControllers.deleteIntern});

module.exports = internRouter;