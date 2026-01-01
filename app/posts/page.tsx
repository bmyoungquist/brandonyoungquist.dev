import PostList from '@/components/posts/post-list'
import PostsFromFile from './post-list.json'
import { Suspense } from 'react'
import { Metadata } from 'next'
type ArrayElement<T> = T extends (infer U)[] ? U : never
export type Post = ArrayElement<typeof PostsFromFile>

export const metadata: Metadata = {
	title: 'Posts'
}

export default async function Posts () {
	return (
		<div className="p-4">
			<Suspense>
				<PostList posts={PostsFromFile.filter(p => p.enabled)} />
			</Suspense>
		</div>
	)
}

