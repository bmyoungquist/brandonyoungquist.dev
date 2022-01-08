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
	};

	useEffect(() => {
		let submitButton = document.querySelector('button[type="submit"]');
		if (
			inputIsValid('emailAddress', email.emailAddress.value) &&
			inputIsValid('body', email.body.value)
		) {
			submitButton?.classList.remove('disabled');
		} else {
			console.log('disabled');
			submitButton?.classList.add('disabled');
		}
	}, [email]);

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

	useEffect(() => {
		let button = document.querySelector('button[type="submit"]');

		button?.classList.add('disabled');
		// button?.addEventListener('click', function () {
		// 	function random(max: number) {
		// 		return Math.random() * (max - 0) + 0;
		// 	}

		// 	var c = document.createDocumentFragment();
		// 	for (var i = 0; i < 100; i++) {
		// 		var styles = `
		//         transform: translate3d(${random(500) - 250}px, ${
		// 			random(200) - 150
		// 		}px, 0) rotate(${random(360)} deg);
		//             background: hsla(${random(360)}, 100%, 50%, 1);
		//             animation: bang 700ms ease-out forwards;
		//             opacity: 0`;

		// 		var e = document.createElement('i');
		// 		e.style.cssText = styles.toString();
		// 		c.appendChild(e);
		// 	}
		// 	// document.body.appendChild(c);
		// 	button?.append(c);
		// });
	}, []);

	return (
		<Section id="contact" title="Get In Touch">
			<form id="contactForm" onSubmit={sendEmail}>
				<div className="input">
					<input
						name="emailAddress"
						type="text"
						autoComplete="off"
						className={email.emailAddress.valid ? '' : 'error'}
						onChange={(e) => updateEmail(e)}
					/>
					<label htmlFor="emailAddress">
						Email Address <span className="required">*</span>
					</label>
				</div>
				<div className="input">
					<input
						name="subject"
						type="text"
						autoComplete="off"
						className={email.subject.valid ? '' : 'error'}
						onChange={(e) => updateEmail(e)}
					/>
					<label htmlFor="subject">Subject</label>
				</div>
				<div className="input">
					<textarea
						name="body"
						autoComplete="off"
						className={email.body.valid ? '' : 'error'}
						onChange={(e) => updateEmail(e)}
					></textarea>
					<label htmlFor="body">
						Body <span className="required">*</span>
					</label>
				</div>
				<button type="submit" className="disabled hoverme">
					<div className="buttonContents">
						SEND <i className="fas fa-arrow-right"></i>
					</div>
				</button>
			</form>
		</Section>
	);
};

export default Contact;
