const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
    desafioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
    },
    candidatoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate'
    },
    status: String,
    nota: Number,
    entrega: Number,
    boasPraticas: Number,
    documentacao: Number,
    codigoLimpo: Number,
    controleQualidade: Number,
    linkGithub: String,
    dataInicio: Date,
    dataFim: Date
}, {
	timestamps: true,
});

module.exports = mongoose.model('Solution', SolutionSchema);