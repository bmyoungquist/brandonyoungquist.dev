'use client'

import { Post } from '@/app/posts/page'
import { Fragment } from 'react'
import PostPreview from './post-preview'
import { useSearchParams } from 'next/navigation'
import Filters from './filters'
import { cn } from '@/lib/utils'

interface PostListProps {
	posts: Post[]
}

export default function PostList ({ posts }: PostListProps) {
	const searchParams = useSearchParams()
	const tags = searchParams.get('tags')?.split(',')

	return (
		<div className="flex flex-col gap-4">
			<Filters />
			{
				posts.filter(post => tags ? tags.every(tag => post.tags.includes(tag)) : true).map((post, ix) => (
					<Fragment key={post.slug}>
						<div className={cn(`min-w-full`, (post.body ? '' : 'opacity-50'), ' border-2 rounded-md p-4')}>
							<PostPreview {...post} />
						</div>
					</Fragment>
				))
			}
		</div>
	)
}