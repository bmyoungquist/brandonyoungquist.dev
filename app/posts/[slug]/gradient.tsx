'use client'

import { Calendar } from 'lucide-react'
import { Post } from '../page'
import FilterList from '@/components/posts/filter-list'

export default function PostHeader ({ post }: { post: Post }) {
	return (
		<div id={`gradient-${post.slug}`} className="flex flex-col gap-4 pb-4 pt-4 border-b-2">
			<span className="text-5xl font-black case">
				{post.title}
			</span>
			<span className="text-xl font-medium">
				{post.subHeader}
			</span>
			<div className="flex flex-row gap-4">
				<div className="flex flex-row gap-1 font-medium text-sm max-h-max items-center">
					<Calendar size={16} /> {post.publishDate}
				</div>
				<FilterList postTags={post.tags} slug={post.slug} variant='default' />
			</div>
		</div>
	)
}