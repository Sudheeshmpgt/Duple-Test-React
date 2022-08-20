const route = require('express').Router()
const {registration, login, verification} = require('../controller/userController')

route.post('/', registration);
route.post('/login', login);
route.get('/:id/verify/:token', verification)

module.exports = route;