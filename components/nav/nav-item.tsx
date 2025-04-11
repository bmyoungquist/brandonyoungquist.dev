import FullWidthText from './full-width-text'

interface NavItemProps {
	id: string;
	menuTitle: string;
	katakana: string;
}

export default function NavItem({ id, menuTitle, katakana }: NavItemProps) {
	return (
		<div className="flex flex-col cursor-pointer">
			<span className='text-xl font-black uppercase -mb-1'>
				{menuTitle}
			</span>
			<FullWidthText
				id={id}
				katakana={katakana} 
				className='text-xs'/>
		</div>
	)
}