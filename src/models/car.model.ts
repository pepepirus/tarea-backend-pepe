import mongoose, { Schema } from "mongoose";

const carSchema: Schema = new Schema({
    Cilindros: {type: Number, require: true},
    NoDeSerie: { type: String, require: true},
    Año: { type: String }, 
    MarcaNoAceptada: { type: String, enum: ['Faw', 'GM', 'Fiat'] },
    Tipo: { type: String, enum: ['Pop', 'Pickup', 'Sedan'] },
    Modelo: { type: Number }}, {collection:"car"})

export default mongoose.model('Product',carSchema)