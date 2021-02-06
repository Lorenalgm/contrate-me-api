const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
    desafio_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
    },
    candidato_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate'
    },
    status: String,
    nota: Number,
    link_github: String
}, {
	timestamps: true,
});

module.exports = mongoose.model('Solution', SolutionSchema);