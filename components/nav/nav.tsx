import Link from 'next/link'
import FullWidthText from './full-width-text'
import NavItem from './nav-item'

export default function NavBar () {
	return (
		<nav className="flex flex-row justify-between w-screen md:px-20 px-10 py-4 border-b border-solid h-fit items-center">
			<Link href='/' className="flex flex-col gap-0 w-fit cursor-pointer">
				<div className="flex flex-row w-fit gap-2 uppercase md:text-2xl text-xl font-black -mb-1.5 tracking-wider">
					<span>Brandon</span>
					<span>Youngquist</span>
				</div>
				<FullWidthText
					className='md:text-lg text-sm'
					id='brandon-youngquist-katakana'
					text='ブランドン・ヨンクイスト' />
			</Link>
			<div className='hidden flex flex-row gap-12 h-full align-middle items-center'>
				<NavItem
					id='posts'
					href='/posts'
					menuTitle='posts'
					katakana='ボログ'
				/>
				<NavItem
					id='photos'
					href='/photos'
					menuTitle='photos'
					katakana='シャシン'
				/>
			</div>
		</nav>
	)
}