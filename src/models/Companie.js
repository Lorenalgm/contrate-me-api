const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    foto_url: String
}, {
	timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);