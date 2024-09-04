import { Providers } from '@/app/providers'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from "next"
import "./globals.scss"
import { Toaster } from 'sonner'
import { ThemeModeScript } from "flowbite-react"

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Alpha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ThemeModeScript />
			</head>
			<body suppressHydrationWarning={true}>
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
	);
}
