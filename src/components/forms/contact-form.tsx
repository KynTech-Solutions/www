"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addContact } from "@/actions/firebase/add-contact"

export const ContactForm = () => {
	const contactFormSchema = z.object({
		name: z.string().min(1, "Nome é obrigatório").max(150, "Máx: 150 caracteres"),
		email: z.string().email("Email inválido").max(150, "Máx: 150 caracteres"),
		phone: z.string().optional(),
		idea: z.string().max(750, "Máx: 750 caracteres").optional()
	})

	type ContactFormSchema = z.infer<typeof contactFormSchema>

	const contactForm = useForm<ContactFormSchema>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			idea: ""
		}
	})

	const { control, handleSubmit } = contactForm

	function formatPhoneNumber(value: string): string {
		const digits = value.replace(/\D/g, "").slice(0, 11)
		if (digits.length === 0) return ""

		const areaCode = digits.slice(0, 2)
		const part1 = digits.slice(2, 7)
		const part2 = digits.slice(7, 11)

		let formatted = `(${areaCode}`
		if (digits.length > 2) formatted += `) ${part1}`
		if (digits.length > 7) formatted += `-${part2}`

		return formatted
	}

	async function onSubmit(data: ContactFormSchema) {
		await addContact(data)
	}

	return (
		<Form {...contactForm}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome Completo *</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Maria Souza (CEO da Maria Company)" {...field} />
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Usaremos para personalizar sua proposta</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email profissional *</FormLabel>
							<FormControl>
								<Input placeholder="contato@empresa.com" {...field} />
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Enviaremos a proposta detalhada e sem spam.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Celular (opcional)</FormLabel>
							<FormControl>
								<Input
									placeholder="(99) 99999-9999"
									value={field.value}
									onChange={(e) => {
										const formatted = formatPhoneNumber(e.target.value)
										field.onChange(formatted)
									}}
								/>
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Respostas em 15 minutos</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="idea"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Conte sua ideia</FormLabel>
							<FormControl>
								<Textarea rows={5} className="resize-none h-28" placeholder={`Ex: "App para delivery de medicamentos com integração em farmácias`} {...field} />
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Seja breve - depois detalhamos juntos</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="h-11 w-full font-semibold">
					Quero minha Proposta Grátis
				</Button>
			</form>
		</Form>
	)
}
