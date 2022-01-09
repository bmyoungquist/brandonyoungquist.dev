import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { resolve } from 'path/posix';
import { IEmail, IEmailStatus } from '../../interfaces/Email';

const email = async (req: NextApiRequest, res: NextApiResponse) => {
	let emailStatus: IEmailStatus = {
		sentToBrandon: false,
		sentToSubmitter: false,
	};

	const emailData: IEmail = JSON.parse(req.body);

	let transporter = nodemailer.createTransport({
		host: process.env.SMTP_SERVER,
		port: 587,
		secure: false, // upgrade later with STARTTLS
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	let brandonMailOptions: nodemailer.SendMailOptions = {
		from: process.env.SMTP_NO_REPLY,
		replyTo: process.env.SMTP_BRANDON,
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

	let submitterMailOptions: nodemailer.SendMailOptions = {
		from: process.env.SMTP_BRANDON,
		replyTo: process.env.SMTP_BRANDON,
		to: emailData.emailAddress.value,
		subject: 'Thanks for sending me a message!',
		html: `Thank you for sending me a message via my website, I will get back to you as soon as possible. Have a great rest of your day! <br/><br/>
        
        Brandon Youngquist <br/>
        <a href='https://www.brandonyoungquist.dev' target='_blank' rel='noopener noreferrer'>brandonyoungquist.dev</a>`,
	};

	transporter.sendMail(brandonMailOptions, (error, info) => {
		if (error) {
			emailStatus.sentToBrandon = false;
		} else {
			emailStatus.sentToBrandon = true;
		}

		transporter.sendMail(submitterMailOptions, (error, info) => {
			if (error) {
				emailStatus.sentToSubmitter = false;
			} else {
				emailStatus.sentToSubmitter = true;
			}

			res.status(200).json(emailStatus);
			res.end();
			return;
		});
	});
};

export default email;
