const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    linkExterno: String,
    empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companies'
    },
}, {
	timestamps: true,
});

module.exports = mongoose.model('Challenge', ChallengeSchema);