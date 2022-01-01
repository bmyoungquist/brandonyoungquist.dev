import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
	useEffect(() => {
		const scrollDiv = document.getElementById('theme')!;
		const scrollPointer = document.getElementById('scrollPointer')!;
		const home = document.getElementById('home')!;
		const about = document.getElementById('about')!;
		const jobs = document.getElementById('jobs')!;
		const projects = document.getElementById('projects')!;
		const contact = document.getElementById('contact')!;
		const navHome = document.getElementById('navHome')!;
		const navAbout = document.getElementById('navAbout')!;
		const navJobs = document.getElementById('navJobs')!;
		const navProjects = document.getElementById('navProjects')!;
		const navContact = document.getElementById('navContact')!;

		scrollDiv.onscroll = () => {
			let percent =
				Math.min(
					Math.max(
						0.3,
						(scrollDiv.scrollTop / scrollDiv.scrollHeight) * 134
					),
					98.2
				) + '%';
			scrollPointer.style.top = percent;
		};

		window.onload = () => {
			navHome.style.top = cssPercent(
				home.offsetTop / scrollDiv.scrollHeight
			);
			navAbout.style.top = cssPercent(
				about.offsetTop / scrollDiv.scrollHeight
			);
			navJobs.style.top = cssPercent(
				jobs.offsetTop / scrollDiv.scrollHeight
			);
			navProjects.style.top = cssPercent(
				projects.offsetTop / scrollDiv.scrollHeight
			);
			navContact.style.top = cssPercent(
				contact.offsetTop / scrollDiv.scrollHeight
			);

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
		};

		function cssPercent(percentAsDecimal: number) {
			return percentAsDecimal * 101 + '%';
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
					)!;

					activeAnchor.classList.add('active');
				} else {
					let activeAnchor = document.querySelector(
						`a[href='#${section.id}']`
					)!;

					activeAnchor.classList.remove('active');
				}
			});
		};
	}, []);

	return (
		<div id="theme" className="dark">
			<div id="burgerMenu">
				<span id="burgerMenuText">MENU</span>
			</div>
			<section id="home">
				<div className="content hero animateIn">
					<div className="hi">
						<h1>Hi, my name is</h1>
						<h2>Brandon Youngquist</h2>
					</div>
					<h3>I develop full stack applications for the web.</h3>
					<p>
						I'm a full stack software engineer that builds
						applications for the web. Currently, I work for a
						company building financial web apps for local
						governments.
					</p>
				</div>
			</section>

			<section id="about">
				<div className="content about">
					<div className="title">
						<h3>About Me</h3>
					</div>
					<div className="aboutContent">
						<div className="paragraphs">
							<p>
								Hi! My name is Brandon and I develope software
								for the web. My main interests include
								developing APIs, data visualization, and data
								science from a software engineering point of
								view.
							</p>
							<p>
								I love building productivity tools. I am always
								thinking about about how to get things done in a
								more efficient manner.
							</p>
							<p>
								Professionaly, I have worked with the full stack
								of Microsoft development tools and libraries to
								create financial web apps for local governments.
							</p>
						</div>
						<img src="//unsplash.it/300/300" alt="headshot" />
					</div>
				</div>
			</section>

			<section id="jobs">
				<div id="jobsContainer" className="content">
					<div className="title">
						<h3>Where I've Worked</h3>
					</div>
					<div className="jobsContent">
						<div className="companies">
							<p className="active">LOCiS</p>
							<p>North Central College</p>
						</div>
						<div className="description">
							<h4>Software Engineer</h4>
							<ul>
								<li>
									Created performant financial web apps for
									local governments
								</li>
								<li>
									Communicate specific software solutions to
									non-technical people
								</li>
								<li>
									Interface directly with customers to address
									specific needs
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="projects">
				<div className="content">
					<div className="title">
						<h3>Projects</h3>
					</div>
					<div className="projectsContent">
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
					</div>
				</div>
			</section>

			<section id="contact">
				<div className="content">
					<div className="title">
						<h3>Get in Touch</h3>
					</div>
					<div className="contactContent">
						<form action="" method="post">
							<input
								name="email"
								type="text"
								placeholder="your@email.address"
								autoComplete="email"
							/>
							<input
								name="subject"
								type="text"
								placeholder="Subject"
								autoComplete="false"
							/>
							<textarea
								name="body"
								placeholder="Body..."
								autoComplete="false"
							></textarea>
							<input type="submit" value="SEND ➤" />
						</form>
					</div>
				</div>
			</section>
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
				<div
					className="otherLinksContainer"
					style={{ zIndex: '10000' }}
				>
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
		</div>
	);
};

export default Home;
