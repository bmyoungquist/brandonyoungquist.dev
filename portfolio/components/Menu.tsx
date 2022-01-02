import { Fragment } from 'react';

const Menu = () => {
	return (
		<Fragment>
			<div id="burgerMenu">
				<span id="burgerMenuText">MENU</span>
			</div>
			<div id="menuItems">
				<div className="scrollContainer">
					<div id="nav">
						<div id="navHome">
							<a className="active" href="#home">
								home
							</a>
						</div>
						<div id="navAbout">
							<a href="#about">about</a>
						</div>
						<div id="navJobs">
							<a href="#jobs">experience</a>
						</div>
						<div id="navProjects">
							<a href="#projects">projects</a>
						</div>
						<div id="navContact">
							<a href="#contact">contact</a>
						</div>
					</div>
					<div className="scroll"></div>
					<div id="scrollPointer" className="scrollPointer"></div>
				</div>
				<div className="otherLinksContainer">
					<div id="paint" className="otherLink paint">
						<i id="theme-switcher" className="fas fa-sun"></i>
						<div className="help">
							<p>This site uses your system preference</p>
						</div>
					</div>
					<div className="otherLink">
						<a href="/BrandonYoungquist_Resume.pdf" target="_blank">
							<i className="fas fa-file-download"></i>
						</a>
						<div className="help">
							<p>Download Resume</p>
						</div>
					</div>
					<div className="otherLink">
						<a
							href="https://www.linkedin.com/in/brandonyoungquist/"
							target="_blank"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<div className="help">
							<p>linkedin.com/in/brandonyoungquist/</p>
						</div>
					</div>
					<div className="otherLink">
						<a
							href="https://github.com/bmyoungquist"
							target="_blank"
						>
							<i className="fab fa-github"> </i>
						</a>
						<div className="help">
							<p>github.com/bmyoungquist</p>
						</div>
					</div>
					<div className="otherLink">
						<a href="mailto:brandon@youngquist.dev" target="_blank">
							<i className="fas fa-envelope"> </i>
						</a>
						<div className="help">
							<p>brandon@youngquist.dev</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Menu;
