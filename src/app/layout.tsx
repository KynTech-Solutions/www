import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/context/theme-context"

import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	display: "swap"
})

export const metadata: Metadata = {
	title: "Kyntech",
	description: ""
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<main className="container mx-auto px-4">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
