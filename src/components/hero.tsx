import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const Hero = () => (
	<div className="lg:grid lg:grid-cols-2 mt-7.5 lg:mt-[80px] min-h-[530px]">
		<section className="flex flex-col">
			<Button variant="outline" className="rounded-full border-border gap-x-1 w-fit group px-3 py-1" asChild>
				<Link href="/">
					<span className="font-mono text-xs font-medium">Agende sua consultoria grátis</span>
					<ArrowRight className="size-4 transition group-hover:translate-x-1" />
				</Link>
			</Button>

			<h2 className="mt-6 md:mt-10 max-w-[580px] text-[#878787] leading-tight text-[24px] md:text-[36px] font-medium">
				Sites sob medida, Aplicativos personalizados, Integração de dados, Design impactante & Equipe tech feita para transformar sua Ideia em realidade.
			</h2>

			<div className="flex flex-col-reverse md:flex-row items-center gap-x-4 gap-y-2 mt-8 md:mt-10">
				<Button variant="secondary" className="w-full md:w-fit h-11 px-6 dark:bg-[#1D1D1D] bg-[#F2F1EF]" asChild>
					<Link href="#como-funciona">Veja nosso processo</Link>
				</Button>

				<Button className="w-full md:w-fit h-11 px-5">Peça seu orçamento</Button>
			</div>

			<p className="text-xs text-[#707070] mt-4 font-mono">100% personalizado e Suporte Contínuo</p>
		</section>

		<section className="hidden -mt-20 lg:flex lg:flex-col lg:items-center lg:justify-center lg:mx-auto">
			<h1 className="font-thin text-7xl uppercase">Kyntech</h1>
			<h2 className="font-light text-xl text-[#878787]">
				Transformando <span className="font-normal text-white">ideias</span> em grandes <span className="font-normal text-white">negócios</span>.
			</h2>
		</section>
	</div>
)
