
const User = require('../models/Challenge');

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
            link_externo,
            empresa_id
        } = request.body;

        const challenge = await Challenge.create({
            nome,
            descricao,
            link_externo,
            empresa_id
        });

        return response.json(challenge);
    },
}