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
        from: `”${formulario.nombreApellido}” <${formulario.email}>`,
        to: 'epalau@gmail.com',
        subject: 'nuevo pedido el colibri hummingBee Honey',
        html: `
 <strong>Nombre:</strong> ${formulario.nombreApellido} <br/>
 <strong>Teléfono:</strong> ${formulario.telefono} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Dirección Envio:</strong> ${formulario.direccion} <br/>
 <strong>Cantidad Miel cruda 750cc:</strong> ${formulario.mielCruda750} <br/>
 <strong>Cantidad Miel cruda 450cc:</strong> ${formulario.mielCruda450} <br/>
 <strong>Cantidad Miel cruda 450cc:</strong> ${formulario.mielJeng750} <br/>
 <strong>Cantidad Miel cruda 450cc:</strong> ${formulario.mielJeng450} <br/>
 
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}