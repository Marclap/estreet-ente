import { Schema, model, models } from 'mongoose'

const siniestroSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre es requerido'],
            trim: true,
            maxlength: 100,
        },
        cedula: {
            type: Number,
            required: [true, 'El nombre es requerido'],
            trim: true,
            maxlength: 100,
        },
        correo: {
            type: String,
            required: [true, 'El nombre es requerido'],
            trim: true,
            maxlength: 100,
        },
        latitud: {
            type: Number,
            trim: true,
            maxlength: 100,
        },
        longitud: {
            type: Number,
            trim: true,
            maxlength: 100,
        },
        fecha: {
            type: Date,
            trim: true,
            maxlength: 100,
        },
        descripcion: {
            type: String,
            trim: true,
            maxlength: 100,
        },
        prioridad: {
            type: Number,
            trim: true,
            maxlength: 100,
        },
        ente: {
            type: String,
            trim: true,
            maxlength: 100,
        },
        idEnte: {
            type: String,
            trim: true,
            maxlength: 100,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default models.Siniestro || model('Siniestro', siniestroSchema)
