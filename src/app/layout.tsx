import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/context/theme-context"

import { baseUrl } from "@/lib/constants"

import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	display: "swap"
})

export const metadata: Metadata = {
	title: {
		default: "Kyntech | Desenvolvimento de Software Sob Medida",
		template: "Kyntech | %s"
	},
	description: "Transformamos ideias em sites, apps e sistemas inteligentes com design impactante, integração de dados e foco em performance.",
	keywords: [
		"desenvolvimento de software",
		"criação de sites personalizados",
		"aplicativos sob demanda",
		"integração de sistemas",
		"design de UX/UI",
		"consultoria tech"
	],
	openGraph: {
		title: "Kyntech | Soluções Tech Sob Medida",
		description: "Da ideia ao código: desenvolvemos softwares que impulsionam negócios. Agende uma consultoria gratuita.",
		url: baseUrl,
		siteName: "Kyntech",
		images: [
			{
				url: `${baseUrl}/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Kyntech - Equipe tech desenvolvendo soluções digitais"
			}
		],
		locale: "pt_BR",
		type: "website"
	},
	// twitter: {
	// 	card: "summary_large_image",
	// 	title: "Kyntech | Tech Feita para Resultados",
	// 	description: "Sites, apps e sistemas que convertem visitantes em clientes. 100% personalizados.",
	// 	images: [`${baseUrl}/twitter-image.png`]
	// },
	icons: {
		apple: `${baseUrl}/apple-touch-icon.png`,
		other: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				url: `${baseUrl}/android-chrome-192x192.png` // Para Chrome Android
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				url: `${baseUrl}/android-chrome-512x512.png` // Para PWAs
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	}
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Header />
					<main className="container mx-auto px-4">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
