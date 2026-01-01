import PostLayout from '@/layouts/post-layout'

export default function PostPageLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PostLayout>
			<div className='w-full'>
				{children}
			</div>
		</PostLayout>
	)
}
