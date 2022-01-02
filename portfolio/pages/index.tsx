import type { NextPage } from 'next';
import { useEffect } from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Menu from '../components/Menu';
import Experience from '../components/Experience';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';

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
			<Hero />
			<AboutMe />
			<Experience />
			<Projects />
			<Contact />

			<Menu />
		</div>
	);
};

export default Home;
