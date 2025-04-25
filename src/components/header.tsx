import { ToggleModeButton } from "@/components/toggle-mode-button"
import { Button } from "@/components/ui/button"
import { AlignLeft } from "lucide-react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "./ui/drawer"
import Link from "next/link"

const linksArray = [
	{ text: "Como funciona", href: "como-funciona" },
	{ text: "Soluções", href: "solucoes" },
	{ text: "Preços", href: "precos" },
	{ text: "Contato", href: "contato" },
	{ text: "FAQ", href: "faq" }
]

export const Header = () => (
	<header className="w-full flex justify-between items-center sticky top-0 z-50 backdrop-blur lg:px-8 py-4 border-b border-border bg-background dark:bg-background">
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon" className="lg:hidden">
					<AlignLeft className="size-6" />
				</Button>
			</DrawerTrigger>

			<DrawerContent className="pb-4">
				<DrawerHeader>
					<DrawerTitle className="sr-only">Links Úteis</DrawerTitle>
				</DrawerHeader>
				<nav>
					<ul className="flex flex-col gap-y-2">
						{linksArray.map(({ text, href }) => (
							<li key={text}>
								<Button variant="link" className="ml-3 text-xl" asChild>
									<Link href={`#${href}`}>{text}</Link>
								</Button>
							</li>
						))}
					</ul>
				</nav>
			</DrawerContent>
		</Drawer>

		<h1 className="font-thin text-2xl uppercase tracking-widest">Kyntech</h1>

		<ToggleModeButton variant="ghost" className="lg:hidden" />

		<nav className="hidden lg:flex gap-4">
			<ul className="flex gap-x-2">
				{linksArray.map(({ text, href }) => (
					<li key={text}>
						<Button variant="link" asChild>
							<Link href={`#${href}`}>{text}</Link>
						</Button>
					</li>
				))}
			</ul>
			<ToggleModeButton />
		</nav>
	</header>
)
