// SEO Metadata Configuration for Qamrosh Portfolio
// Centralized metadata for consistent SEO across the site

export const siteConfig = {
  name: "Qamrosh Ali Nazar",
  shortName: "Qamrosh",
  title: "Qamrosh Nazar - Mobile App Developer & Software Engineer",
  description: "Qamrosh Ali Nazar is a passionate Flutter developer and software engineer specializing in cross-platform mobile apps, IoT systems, and modern web solutions. Expert in clean architecture and SOLID principles.",
  url: "https://qamrosh-nazar.netlify.app", // Update with your actual domain
  ogImage: "/images/profile_image.png",
  author: {
    name: "Qamrosh Ali Nazar",
    alternateName: "Qamrosh Nazar",
    jobTitle: "Mobile App Developer & Software Engineer",
    email: "qamroshnazar@gmail.com", // Update with your actual email
    phone: "+923168661932",
    location: "Pakistan", // Update if needed
  },
  social: {
    linkedin: "https://www.linkedin.com/in/qamr0sh/",
    instagram: "https://www.instagram.com/qamr0sh/",
    facebook: "https://www.facebook.com/profile.php?id=100012883470553",
    pinterest: "https://www.pinterest.com/QamroshNazar/",
    discord: "https://discord.com/users/1098012603005009951",
    telegram: "http://t.me/qamr0sh",
    whatsapp: "https://wa.me/923168661932",
  },
  keywords: [
    "Qamrosh",
    "Qamrosh Nazar",
    "Qamrosh Ali Nazar",
    "Mobile App Developer",
    "Flutter Developer",
    "Software Engineer",
    "Cross-platform Development",
    "IoT Developer",
    "Full Stack Developer",
    "Pakistan Software Engineer",
    "Mobile Application Developer",
    "Clean Architecture",
    "SOLID Principles",
    "UI/UX Design",
    "Smart Home Automation",
  ],
};

// Generate JSON-LD structured data for Person schema
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    alternateName: siteConfig.author.alternateName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    email: siteConfig.author.email,
    telephone: siteConfig.author.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.author.location,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.pinterest,
      siteConfig.social.telegram,
    ],
    knowsAbout: [
      "Flutter Development",
      "Mobile Application Development",
      "Software Engineering",
      "IoT Systems",
      "Web Development",
      "UI/UX Design",
      "Clean Architecture",
      "Cross-platform Development",
    ],
  };
}

// Generate metadata for Next.js
export function generateMetadata() {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.author.name} - ${siteConfig.author.jobTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@qamr0sh", // Update with your Twitter handle if you have one
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/signature.svg",
      shortcut: "/signature.svg",
      apple: "/signature.svg",
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "your-google-verification-code", // Add after setting up Google Search Console
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    },
  };
}
