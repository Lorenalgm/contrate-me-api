const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: Date,
    email: String,
    telefone: String,
    estado: String,
    nivelFormacao: String,
    areaFormacao: String,
    areaAtuacao: String,
    areaInteresse: String,
    tecnologias: [String]
}, {
	timestamps: true,
});

module.exports = mongoose.model('Candidate', CandidateSchema);