import PhotoGrid from '@/components/photos/photo-grid'
import PhotoData from './photo-list.json'
export type PhotoList = typeof PhotoData

export default function Photos () {
	return (
		<PhotoGrid photos={PhotoData.filter(p => p.enabled)} />
	)
}