
const Challenge = require('../models/Challenge');

module.exports = {
    async index(request, response) {
        let challenges = [];

        challenges = await Challenge.find();
     
        return response.json(challenges);
    },

    async store(request, response){
        const {
            nome,
            descricao,
            linkExterno,
            empresaId
        } = request.body;

        const challenge = await Challenge.create({
            nome,
            descricao,
            linkExterno,
            empresaId
        });

        return response.json(challenge);
    },
}