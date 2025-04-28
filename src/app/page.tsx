import { Hero } from "@/components/hero"
import { SectionOne } from "@/components/sections/section-one"
import { SectionTwo } from "@/components/sections/section-two"

const Home = () => {
	return (
		<>
			<Hero />

			<div className="space-y-20">
				<SectionOne />
				<SectionTwo />
			</div>
		</>
	)
}

export default Home
