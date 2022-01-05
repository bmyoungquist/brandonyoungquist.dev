import type { NextPage } from 'next';
import Script from 'next/script';
import { Fragment, useEffect } from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Menu from '../components/Menu';
import Experience from '../components/Experience';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<Fragment>
			<Script
				src="https://kit.fontawesome.com/ae21b110a4.js"
				crossOrigin="anonymous"
			></Script>
			<div id="theme" className="dark">
				<Hero />
				<AboutMe />
				<Experience />
				<Projects />
				<Contact />

				<Menu />
			</div>
		</Fragment>
	);
};

export default Home;
