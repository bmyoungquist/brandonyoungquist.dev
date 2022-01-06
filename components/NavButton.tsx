interface IProps {
	scrollTo: string;
	className?: string;
}

const NavButton: React.FunctionComponent<IProps> = ({
	children,
	scrollTo,
	className,
}) => {
	const scrollToSection = () => {
		console.log(scrollTo);
		document.getElementById(scrollTo)!.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div id={`nav${scrollTo}`}>
			<a onClick={scrollToSection} className={className ? className : ''}>
				{children}
			</a>
		</div>
	);
};

export default NavButton;
