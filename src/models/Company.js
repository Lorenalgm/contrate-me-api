const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    nome: String,
    razaoSocial: String,
    cnpj: String,
    estado: String,
    quantidadeFuncionarios: Number,
    site: String,
    telefone: String,
    email: String,
    segmento: String
}, {
	timestamps: true,
});

module.exports = mongoose.model('Company', CompanySchema);