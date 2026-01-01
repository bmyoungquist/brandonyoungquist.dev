export default function CircleIcon({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='rounded-full bg-foreground p-4 w-min h-min'>
			{children}
		</div>
	)
}