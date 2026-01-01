'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { badgeVariants } from '../ui/badge'
import { useSearchParams } from 'next/navigation'
import { Hash } from 'lucide-react'

interface FilterListProps {
	postTags: string[]
	slug: string
	variant?: string
}

export default function FilterList ({ postTags, slug, variant }: FilterListProps) {
	const searchParams = useSearchParams()
	const tags = searchParams.get('tags')

	return (
		<div className="flex flex-row gap-1">
			{
				postTags.map(tag => (
					<Link
						key={`${slug}-${tag}`}
						className={cn(badgeVariants({ variant: 'default' }), 'flex flex-row gap-0.5 select-none')}
						href={`/posts?tags=${tags ?
							tags
								.split(',')
								.concat(tag)
								.filter((val, ix, array) => array.indexOf(val) === ix)
								.join(',') :
							tag
							}`}>
						<Hash /> {tag}
					</Link>
				))
			}
		</div>
	)
}