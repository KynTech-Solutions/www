import { ToggleModeButton } from "@/components/toggle-mode-button"
import { Button } from "@/components/ui/button"

export const Header = () => (
	<header className="w-full flex justify-between items-center sticky top-0 z-50 backdrop-blur px-8 py-4 border-b border-border bg-background dark:bg-background">
		<h1 className="">Kyntech</h1>
		<nav className="flex gap-4">
			<ul className="flex gap-x-2">
				<li>
					<Button variant="link" asChild>
						<a href="#como-funciona">Como funciona</a>
					</Button>
				</li>
				<li>
					<Button variant="link" asChild>
						<a href="#solucoes">Soluções</a>
					</Button>
				</li>
				<li>
					<Button variant="link" asChild>
						<a href="#precos">Preços</a>
					</Button>
				</li>
				<li>
					<Button variant="link" asChild>
						<a href="#contato">Contato</a>
					</Button>
				</li>
				<li>
					<Button variant="link" asChild>
						<a href="#faq">FAQ</a>
					</Button>
				</li>
			</ul>
			<ToggleModeButton />
		</nav>
	</header>
)
