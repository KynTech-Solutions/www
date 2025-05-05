import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section"

export const HighlightsSection = () => (
	<>
		<SectionSeparator />
		<section className="border border-border text-center md:mx-auto px-2 py-10 md:px-24 md:py-20 flex items-center flex-col bg-[#F2F1EF] dark:bg-[#121212]">
			<span className="text-4xl	md:text-8xl font-thin tracking-widest uppercase">Kyntech</span>
			<p className="text-[#878787] mt-4 md:mt-6 text-pretty">
				Sites sob medida, Aplicativos personalizados, Integração de dados, Design impactante & Equipe tech feita para transformar sua <br /> Ideia em realidade.
			</p>

			<Button variant="outline" className="border border-primary h-12 px-6 dark:border-white text-primary rounded-none bg-background dark:bg-background mt-10">
				<Link href="#contato">Agendar consultoria</Link>
			</Button>
		</section>
	</>
)
