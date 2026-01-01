import { cn } from '@/lib/utils'

interface FullWidthKatakanaProps {
	id: string
	text: string
	className?: string
}

export default function FullWidthText (props: FullWidthKatakanaProps) {
	return (
		<div className={cn('flex', 'flex-row', 'w-full', 'justify-between', props.className)}>
			{props.text.split('').map((k, ix) => <span key={`${props.id}-${ix}`}>{k}</span>)}
		</div>
	)
}