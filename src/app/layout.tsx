import { ThemeModeScript } from "flowbite-react"
import type { Metadata } from "next"
// import Script from "next/script"
import { Toaster } from "sonner"

import { SITE_NAME } from "@/constants/seo.constants"

import "./globals.scss"
import { Providers } from "@/app/providers"

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: "Alpha"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				{/*<Script*/}
				{/*	src='./script.js'*/}
				{/*	strategy='beforeInteractive'*/}
				{/*/>*/}
				<ThemeModeScript mode={"dark"} />
			</head>
			<body
				suppressHydrationWarning={true}
				className={"dark:bg-gray-400"}
			>
				<Providers>
					{children}
					<Toaster
						theme='dark'
						position='bottom-right'
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	)
}
