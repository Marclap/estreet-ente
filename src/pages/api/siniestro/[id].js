import { dbConnect } from 'utils/mongose'
import Siniestro from 'models/Siniestro'

dbConnect()

export default async (req, res) => {
    const {
        method,
        body,
        query: { id },
    } = req
    switch (method) {
        case 'GET':
            try {
                const siniestro = await Siniestro.findById(id)
                if (!siniestro)
                    return res
                        .status(404)
                        .json({ msg: 'Siniestro no encontrado' })
                return res.status(200).json(siniestro)
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
        case 'PUT':
            try {
                const taskUpdate = await Siniestro.findByIdAndUpdate(id, body, {
                    new: true,
                })
                if (!taskUpdate)
                    return res
                        .status(404)
                        .json({ msg: 'Siniestro no encontrado' })
                return res.status(200).json(taskUpdate)
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
        case 'DELETE':
            try {
                const deteSiniestro = await Siniestro.findByIdAndDelete(id)
                if (!deteSiniestro)
                    return res
                        .status(404)
                        .json({ msg: 'Siniestro no encontrado' })
                return res.status(204).json()
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
        default:
            return res.status(400).json({ msg: 'Metodo no soportado' })
    }
}
