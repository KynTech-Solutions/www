import type { MetadataRoute } from "next"

import { baseUrl } from "@/lib/constants"

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1
		}
	]
}

export default sitemap
