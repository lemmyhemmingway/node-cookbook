const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 4321,
});

transporter.sendMail({
        from: "test@test.com",
        to: "test1@test.com",
        subject: "Hello",
        text: "Hello world",
    },
    (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log("Messsage sent", info)
    })