'use client'

import { Post } from '@/app/posts/page'
import Link from 'next/link'
import FilterList from './filter-list'

export default function PostPreview (post: Post) {

	return (
		<div className="flex flex-row gap-4 max-w-full items-center">
			<style jsx>{`
				div#${post.slug} {
					${post.gradient?.split(';').join(';\n')}
					}
					`}
			</style>
			<div className='flex flex-col gap-2 w-full relative'>
				<div className="flex flex-col gap-1">
					<span className='text-3xl font-black'>{post.title}</span>
					<span className='font-md'>{post.subHeader}</span>
				</div>
				<FilterList postTags={post.tags} slug={post.slug} />
				<div className='underline max-w-max select-none mt-2'>
					{
						post.body ?
							<Link href={`/posts/${post.slug}`}>Read More {'->'}</Link> :
							<span className='cursor-default'>Coming Soon</span>
					}
				</div>
			</div>
		</div>
	)
}