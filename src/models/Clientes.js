import { Schema, model } from "mongoose";

const clienteEsquema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        paterno: {
            type: String,
            required: true,
        },
        materno: {
            type: String,
            required: true,
        },
        sexo: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        telefono: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model("Clientes", clienteEsquema);