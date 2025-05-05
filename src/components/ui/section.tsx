"use client"

import { type HTMLMotionProps, motion } from "motion/react"
import type { ComponentProps } from "react"

// Variants reutilizáveis
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.3 }
	}
}

const cardVariants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 120 }
	}
}

const iconVariants = {
	normal: { scale: 1 },
	hover: {
		y: [0, -5, 0],
		scale: [1, 1.1, 1],
		transition: {
			duration: 1.5,
			repeat: Number.POSITIVE_INFINITY
		}
	}
}

// SectionContainer
export const SectionContainer = ({ children, className, ...props }: HTMLMotionProps<"section">) => {
	return (
		<motion.section
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
			{...props}
		>
			{children}
		</motion.section>
	)
}

// SectionHeader
export const SectionHeader = ({ children, className }: ComponentProps<"div">) => {
	return (
		<motion.div className={className} variants={cardVariants}>
			{children}
		</motion.div>
	)
}

// SectionTitle
export const SectionTitle = ({ children, className }: ComponentProps<"h2">) => {
	return (
		<motion.h2 className={className} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
			{children}
		</motion.h2>
	)
}

// SectionDescription
export const SectionDescription = ({ children, className }: ComponentProps<"p">) => {
	return (
		<motion.p className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
			{children}
		</motion.p>
	)
}

// SectionSeparator
export const SectionSeparator = () => (
	<motion.div
		className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent my-8"
		initial={{ scaleX: 0 }}
		whileInView={{ scaleX: 1 }}
		transition={{ duration: 2 }}
	/>
)

// SectionContent
export const SectionContent = ({ children, className }: ComponentProps<"div">) => {
	return (
		<motion.div className={className} variants={containerVariants}>
			{children}
		</motion.div>
	)
}

// SectionCardRoot
export const SectionCardRoot = ({ children, className }: ComponentProps<"div">) => {
	return (
		<motion.div className={className} variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
			{children}
		</motion.div>
	)
}

// SectionCardIcon
export const SectionCardIcon = ({ children, className }: ComponentProps<"div">) => {
	return (
		<motion.div className={className} whileHover={{ rotate: 15, scale: 1.1 }} variants={iconVariants}>
			{children}
		</motion.div>
	)
}
