import Section from './Section';

const Contact: React.FunctionComponent = () => {
	return (
		<Section id="contact" title="Get In Touch">
			<form action="" method="post">
				<input
					name="email"
					type="text"
					placeholder="your@email.address"
					autoComplete="email"
				/>
				<input
					name="subject"
					type="text"
					placeholder="Subject"
					autoComplete="false"
				/>
				<textarea
					name="body"
					placeholder="Body..."
					autoComplete="false"
				></textarea>
				<input type="submit" value="SEND ➤" />
			</form>
		</Section>
	);
};

export default Contact;
