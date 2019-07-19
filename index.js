const express  = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

require('dotenv').config();

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {

    // console.log(req.body)

        const htmlEmail = `
        <h2>This message was received from the website</h2>
        <h3> Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Phone number: ${req.body.phoneNumber}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`

        let transporter  = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }   
        })

        let mailOptions = {
            from: 'test@gmail.com',
            to: 'coxjared9@gmail.com',
            subject: 'Message From Website',
            text: 'Email From Website',
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.log('error occurs', err)
            }
            // console.log('Message sent: $s',info.message )
            // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
        res.json(htmlEmail)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})