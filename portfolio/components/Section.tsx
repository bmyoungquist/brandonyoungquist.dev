interface IProps {
	id: string;
	title: string;
}

const Section: React.FunctionComponent<IProps> = ({ children, title, id }) => {
	return (
		<section id={id}>
			<div className="content">
				<div className="title">
					<h3>{title}</h3>
				</div>
				<div id={`${id}Content`} className={`${id}Content`}>
					{children}
				</div>
			</div>
		</section>
	);
};

export default Section;
