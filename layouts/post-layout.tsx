export default function PostLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='sm:w-[768px] sm:min-w-[768px] mx-auto'>
			{children}
		</div>
	)
}