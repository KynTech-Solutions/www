"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export const ToggleModeButton = () => {
	const { setTheme, theme } = useTheme()

	function handleToggleTheme() {
		if (theme === "dark") {
			setTheme("light")
		} else if (theme === "light") {
			setTheme("dark")
		}
	}

	return (
		<Button variant="outline" size="icon" onClick={handleToggleTheme}>
			<Sun className="size-6 lg:size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute size-6 lg:size-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
