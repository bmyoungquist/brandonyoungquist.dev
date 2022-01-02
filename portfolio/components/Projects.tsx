import Section from './Section';

const Projects: React.FunctionComponent = () => {
	return (
		<Section id="projects" title="Projects">
			<div className="card">
				<img
					className="card"
					src="//unsplash.it/1920/1080"
					alt="cardimg"
				/>
				<div className="content">
					<h4>lorem ipsum 1</h4>
				</div>
			</div>
			<div className="card">
				<div className="content">
					<h4>lorem ipsum 2</h4>
				</div>
				<img
					className="card"
					src="//unsplash.it/1920/1080"
					alt="cardimg"
				/>
			</div>
		</Section>
	);
};

export default Projects;
