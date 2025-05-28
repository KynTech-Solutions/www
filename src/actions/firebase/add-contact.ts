"use server"

import { adminDb } from "@/lib/firebase"

interface ContactType {
	name: string
	email: string
	phone?: string | undefined
	idea?: string | undefined
}

export async function addContact(data: ContactType) {
	try {
		await adminDb.collection("contacts").add(data)

		return { success: true }
	} catch (error) {
		console.error("Erro ao enviar para o Firestore:", error)
		return { success: false }
	}
}
