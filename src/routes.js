const express = require('express');

const CandidatesController = require('./controllers/CandidatesController');
const CompaniesController = require('./controllers/CompaniesController');

const routes = express.Router();

routes.get('/candidates', CandidatesController.index);
routes.post('/candidates', CandidatesController.store);

routes.get('/companies', CompaniesController.index);
routes.post('/companies', CompaniesController.store);

module.exports = routes;