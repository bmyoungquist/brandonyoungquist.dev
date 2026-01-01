import Link from 'next/link'
import FullWidthText from './full-width-text'

interface NavItemProps {
	id: string
	menuTitle: string
	katakana: string
	href: string
}

export default function NavItem ({ id, menuTitle, katakana, href }: NavItemProps) {
	return (
		<Link href={href} className="flex flex-col cursor-pointer">
			<span className='text-xl font-black uppercase -mb-1'>
				{menuTitle}
			</span>
			<FullWidthText
				id={id}
				text={katakana}
				className='text-xs' />
		</Link>
	)
}