import { ExternalLink } from 'lucide-react'
import { ReactNode } from 'react'

export default function Footer () {
	return (
		<footer className='w-screen sm:px-20 px-6 py-8 border-t border-solid flex sm:flex-row flex-col gap-4 justify-between'>
			<div className='flex sm:flex-row flex-col sm:gap-12 gap-4'>
				<StylizedExternalLink href='https://www.linkedin.com/in/brandonyoungquist/'>
					LinkedIn
				</StylizedExternalLink>
				<StylizedExternalLink href="https://github.com/bmyoungquist">
					Github
				</StylizedExternalLink>
				<StylizedExternalLink href="mailto:brandon@youngquist.dev">
					Email
				</StylizedExternalLink>
			</div>
			<div className="flex sm:flex-row flex-col gap-1 text-sm font-medium">
				<span>&copy;{new Date().getFullYear()} Brandon Youngquist.</span>
				<span>All Rights Reserved.</span>
			</div>
		</footer>
	)
}

interface StylizedExternalLinkProps {
	children: ReactNode
	href: string
}

export function StylizedExternalLink ({ children, href }: StylizedExternalLinkProps) {
	return (
		<a href={href} className='h-fit flex flex-row uppercase font-medium items-center text-sm' target='_blank'>
			{children}
			<ExternalLink height={12} />
		</a>
	)
}