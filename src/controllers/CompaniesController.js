
const User = require('../models/Companie');

module.exports = {
    async index(request, response) {
        let companies = [];

        companies = await Companie.find();
     
        return response.json(companies);
    },

    async store(request, response){
        const {
            nome,
            razao_social,
            cnpj,
            estado,
            quantidade_funcionarios,
            site,
            telefone,
            email,
            segmento
        } = request.body;

        const company = await Companie.create({
            nome,
            razao_social,
            cnpj,
            estado,
            quantidade_funcionarios,
            site,
            telefone,
            email,
            segmento
        });

        return response.json(company);
    },
}