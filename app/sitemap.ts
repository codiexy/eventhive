import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://evntix.com";

    // Public routes
    const routes = [
        "",
        "/events",
        "/about",
        "/contact",
        "/for-organisers",
        "/privacy-policy",
        "/terms-of-service",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: route === "" ? 1 : 0.8,
    }));
}
