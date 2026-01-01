import type { Metadata } from "next"
import { Inter, Noto_Sans_JP, Fira_Code } from "next/font/google"
import "./globals.css"
import NavBar from '@/components/nav/nav'
import Footer from '@/components/footer'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
	title: {
		template: '%s | Brandon Youngquist',
		default: 'Brandon Youngquist'
	},
	description: 'Brandon\'s personal website'
}

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"]
})

const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"]
})

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"]
})

export default function RootLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${notoSansJP.variable} ${firaCode.variable} antialiased font-main min-w-screen min-h-screen max-w-screen overflow-x-hidden flex flex-col justify-between`}
			>
				<NavBar />
				<div className="max-w-screen md:p-8 p-6 mb-auto">
					{children}
					<Analytics />
					<SpeedInsights />
				</div>
				<Footer />
			</body>
		</html>
	)
}
