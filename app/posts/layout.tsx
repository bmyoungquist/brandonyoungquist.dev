import PostLayout from '@/layouts/post-layout'
import { Suspense } from 'react'

export default function PostPageLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PostLayout>
			<div className='w-full'>
				<Suspense>
					{children}
				</Suspense>
			</div>
		</PostLayout>
	)
}
