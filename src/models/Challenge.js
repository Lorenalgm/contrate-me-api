const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    link_externo: String,
    empresa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companies'
    },
}, {
	timestamps: true,
});

module.exports = mongoose.model('Challenge', ChallengeSchema);