import type { MetadataRoute } from "next"

import { baseUrl } from "@/lib/constants"

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: "*",
			allow: "/"
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl
	}
}

export default robots
