import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
		<html lang="pt-BR">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}

export default RootLayout
