import PhotoGrid from '@/components/photos/photo-grid'
import PhotoData from './photo-list.json'
import { Metadata } from 'next'
export type PhotoList = typeof PhotoData

export const metadata: Metadata = {
	title: 'Photos'
}

export default function Photos () {
	return (
		<PhotoGrid photos={PhotoData.filter(p => p.enabled)} />
	)
}