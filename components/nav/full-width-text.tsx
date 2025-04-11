import { cn } from '@/lib/utils'

interface FullWidthKatakanaProps {
	id: string;
	katakana: string;
	className?: string;
}

export default function FullWidthText(props: FullWidthKatakanaProps) {
	return (
		<div className={cn('flex', 'flex-row', 'w-full', 'justify-between', props.className)}>
			{props.katakana.split('').map((k, ix) => <span key={`${props.id}-${ix}`}>{k}</span>)}
		</div>
	)
}