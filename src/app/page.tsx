import { Hero } from "@/components/hero"
import { SectionOne } from "@/components/sections/section-one"
import { SectionTwo } from "@/components/sections/section-two"
import { FAQ } from "@/components/faq"

const Home = () => {
	return (
		<>
			<Hero />

			<div className="space-y-20">
				<SectionOne />

				<SectionTwo />

				<FAQ />
			</div>
		</>
	)
}

export default Home
