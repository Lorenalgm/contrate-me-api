
const User = require('../models/Candidate');

module.exports = {
    async index(request, response) {
        let candidates = [];

        candidates = await Candidate.find();
     
        return response.json(candidates);
    },

    async store(request, response){
        const {
            nome,
            data_nascimento,
            email,
            telefone,
            estado,
            nivel_formacao,
            area_formacao,
            area_atuacao,
            area_interesse,
            tecnologias
        } = request.body;

        const candidate = await Candidate.create({
            nome,
            data_nascimento,
            email,
            telefone,
            estado,
            nivel_formacao,
            area_formacao,
            area_atuacao,
            area_interesse,
            tecnologias
        });

        return response.json(candidate);
    },
}