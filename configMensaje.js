const nodemailer = require('nodemailer');


module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kdshconsultores@gmail.com',
            pass: 'qwwpbjhiuddcrovh'
        }
    });
    const mailOptions = {
        from: `”${formulario.nombre}” <${formulario.email}>`,
        to: 'epalau@gmail.com',
        subject: 'nuevo mensaje de miel',
        html: `
 <strong>Nombre:</strong> ${formulario.nombreApellido} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> algun mensaje
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}