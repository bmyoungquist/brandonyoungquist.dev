import { PhotoList } from '@/app/photos/page'
import FullWidthText from '../nav/full-width-text'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { cn } from '@/lib/utils'

interface PhotoGridProps {
	photos: PhotoList
	titleSize?: string
	subtitleSize?: string
	titleClassName?: string
}

export default function PhotoGrid ({ photos, titleSize, subtitleSize, titleClassName }: PhotoGridProps) {

	return (
		<div className="flex flex-col gap-4 @container">
			<div className={`grid gap-4 @min-[3700px]:grid-cols-5 @min-[1800px]:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 min-w-full max-w-full`}>
				{
					photos.map(
						(photo, ix) => {
							return (
								<Dialog key={`${photo.relativePath}-${ix}`}>
									<DialogTrigger className={`row-span-1 col-span-1 select-none aspect-square`}>
										<div
											className={`relative w-full h-full`}>
											<Image
												width={0}
												height={0}
												sizes='100vh'
												className={`w-full h-full rounded object-cover object-${photo.objectPosition ?? 'bottom'}`}
												src={photo.relativePath}
												alt={photo.alt}
											/>
											<div className={cn(`absolute bottom-0 left-0 w-full h-full font-black px-6 py-4 opacity-0 hover:opacity-85 transition duration-200 text-white rounded cursor-zoom-in bg-gradient-to-b from-black to-black/5`, titleClassName)}>
												<div className='flex flex-col gap-0 px-2 py-2 w-fit max-w-full'>
													<span className={`text-${titleSize ? titleSize : '3xl'} uppercase tracking-wider transition-colors opacity-100 -mb-0.5 mix-blend-difference justify-items-start justify-start justify-self-start`}>
														{photo.title}
													</span>
													<FullWidthText className={`text-${subtitleSize ? subtitleSize : 'lg'} pe-1 mix-blend-difference`} id={`${ix}-${photo.subTitle}`} text={photo.subTitle} />
												</div>
											</div>
										</div>
									</DialogTrigger>
									<DialogContent className='max-h-[98svh] min-w-fit'>
										{
											photo.orientation == "landscape" ?
												(
													<img
														className='object-scale-down max-w-full max-h-full min-h-full rounded select-none'
														src={photo.relativePath}
														alt={photo.alt}
													/>
												) :
												(
													<img
														className='object-scale-down max-h-[80svh] max-w-full min-w-full rounded select-none'
														src={photo.relativePath}
														alt={photo.alt}
													/>
												)
										}
										<DialogTitle>
											<div className='flex flex-col gap-0 py-2 w-fit max-w-full text-foreground font-black'>
												<span className='text-4xl uppercase tracking-wider transition-colors opacity-100 cursor-text -mb-0.5'>
													{photo.title}
												</span>
												<FullWidthText className='text-l pe-1 cursor-text' id={`${ix}-${photo.subTitle}`} text={photo.subTitle} />
											</div>
										</DialogTitle>
									</DialogContent>
								</Dialog>
							)
						}
					)
				}
			</div >
		</div>
	)
}