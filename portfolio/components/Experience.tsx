import Section from './Section';

const Experience: React.FunctionComponent = () => {
	return (
		<Section id="jobs" title="Where I've Worked">
			<div className="companies">
				<p className="active">LOCiS</p>
				<p>North Central College</p>
			</div>
			<div className="description">
				<h4>Software Engineer</h4>
				<ul>
					<li>
						Created performant financial web apps for local
						governments
					</li>
					<li>
						Communicate specific software solutions to non-technical
						people
					</li>
					<li>
						Interface directly with customers to address specific
						needs
					</li>
				</ul>
			</div>
		</Section>
	);
};

export default Experience;
