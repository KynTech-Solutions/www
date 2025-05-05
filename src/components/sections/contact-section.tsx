import { ContactForm } from "@/components/forms/contact-form"
import { SectionContainer, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/ui/section"

export const ContactSection = () => (
	<SectionContainer id="contato" className="scroll-mt-24">
		<SectionHeader className="mb-6 text-center">
			<SectionTitle className="font-semibold text-xl sm:text-3xl tracking-tighter leading-7 sm:mb-4">Solicite sua proposta</SectionTitle>

			<SectionDescription className="text-[#878787] text-center sm:text-lg">
				Preencha os campos abaixo e um especialista entrará em contato em até <span className="text-white font-semibold">2 horas</span>.
			</SectionDescription>
		</SectionHeader>

		<SectionContent className="md:grid md:grid-cols-2 md:gap-x-8 border border-border px-4 py-6 md:px-8  bg-[#F2F1EF] dark:bg-[#121212]">
			<ContactForm />

			<div className="hidden md:flex flex-col justify-center items-center">
				<h2 className="text-2xl text-center font-medium">Preencha os campos</h2>
				<span className="text-center text-base text-[#878787]">
					e receba <span className="text-white">hoje mesmo</span> um plano de desenvolvimento
					<span className="text-white"> 100% personalizado</span> para sua ideia.
				</span>
			</div>
		</SectionContent>
	</SectionContainer>
)
