import { useEffect } from 'react';

interface IProps {
	scrollTo: string;
	className?: string;
}

const NavButton: React.FunctionComponent<IProps> = ({
	children,
	scrollTo,
	className,
}) => {
	const navButtonId = `nav${scrollTo}`;

	useEffect(() => {
		const scrollDiv = document.getElementById('theme')!;
		const section = document.getElementById(scrollTo)!;
		const navButton = document.getElementById(navButtonId)!;

		navButton.style.top = cssPercent(
			section.offsetTop / scrollDiv.scrollHeight
		);
		navButton.style.top = cssPercent(
			section.offsetTop / scrollDiv.scrollHeight
		);
	}, []);

	const cssPercent = (percentAsDecimal: number) => {
		return percentAsDecimal * 100 + '%';
	};

	const scrollToSection = () => {
		console.log(scrollTo);

		document.getElementById(scrollTo)!.scrollIntoView({
			behavior: 'smooth',
			block: scrollTo === 'contact' ? 'end' : 'center',
		});
	};

	return (
		<div id={navButtonId} className="navButton">
			<a onClick={scrollToSection} className={className ? className : ''}>
				{children}
			</a>
		</div>
	);
};

export default NavButton;
