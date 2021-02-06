
const User = require('../models/User');

module.exports = {
    async index(request, response) {
        let users = [];

        users = await User.find();
     
        return response.json(users);
    },

    async store(request, response){
        const {
            nome,
            foto_url
        } = request.body;

        const user = await User.create({
            nome,
            foto_url
        });

        return response.json(user);
    },
}