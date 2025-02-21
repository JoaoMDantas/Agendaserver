import mongoose from 'mongoose';

const ContatoSchema= new mongoose.Schema({
    name: { type: String, required: true},
    cargo: { type: String, required: true},
    data: { type: Date, required: true},
    status: { type: String, required: true},
    email: { type: String}
});

export const Contato=mongoose.model("contato", ContatoSchema);
