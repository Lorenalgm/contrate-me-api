const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    nome: String,
    razao_social: String,
    cnpj: String,
    estado: String,
    quantidade_funcionarios: Number,
    site: String,
    telefone: String,
    email: String,
    segmento: String
}, {
	timestamps: true,
});

module.exports = mongoose.model('Company', CompanySchema);