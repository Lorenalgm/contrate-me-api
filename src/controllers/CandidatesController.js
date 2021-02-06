
const Candidate = require('../models/Candidate');

module.exports = {
    async index(request, response) {
        let candidates = [];

        candidates = await Candidate.find();
     
        return response.json(candidates);
    },

    async store(request, response){
        const {
            nome,
            dataNascimento,
            email,
            telefone,
            estado,
            nivelFormacao,
            areaFormacao,
            areaAtuacao,
            areaInteresse,
            tecnologias
        } = request.body;

        const candidate = await Candidate.create({
            nome,
            dataNascimento,
            email,
            telefone,
            estado,
            nivelFormacao,
            areaFormacao,
            areaAtuacao,
            areaInteresse,
            tecnologias
        });

        return response.json(candidate);
    },
}