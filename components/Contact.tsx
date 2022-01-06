import {
	ChangeEvent,
	FormEvent,
	isValidElement,
	useEffect,
	useState,
} from 'react';
import IEmail from '../interfaces/Email';
import Section from './Section';

const Contact: React.FunctionComponent = () => {
	const [email, setEmail] = useState({
		emailAddress: {
			value: '',
			valid: true,
		},
		subject: {
			value: '',
			valid: true,
		},
		body: {
			value: '',
			valid: true,
		},
	} as IEmail);

	const updateEmail = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setEmail({
			...email,
			[e.target.name]: {
				value: e.target.value,
				valid: inputIsValid(e.target.name, e.target.value),
			},
		});

		console.log(email);
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!inputIsValid('emailAddress', email.emailAddress.value) ||
			!inputIsValid('body', email.body.value)
		) {
			validateEmail();
			return false;
		}

		fetch('api/email', {
			method: 'post',
			body: JSON.stringify(email),
		});

		return true;
	};

	const inputIsValid = (input: string, value: string): boolean => {
		if (input === 'emailAddress')
			return (
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
				value.trim() !== ''
			);
		else if (input === 'body') return value.trim() !== '';
		else return true;
	};

	const validateEmail = () => {
		setEmail({
			...email,
			emailAddress: {
				value: email.emailAddress.value,
				valid: inputIsValid('emailAddress', email.emailAddress.value),
			},
			subject: {
				value: email.subject.value,
				valid: true,
			},
			body: {
				value: email.body.value,
				valid: inputIsValid('body', email.body.value),
			},
		});
	};

	useEffect(() => {}, []);

	return (
		<Section id="contact" title="Get In Touch">
			<form id="contactForm" onSubmit={sendEmail}>
				<input
					name="emailAddress"
					type="text"
					placeholder="your@email.address"
					autoComplete="off"
					className={email.emailAddress.valid ? '' : 'error'}
					onChange={(e) => updateEmail(e)}
				/>
				{/* <label htmlFor="emailAddress">Email Address</label> */}
				<input
					name="subject"
					type="text"
					placeholder="Subject"
					autoComplete="off"
					className={email.subject.valid ? '' : 'error'}
					onChange={(e) => updateEmail(e)}
				/>
				{/* <label htmlFor="subject">Subject</label> */}
				<textarea
					name="body"
					placeholder="Body..."
					autoComplete="off"
					className={email.body.valid ? '' : 'error'}
					onChange={(e) => updateEmail(e)}
				></textarea>
				{/* <label htmlFor="body">Body</label> */}
				<input type="submit" value="SEND ➤" />
			</form>
		</Section>
	);
};

export default Contact;
