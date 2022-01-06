import { Fragment, useEffect } from 'react';
import NavButton from './NavButton';

const Menu = () => {
	useEffect(() => {
		const scrollDiv = document.getElementById('theme')!;
		const scrollPointer = document.getElementById('scrollPointer')!;
		const home = document.getElementById('home')!;
		const about = document.getElementById('about')!;
		const jobs = document.getElementById('jobs')!;
		const projects = document.getElementById('projects')!;
		const contact = document.getElementById('contact')!;
		const navHome = document.getElementById('navhome')!;
		const navAbout = document.getElementById('navabout')!;
		const navJobs = document.getElementById('navjobs')!;
		const navProjects = document.getElementById('navprojects')!;
		const navContact = document.getElementById('navcontact')!;

		navHome.style.top = cssPercent(home.offsetTop / scrollDiv.scrollHeight);
		navAbout.style.top = cssPercent(
			about.offsetTop / scrollDiv.scrollHeight
		);
		navJobs.style.top = cssPercent(jobs.offsetTop / scrollDiv.scrollHeight);
		navProjects.style.top = cssPercent(
			projects.offsetTop / scrollDiv.scrollHeight
		);
		navContact.style.top = cssPercent(
			contact.offsetTop / scrollDiv.scrollHeight
		);

		scrollDiv.onscroll = () => {
			let percent =
				Math.min(
					Math.max(
						0.3,
						(scrollDiv.scrollTop / scrollDiv.scrollHeight) * 136.5
					),
					98.2
				) + '%';
			scrollPointer.style.top = percent;
		};

		setActive();

		document
			.getElementById('burgerMenuText')!
			.addEventListener('click', () => toggleBurgerMenu());

		const navLinks = document.querySelectorAll('#nav div a');
		navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				setTimeout(toggleBurgerMenu, 600);
			});
		});

		document.getElementById('theme')!.addEventListener('scroll', () => {
			setActive();
		});

		document.getElementById('paint')!.addEventListener('click', () => {
			switchTheme();
		});

		setThemeIcon();

		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setTheme('dark');
		}
	}, []);

	const cssPercent = (percentAsDecimal: number) => {
		return percentAsDecimal * 100 + '%';
	};

	const switchTheme = () => {
		let themeDiv = document.getElementById('theme')!;
		let themeSwitcher = document.getElementById('theme-switcher')!;

		if (themeDiv.classList.contains('dark')) {
			themeDiv.classList.replace('dark', 'light'); // = ['light'];
			setThemeIcon();
		} else {
			themeDiv.classList.replace('light', 'dark');
			setThemeIcon();
		}
	};

	function setTheme(theme: string) {
		let themeDiv = document.getElementById('theme')!;
		let currentTheme = themeDiv.classList[0];

		if (currentTheme !== theme) {
			switchTheme();
		}
	}

	function setThemeIcon() {
		let themeSwitcher = document.getElementById('theme-switcher')!;
		let themeDiv = document.getElementById('theme')!;

		if (themeDiv.classList.contains('dark')) {
			themeSwitcher.classList.replace('fa-moon', 'fa-sun');
		} else {
			themeSwitcher.classList.replace('fa-sun', 'fa-moon');
		}
	}

	const toggleBurgerMenu = () => {
		if (
			window.matchMedia &&
			window.matchMedia('(max-width: 1100px)').matches
		) {
			let burgerText = document.getElementById('burgerMenuText')!;
			let menu = document.getElementById('menuItems')!;
			let burger = document.getElementById('burgerMenu')!;

			if (burgerText.innerHTML === 'MENU') {
				menu.classList.add('active');
				burger.classList.add('active');
				burgerText.classList.add('active');
				burgerText.innerHTML = 'CLOSE MENU';
			} else {
				menu.classList.remove('active');
				burger.classList.remove('active');
				burgerText.classList.remove('active');
				burgerText.innerHTML = 'MENU';
			}
		}
	};

	const setActive = () => {
		const sections = document.querySelectorAll('section');

		sections.forEach((section) => {
			const contentTop = document.getElementById('theme')!.scrollTop;
			const sectionTop = section.offsetTop;
			const sectionHeight = section.scrollHeight;
			// (contentTop >= sectionTop - sectionHeight) / 2
			if (
				section.getBoundingClientRect().top + sectionHeight > 0 &&
				section.getBoundingClientRect().top < window.innerHeight
			) {
				let activeAnchor = document.querySelector(
					`a[href='#${section.id}']`
				);

				activeAnchor?.classList.add('active');
			} else {
				let activeAnchor = document.querySelector(
					`a[href='#${section.id}']`
				);

				activeAnchor?.classList.remove('active');
			}
		});
	};

	return (
		<Fragment>
			<div id="burgerMenu">
				<span id="burgerMenuText">MENU</span>
			</div>
			<div id="menuItems">
				<div className="scrollContainer">
					<div id="nav">
						<NavButton scrollTo="home">home</NavButton>
						<NavButton scrollTo="about">about</NavButton>
						<NavButton scrollTo="jobs">experience</NavButton>
						<NavButton scrollTo="projects">projects</NavButton>
						<NavButton scrollTo="contact">contact</NavButton>
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
							rel="noreferrer"
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
							rel="noreferrer"
						>
							<i className="fab fa-github"> </i>
						</a>
						<div className="help">
							<p>github.com/bmyoungquist</p>
						</div>
					</div>
					<div className="otherLink">
						<a
							href="mailto:brandon@youngquist.dev"
							target="_blank"
							rel="noreferrer"
						>
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
