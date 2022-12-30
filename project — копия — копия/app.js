// import fullInfo from "./project_files/js/info.js"

// const info = fullInfo

// console.log(info)

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nguendarina@gmail.com',
        pass: 'meyunrddemkozxrc'
    }
});

const mailOptions = {
    from: 'nguendarina@gmail.com',
    to: 'nguendarina1@gmail.com',
    subject: 'Medical center',
    text: 'okey proj'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});