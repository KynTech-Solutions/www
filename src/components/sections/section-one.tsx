import { Code2, DraftingCompass, MessageSquareText, Rocket } from "lucide-react"
import type { ElementType } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
	SectionCardIcon,
	SectionCardRoot,
	SectionContainer,
	SectionContent,
	SectionDescription,
	SectionHeader,
	SectionSeparator,
	SectionTitle
} from "@/components/ui/section"

const cardsArray: {
	id: number
	title: string
	text: string
	icon: ElementType
}[] = [
	{
		id: 0,
		title: "1. Consultoria",
		text: "Conversaremos para detalhar seu projeto: objetivos, público-alvo e funcionalidades.",
		icon: MessageSquareText
	},
	{
		id: 1,
		title: "2. Protótipo Realista(MVP)",
		text: "Desenvolveremos um protótipo interativo da sua ideia, validando design e funcionalidades.",
		icon: DraftingCompass
	},
	{
		id: 2,
		title: "3. Codificamos com Tecnologia de Ponta",
		text: "Seu projeto é desenvolvido em etapas, com testes rigorosos de usabilidade, segurança e desempenho. Você acompanha cada fase em tempo real.",
		icon: Code2
	},
	{
		id: 3,
		title: "4. Lançamento e Evolução Contínua",
		text: "Entregaremos o projeto pronto para uso, com hospedagem, domínio e treinamento. Oferecemos suporte técnico e atualizações conforme sua demanda cresce.",
		icon: Rocket
	}
]

export const SectionOne = () => {
	return (
		<SectionContainer id="como-funciona" className="scroll-mt-24">
			<SectionHeader className="mb-12 text-center">
				<SectionTitle className="font-semibold text-3xl tracking-tighter leading-7 md:text-center mb-4">Como Funciona</SectionTitle>

				<SectionDescription className="text-neutral-300 text-center text-lg">
					Do Seu Briefing ao Software Pronto: Simples, Rápido e Sem Surpresas
				</SectionDescription>
			</SectionHeader>

			<SectionSeparator />

			<SectionContent className="mt-6 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
				{cardsArray.map(({ icon: Icon, ...card }) => (
					<SectionCardRoot key={card.id}>
						<Card className="backdrop-blur-lg h-full bg-[#F2F1EF] dark:bg-[#121212]">
							<CardHeader className="flex gap-4 pb-2 flex-col">
								<SectionCardIcon className="bg-muted/45 flex w-11 items-center justify-center rounded-md px-3 py-2">
									<Icon className="size-6 text-primary" />
								</SectionCardIcon>

								<CardTitle className="text-xl">{card.title}</CardTitle>
							</CardHeader>

							<CardContent>
								<CardDescription className="text-[#878787] leading-relaxed">{card.text}</CardDescription>
							</CardContent>
						</Card>
					</SectionCardRoot>
				))}
			</SectionContent>
		</SectionContainer>
	)
}
