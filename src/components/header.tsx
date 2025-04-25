import { ToggleModeButton } from "@/components/toggle-mode-button"
import { Button } from "@/components/ui/button"
const linksArray = [
	{ text: "Como funciona", href: "como-funciona" },
	{ text: "Soluções", href: "solucoes" },
	{ text: "Preços", href: "precos" },
	{ text: "Contato", href: "contato" },
	{ text: "FAQ", href: "faq" }
]

export const Header = () => (
	<header className="w-full flex justify-between items-center sticky top-0 z-50 backdrop-blur px-8 py-4 border-b border-border bg-background dark:bg-background">
		<h1 className="font-thin text-2xl uppercase">Kyntech</h1>
		<nav className="flex gap-4">
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
