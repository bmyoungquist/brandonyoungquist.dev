import Image from 'next/image';
import Section from './Section';

const AboutMe: React.FunctionComponent = () => {
	return (
		<Section id="about" title="About Me">
			<div className="paragraphs">
				<p>
					Hi! My name is Brandon and I develope software for the web.
					My main interests include developing APIs, data
					visualization, and data science from a software engineering
					point of view.
				</p>
				<p>
					I love building productivity tools. I am always thinking
					about about how to get things done in a more efficient
					manner.
				</p>
				<p>
					Professionaly, I have worked with the full stack of
					Microsoft development tools and libraries to create
					financial web apps for local governments.
				</p>
			</div>
			<img src="/images/headshot.jpg" alt="headshot" />
		</Section>
	);
};

export default AboutMe;
