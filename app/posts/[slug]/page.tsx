import Link from 'next/link'
import Posts from '../post-list.json'
import PostHeader from './gradient'

export default async function Post ({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const post = Posts.find(post => post.slug === slug)

	return (
		<div className="max-w-screen">
			{
				post != undefined ? (
					<div className='flex flex-col gap-4'>
						<PostHeader post={post} />
						{/* <Separator className='mt-2' /> */}
						{
							post.body ? (
								<div dangerouslySetInnerHTML={{ __html: post.body }} />
							) : (
								<></>
							)
						}
						<Link href={"/"} className='underline max-w-max select-none'>{"<- Home"}</Link>
					</div>
				) : (
					<div>
						Article not found
					</div>
				)
			}
		</div>
	)
}