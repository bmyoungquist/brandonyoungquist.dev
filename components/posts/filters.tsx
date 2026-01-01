'use client'

import { useSearchParams } from 'next/navigation'
import { Hash, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { badgeVariants } from '../ui/badge'

export default function Filters () {
	const searchParams = useSearchParams()
	const tags = searchParams.get('tags')?.split(',')

	return (
		<div className={cn('flex flex-row gap-2 items-center', ((tags ? tags.length : 0) > 0 ? 'visible' : 'hidden'))}>
			<span className="text-lg font-extrabold uppercase">
				Filter:
			</span>
			{
				tags?.map(tag => {
					const tagsWithout = tags.filter(item => item !== tag)

					return (
						<Link
							key={tag}
							className={cn('flex flex-row gap-1 cursor-pointer max-h-[22px] select-none', badgeVariants({ variant: 'outline' }))}
							href={`/posts${tagsWithout.length > 0 ? `?tags=${tagsWithout.join(',')}` : ''}`}>
							<Hash />
							{' '}{tag}
							<X />
						</Link>
					)
				})
			}
		</div>
	)
}