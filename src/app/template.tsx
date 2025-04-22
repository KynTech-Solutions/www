"use client"

import { useMounted } from "@/hooks/use-mounted"
import { motion } from "motion/react"
import type { ComponentProps } from "react"

const RootTemplate = ({ children }: ComponentProps<"div">) => {
	const isMounted = useMounted()

	if (!isMounted) {
		return <>{children}</>
	}

	return (
		<motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.7 }}>
			{children}
		</motion.div>
	)
}

export default RootTemplate
