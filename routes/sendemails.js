const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
const mailer = {
    sendemails: (req, res) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'harish.konda92@gmail.com', // generated ethereal user
                pass: process.env.password // generated ethereal password
            }
        });
        const html = `
        <pre><p>
        Hello, Greetings
                   
           I'm a versatile full stack developer, primarily i have been working on Angular, 
        Nodejs and expressjs for the past 2.6 years. I'm ready to change my current company 
        for a better profession.
       
        My details are provided below.
            Total Experience - 2.6
            Relevant experience - 2.4
            CTC - 3.2
            ECTC - 4.6
            NP - 30 days
        Im attaching my CV below. In case if you find my profile suitable for your job description,
        please let me know.
                   
        Thanks & regards
        -Harish Konda
        +91 8801253332
        </P>
        </pre>`;
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Harish" <harish.konda92@gmail.com>', // sender address
            to: req.body.to_email, // list of receivers
            subject: 'Harish Konda Resume', // Subject line
            // text: 'Hello world?', // plain text body
            html, // html body
            attachments: [
                {
                    path: './harish_mean.docx'
                }
            ]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                // return console.log(error);
                res.send({ error })
            } else {
                console.log('Message sent: %s', info.messageId);
                res.send({ status: `Message sent: %s', ${info.messageId}` })
            }
        });
    }
};
module.exports = { mailer } 