import PostLayout from '@/layouts/post-layout'

export default function ProjectsPageLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PostLayout>
			{children}
		</PostLayout>
	)
}
