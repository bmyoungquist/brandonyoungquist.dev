import {
	ChangeEvent,
	FormEvent,
	Fragment,
	isValidElement,
	useEffect,
	useState,
} from 'react';
import { IEmail, IEmailStatus } from '../interfaces/Email';
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

		let buttonContents = document.querySelector('.buttonContents')!;
		let submitButton = document.querySelector('button[type="submit"]');
		let defaultContents =
			'SEND <i class="fas fa-arrow-right" aria-hidden="true"></i>';
		if (buttonContents.innerHTML !== defaultContents) {
			console.log('changing contents');
			buttonContents.innerHTML = defaultContents;
			submitButton?.classList.remove('success');
			submitButton?.classList.remove('warning');
		}
	};

	useEffect(() => {
		let submitButton = document.querySelector('button[type="submit"]')!;

		if (
			inputIsValid('emailAddress', email.emailAddress.value) &&
			inputIsValid('body', email.body.value)
		) {
			submitButton?.classList.remove('disabled');
		} else {
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

		let buttonContents = document.querySelector('.buttonContents');
		let submitButton = document.querySelector('button[type="submit"]');
		submitButton?.classList.remove('success');
		submitButton?.classList.remove('warning');

		buttonContents!.innerHTML = `
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.0" 
                    width="32px"
                    height="32px"
                    viewBox="0 0 128 128"
                >
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="transparent"
                    />
                    <g>
                        <path
                            d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
                            fill="var(--clr-bg)"
                            fill-opacity="1"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 64 64"
                            to="360 64 64"
                            dur="1800ms"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </g>
                </svg>`;

		fetch('api/email', {
			method: 'post',
			body: JSON.stringify(email),
		})
			.then((response: Response) => response.json())
			.then((emailStatus: IEmailStatus) => {
				console.log(emailStatus);
				let submitButton = document.querySelector(
					'button[type="submit"]'
				)!;

				if (emailStatus.sentToBrandon) {
					submitButton?.classList.add('success');
					buttonContents!.innerHTML =
						'SENT <i class="fas fa-check"></i>';
					startConfetti();
				} else {
					submitButton?.classList.add('warning');
					buttonContents!.innerHTML =
						'<i class="fas fa-exclamation-triangle"></i> Server error - please click again';
				}
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

	const startConfetti = () => {
		const random = (max: number) => {
			return Math.random() * (max - 0) + 0;
		};

		var confettiFragment = document.createDocumentFragment();
		for (var i = 0; i < 100; i++) {
			var colorAndAnimation =
				'transform: translate3d(' +
				(random(200) - 100) +
				'px, ' +
				(random(100) - 50) +
				'px, 0) rotate(' +
				random(360) +
				'deg);\
                        background: hsla(' +
				random(360) +
				',100%,50%,1);\
                        animation: bang 1250ms ease-out forwards;\
                        opacity: 0';

			var confettiPiece = document.createElement('div');
			confettiPiece.classList.add('confetti');
			confettiPiece.style.cssText = colorAndAnimation.toString();
			confettiFragment.appendChild(confettiPiece);
		}
		// document.body.appendChild(c);
		let submitButton = document.querySelector('button[type="submit"]')!;

		submitButton?.append(confettiFragment);
	};

	useEffect(() => {
		let submitButton = document.querySelector('button[type="submit"]')!;

		submitButton.classList.add('disabled');
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
						Message <span className="required">*</span>
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
