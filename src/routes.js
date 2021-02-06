const express = require('express');

const CandidatesController = require('./controllers/CandidatesController');
const CompaniesController = require('./controllers/CompaniesController');
const ChallengesController = require('./controllers/ChallengesController');
const SolutionsController = require('./controllers/SolutionsController');

const routes = express.Router();

routes.get('/candidates', CandidatesController.index);
routes.post('/candidates', CandidatesController.store);

routes.get('/companies', CompaniesController.index);
routes.post('/companies', CompaniesController.store);

routes.get('/challenges', ChallengesController.index);
routes.post('/challenges', ChallengesController.store);

routes.get('/solutions', SolutionsController.index);
routes.post('/solutions', SolutionsController.store);

module.exports = routes;