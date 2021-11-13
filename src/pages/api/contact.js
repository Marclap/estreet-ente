import nodemailer from 'nodemailer'

export default function (req, res) {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'jhonatan.cardona@ucp.edu.co',
            pass: 'jhona1999',
        },
        secure: true,
    })

    const mailData = {
        from: 'jhonatan.cardona@ucp.edu.co',
        to: req.body.correo,
        subject: `Respuesta ente estatal`,
        text: req.body.mensaje,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err)
        else console.log(info)
    })

    console.log(req.body)
    res.send('success')
}
