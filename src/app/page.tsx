import Link from "next/link"

import { FAQ } from "@/components/faq"
import { Hero } from "@/components/hero"
import { ContactSection } from "@/components/sections/contact-section"
import { SectionOne } from "@/components/sections/section-one"
import { SectionTwo } from "@/components/sections/section-two"
import { Button } from "@/components/ui/button"

const Home = () => {
	return (
		<>
			<Hero />

			<div className="space-y-20">
				<SectionOne />

				<ContactSection />

				<SectionTwo />

				<section className="border border-border md:container text-center px-10 py-14 mx-4 md:mx-auto md:px-24 md:py-20 mb-32 mt-24 flex items-center flex-col bg-[#F2F1EF] dark:bg-[#121212]">
					<span className="text-6xl	md:text-8xl font-thin tracking-widest uppercase">Kyntech</span>
					<p className="text-[#878787] mt-6">
						Sites sob medida, Aplicativos personalizados, Integração de dados, Design impactante & Equipe tech feita para transformar sua <br /> Ideia em
						realidade.
					</p>

					<div className="mt-10 md:mb-8">
						<Button
							variant="outline"
							className="border border-primary h-12 px-6 dark:border-white text-primary hidden md:block rounded-none bg-background dark:bg-background"
						>
							<Link href="#contato">Agendar consultoria</Link>
						</Button>
					</div>
				</section>

				<FAQ />
			</div>
		</>
	)
}

export default Home
