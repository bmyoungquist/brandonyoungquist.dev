import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { IEmail, IEmailStatus } from '../../interfaces/Email';
import sgMail from '@sendgrid/mail';

const email = async (req: NextApiRequest, res: NextApiResponse) => {
	let emailStatus: IEmailStatus = {
		sentToBrandon: false,
		sentToSubmitter: false,
	};

	const emailData: IEmail = JSON.parse(req.body);

	sgMail.setApiKey(process.env.SMTP_API_KEY!);

	let brandonMailOptions: sgMail.MailDataRequired = {
		from: process.env.SMTP_NO_REPLY!,
		replyTo: process.env.SMTP_BRANDON!,
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

	let submitterMailOptions: sgMail.MailDataRequired = {
		from: process.env.SMTP_BRANDON!,
		replyTo: process.env.SMTP_BRANDON,
		to: emailData.emailAddress.value,
		subject: 'Thanks for sending me a message!',
		html: `Thank you for sending me a message via my website, I will get back to you as soon as possible. Have a great rest of your day! <br/><br/>

	    Brandon Youngquist <br/>
	    <a href='https://www.brandonyoungquist.dev' target='_blank' rel='noopener noreferrer'>brandonyoungquist.dev</a>`,
	};

	sgMail
		.send([brandonMailOptions, submitterMailOptions])
		.then((response) => {
			emailStatus.sentToBrandon = true;
			emailStatus.sentToSubmitter = true;

			res.status(200).json(emailStatus);
			res.end();
			return;
		})
		.catch((error) => {
			emailStatus.sentToBrandon = false;
			emailStatus.sentToSubmitter = false;

			res.status(200).json(emailStatus);
			res.end();
			return;
		});
};

export default email;
