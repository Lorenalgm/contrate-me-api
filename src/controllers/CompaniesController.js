
const Company = require('../models/Company');

module.exports = {
    async index(request, response) {
        let companies = [];

        companies = await Company.find();
     
        return response.json(companies);
    },

    async store(request, response){
        const {
            nome,
            razaoSocial,
            cnpj,
            estado,
            quantidadeFuncionarios,
            site,
            telefone,
            email,
            segmento
        } = request.body;

        const company = await Company.create({
            nome,
            razaoSocial,
            cnpj,
            estado,
            quantidadeFuncionarios,
            site,
            telefone,
            email,
            segmento
        });

        return response.json(company);
    },
}