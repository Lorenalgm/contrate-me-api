const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: String,
    data_nascimento: String,
    email: String,
    telefone: String,
    estado: String,
    nivel_formacao: String,
    area_formacao: String,
    area_atuacao: String,
    area_interesse: String,
    tecnologias: String
}, {
	timestamps: true,
});

module.exports = mongoose.model('Candidate', CandidateSchema);