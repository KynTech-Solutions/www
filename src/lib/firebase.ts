import { initializeApp, getApps, getApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const serviceAccount = {
	projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
	clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
	privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n")
}

if (getApps().length === 0) {
	initializeApp({
		credential: cert(serviceAccount),
		projectId: serviceAccount.projectId
	})
}

const adminDb = getFirestore()

export { adminDb }
