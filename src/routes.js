const express = require('express');
const MotoristaController = require('./controllers/MotoristaController');
const PassageiroCotroller = require('./controllers/PassageiroController');
const CorridasController = require('./controllers/CorridasController');
const PassageiroController = require('./controllers/PassageiroController');

const routes = express.Router();

routes.get('/motoristas', MotoristaController.index);
routes.post('/motoristas', MotoristaController.create);
routes.put('/motoristas/:id', MotoristaController.update);
routes.delete('/motoristas/:id', MotoristaController.delete);

routes.get('/passageiros', PassageiroController.index);
routes.post('/passageiros', PassageiroController.create);
routes.delete('/passageiros/:id', PassageiroController.delete);

routes.get('/corridas', CorridasController.index);
routes.post('/corridas', CorridasController.create);
routes.delete('/corridas/:id', CorridasController.delete);

module.exports = routes;