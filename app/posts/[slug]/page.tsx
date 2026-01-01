import Link from 'next/link'
import Posts from '../post-list.json'
import PostHeader from './gradient'
import type { Metadata } from 'next'

type Props = {
	params: Promise<{ slug: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata (
	{ params }: Props
): Promise<Metadata> {
	const slug = (await params).slug

	const post = Posts.find(post => post.slug === slug)

	return {
		title: post?.title,
		description: post?.subHeader,
	}
}

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