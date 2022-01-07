import { GetStaticProps } from 'next';
import { MouseEventHandler, useEffect, useState } from 'react';
import Section from './Section';

interface IJob {
	company: string;
	title: string;
	fromMonth: string;
	toMonth: string;
	bulletPoints: string[];
	index: number;
}

const Experience: React.FunctionComponent = () => {
	const [jobs, setJobs] = useState([] as IJob[]);

	const switchDescription = (
		event: React.MouseEvent<HTMLParagraphElement>
	) => {
		document
			.querySelector('#jobs .description .active')
			?.classList.remove('active');

		document
			.querySelector('#jobs .companies .active')
			?.classList.remove('active');

		document
			.getElementById((event.target as HTMLParagraphElement).id)
			?.classList.add('active');

		document
			.getElementById(
				(event.target as HTMLParagraphElement).id.replace(
					'company',
					'description'
				)
			)
			?.classList.add('active');

		console.log(event);
	};

	useEffect(() => {
		fetch(
			'../data/experience.json',

			{
				headers: {
					'Content-Type': 'application/json',

					Accept: 'application/json',
				},
			}
		).then(async (response) => {
			setJobs(((await response.json()) as IJob[]).sort(sortByIndex));
		});
	}, []);

	const sortByIndex = (a: IJob, b: IJob) => {
		if (a.index > b.index) {
			return 1;
		} else if (a.index < b.index) {
			return -1;
		}
		return 0;
	};

	return (
		<Section id="jobs" title="Where I've Worked">
			<div className="companies">
				{jobs.map((job) => {
					return (
						<p
							key={`company${job.index}`}
							id={`company${job.index}`}
							className={job.index === 1 ? 'active' : ''}
							onClick={switchDescription}
						>
							{job.company}
						</p>
					);
				})}
			</div>
			<div className="description">
				{jobs.map((job) => {
					return (
						<div
							key={`description${job.index}`}
							id={`description${job.index}`}
							className={job.index === 1 ? 'active' : ''}
						>
							<h4>{job.title}</h4>
							<h5>
								{job.fromMonth} - {job.toMonth}
							</h5>
							<ul>
								{job.bulletPoints.map((bullet) => {
									return <li key={bullet}>{bullet}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</Section>
	);
};

export default Experience;
