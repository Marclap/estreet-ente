import { dbConnect } from 'utils/mongose'
import Siniestro from 'models/Siniestro'

dbConnect()

export default async function handler(req, res) {
    const { method, body } = req
    switch (method) {
        case 'GET':
            try {
                const siniestro = await Siniestro.find()
                return res.status(200).json(siniestro)
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
        case 'POST':
            try {
                const newSiniestro = new Siniestro(body)
                const savedTask = await newSiniestro.save()
                return res.status(200).json(savedTask)
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
        default:
            return res.status(400).json({ msg: 'Metodo no soportado' })
    }
}
