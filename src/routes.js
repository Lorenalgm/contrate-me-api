const express = require('express');

const CandidatesController = require('./controllers/CandidatesController');
const CompaniesController = require('./controllers/CompaniesController');
const ChallengesController = require('./controllers/ChallengesController');

const routes = express.Router();

routes.get('/candidates', CandidatesController.index);
routes.post('/candidates', CandidatesController.store);

routes.get('/companies', CompaniesController.index);
routes.post('/companies', CompaniesController.store);

routes.get('/challenges', ChallengesController.index);
routes.post('/challenges', ChallengesController.store);

module.exports = routes;