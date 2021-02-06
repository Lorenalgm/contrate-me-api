
const Solution = require('../models/Solution');

module.exports = {
    async index(request, response) {
        let solutions = [];

        solutions = await Solution.find();
     
        return response.json(solutions);
    },

    async store(request, response){
        const {
            desafio_id,
            candidato_id,
            status,
            nota,
            link_github
        } = request.body;

        const solution = await Solution.create({
            desafio_id,
            candidato_id,
            status,
            nota,
            link_github
        });

        return response.json(solution);
    },
}