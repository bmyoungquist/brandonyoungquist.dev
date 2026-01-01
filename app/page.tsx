import PostList from '@/components/posts/post-list'
import Photos from './photos/photo-list.json'
import Posts from './posts/post-list.json'
import PhotoGrid from '@/components/photos/photo-grid'
import { Suspense } from 'react'

export default function Home () {
	return (
		<div className="flex md:flex-row flex-col sm:gap-12 gap-4 justify-around lg:p-4 md:p-4 sm:p-4 p-2 obverflow-x-hidden">
			<div className="flex flex-col gap-4 md:w-1/2 w-full">
				<span className="max-w-max text-4xl font-black uppercase pb-1">Posts</span>
				<Suspense>
					<PostList posts={Posts.filter(p => p.enabled).slice(0, 7)} />
				</Suspense>
			</div>
			<div className='w-[1px] border-l border-solid'></div>
			<div className="flex flex-col gap-4 md:w-1/2 w-full">
				<span className="max-w-max text-4xl font-black uppercase pb-1">Photos</span>
				<PhotoGrid photos={Photos.filter(p => p.enabled).slice(0, 6)} titleSize='xl' subtitleSize='md' titleClassName='px-3 py-2' />
			</div>
		</div>
	)
}
