import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import IEmail from '../../interfaces/Email';

const email = (req: NextApiRequest, res: NextApiResponse) => {
	const emailData = JSON.parse(req.body);

	let transporter = nodemailer.createTransport({
		host: process.env.SMTP_SERVER,
		port: 587,
		secure: false, // upgrade later with STARTTLS
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	let mailOptions: nodemailer.SendMailOptions = {
		from: process.env.SMTP_NO_REPLY,
		to: 'bmyoungquist@gmail.com',
		subject: 'New Message from Portfolio Website!',
		text: `
        From: 
            ${emailData.emailAddress.value}
        Subject:
            ${emailData.subject.value}
        Body:
            ${emailData.body.value}
        `,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) console.log(error);
		else console.log('successfully sent mail ' + info);
		res.json({});
	});
};

export default email;
