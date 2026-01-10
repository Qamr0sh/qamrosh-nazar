// Dynamic sitemap for Qamrosh Nazar Portfolio
// Helps search engines discover and index all pages

export default function sitemap() {
    const baseUrl = "https://qamrosh-nazar.netlify.app"; // Update with your actual domain
    const currentDate = new Date().toISOString();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}#about`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}#skills`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}#projects`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}#contact`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
