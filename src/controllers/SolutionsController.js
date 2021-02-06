
const Solution = require('../models/Solution');

module.exports = {
    async index(request, response) {
        let solutions = [];

        solutions = await Solution.find();
     
        return response.json(solutions);
    },

    async store(request, response){
        const {
            desafioId,
            candidatoId,
            status,
            nota,
            linkGithub,
            entrega,
            boasPraticas,
            documentacao,
            codigoLimpo,
            controleQualidade,
            dataInicio,
            dataFim
        } = request.body;

        const solution = await Solution.create({
            desafioId,
            candidatoId,
            status,
            nota,
            linkGithub,
            entrega,
            boasPraticas,
            documentacao,
            codigoLimpo,
            controleQualidade,
            dataInicio,
            dataFim
        });

        return response.json(solution);
    },
}