import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqQuestionsArray = [
	{
		id: 1,
		question: "Quanto custa para desenvolver um site/app?",
		answer:
			"O valor varia conforme a complexidade do projeto. Por exemplo, um site institucional básico tem um custo diferente de um e-commerce completo. Nosso orçamento é personalizado e sem taxas ocultas. Solicite uma proposta grátis!"
	},
	{
		id: 2,
		question: "Existem custos adicionais após o desenvolvimento?",
		answer: "O valor inicial cobre desenvolvimento e entrega. Oferecemos pacotes opcionais de manutenção e atualizações, mas você só paga por eles se quiser."
	},
	{
		id: 3,
		question: "Quanto tempo leva para ficar pronto?",
		answer:
			"Sites simples podem ser entregues em 1-2 semanas. Apps ou sistemas complexos demandam mais tempo, dependendo das funcionalidades. Após analisar seu projeto, daremos um prazo realista."
	},
	{
		id: 4,
		question: "Como funciona a comunicação durante o projeto?",
		answer:
			"Mantemos você atualizado em todas as etapas via e-mail, WhatsApp ou reuniões semanais. Sua opinião é essencial para garantir que o resultado seja exatamente o que você precisa."
	},
	{
		id: 5,
		question: "Posso atualizar o conteúdo do site depois?",
		answer: "Claro! Desenvolvemos seu site de uma forma que você possa editar textos e imagens quando quiser."
	},
	{
		id: 6,
		question: "Vocês dão suporte após a entrega?",
		answer: "Oferecemos 30 dias de suporte grátis para ajustes pontuais. Após esse período, temos pacotes de manutenção mensal conforme sua necessidade."
	}
]

export const FAQ = () => (
	<section className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5">
		<div className="flex flex-col justify-center">
			<p className="text-xl md:text-5xl uppercase font-semibold text-center">FAQ</p>
			<p className="text-base md:text-lg text-[#878787] text-center">Respostas diretas para as perguntas mais comuns que recebemos.</p>
		</div>

		<Accordion type="single" collapsible className="w-full">
			{faqQuestionsArray.map(({ id, answer, question }) => (
				<AccordionItem key={id} value={`item-${id}`}>
					<AccordionTrigger className="text-lg cursor-pointer">{question}</AccordionTrigger>
					<AccordionContent className="text-[#878787] text-md">{answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	</section>
)
