
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
            razao_social,
            cnpj,
            estado,
            quantidade_funcionarios,
            site,
            telefone,
            email,
            segmento
        } = request.body;

        const company = await Company.create({
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