import { useEffect, useState } from 'react';
import Section from './Section';

interface IProject {
	title: string;
	technologies: string[];
	description: string;
	imageUrlDark: string;
	imageUrlLight: string;
	githubUrl?: string;
	demoUrl?: string;
	index: number;
}

const Projects: React.FunctionComponent = () => {
	const [projects, setProjects] = useState([] as IProject[]);
	let theme: string = '';

	useEffect(() => {
		theme = document.getElementById('theme')!.classList[0];
		fetch(
			'../data/projects.json',

			{
				headers: {
					'Content-Type': 'application/json',

					Accept: 'application/json',
				},
			}
		).then(async (response) => {
			setProjects(
				((await response.json()) as IProject[]).sort(sortByIndex)
			);
		});
	}, []);

	const sortByIndex = (a: IProject, b: IProject) => {
		if (a.index > b.index) {
			return 1;
		} else if (a.index < b.index) {
			return -1;
		}
		return 0;
	};

	return (
		<Section id="projects" title="Projects">
			{projects.map((project) => {
				let img = (
					<img
						className="card"
						src={
							theme === 'dark'
								? project.imageUrlLight
								: project.imageUrlDark
						}
						alt={project.title}
					/>
				);

				let content = (
					<div className="content">
						<h5 key={`contentTitle${project.index}`}>
							{project.title}
						</h5>
						<div
							key={`contentTechnologies${project.index}`}
							className="technologies"
						>
							{project.technologies.map((technology) => (
								<span
									key={`technology${project.index}${technology}`}
								>
									{technology}
								</span>
							))}
						</div>
						<p key={`contentDescription${project.index}`}>
							{project.description}
						</p>
						<div className="links">
							{project.githubUrl ? (
								<a href={project.githubUrl} target="_blank">
									<i className="fab fa-github"></i>
								</a>
							) : (
								''
							)}
							{project.demoUrl ? (
								<a href={project.demoUrl} target="_blank">
									<i className="fas fa-external-link-alt"></i>
								</a>
							) : (
								''
							)}
						</div>
					</div>
				);

				if (project.index % 2 === 0) {
					return (
						<div
							className="card"
							key={`projectContent${project.index}`}
						>
							{content}
							{img}
						</div>
					);
				} else {
					return (
						<div
							className="card"
							key={`projectContent${project.index}`}
						>
							{img}
							{content}
						</div>
					);
				}
			})}

			{/* <div className="card">
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
			</div> */}
		</Section>
	);
};

export default Projects;
