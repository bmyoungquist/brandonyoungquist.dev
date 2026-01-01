import PostList from '@/components/posts/post-list'
import PostsFromFile from './post-list.json'
type ArrayElement<T> = T extends (infer U)[] ? U : never
export type Post = ArrayElement<typeof PostsFromFile>

export default async function Posts () {
	return (
		<div className="p-4">
			<PostList posts={PostsFromFile.filter(p => p.enabled)} />
		</div>
	)
}

