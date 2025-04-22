import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const Hero = () => (
	<section className="mt-[30px] lg:mt-[80px] min-h-[530px] relative lg:h-[calc(100vh-300px)]">
		<div className="flex flex-col">
			<Button variant="outline" className="rounded-full border-border gap-x-1 w-fit group px-3 py-1" asChild>
				<Link href="/">
					<span className="font-mono text-xs font-medium">Fale com um especialista</span>
					<ArrowRight className="size-4 transition group-hover:translate-x-1" />
				</Link>
			</Button>

			<h2 className="mt-6 md:mt-10 max-w-[580px] text-[#878787] leading-tight text-[24px] md:text-[36px] font-medium">
				Sites sob medida, Aplicativos personalizados, Integração de dados, Design impactante & Equipe tech feita para transformar sua Ideia em realidade.
			</h2>

			<div className="mt-8 md:mt-10">
				<div className="flex items-center space-x-4">
					<Button variant="secondary" className="h-11 px-6 dark:bg-[#1D1D1D] bg-[#F2F1EF]">
						Saiba mais
					</Button>

					<Button className="h-11 px-5">Start free trial</Button>
				</div>
			</div>

			<p className="text-xs text-[#707070] mt-4 font-mono">100% personalizado e Suporte Contínuo</p>
		</div>
	</section>
)
