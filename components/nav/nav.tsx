import FullWidthText from './full-width-text'
import NavItem from './nav-item'

export default function NavBar() {
	return (
		<nav className="flex flex-row justify-between w-full px-20 py-4 border-b border-dashed h-fit items-center">
			<div className="flex flex-col gap-0 w-fit cursor-pointer">
				<div className="flex flex-row w-fit gap-2 uppercase text-2xl font-black -mb-2 tracking-wider">
					<span>Brandon</span>
					<span>Youngquist</span>
				</div>
				<FullWidthText
					id='brandon-youngquist-katakana' 
					katakana='ブランドン・ヨンクイスト'/>
			</div>
			<div className='flex flex-row gap-12 h-full align-middle items-center'>
				<NavItem
					id='posts'
					menuTitle='posts'
					katakana='ボログ'
				/>
				<NavItem
					id='photos'
					menuTitle='photos'
					katakana='シャシン'
				/>
				<NavItem
					id='projects'
					menuTitle='projects'
					katakana='プロジェクト'
				/>
			</div>
		</nav>
	)
}