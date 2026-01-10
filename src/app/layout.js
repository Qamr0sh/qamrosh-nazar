import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { generateMetadata, generatePersonSchema } from "@/lib/metadata";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Generate comprehensive SEO metadata
export const metadata = generateMetadata();

export default function RootLayout({ children }) {
  // Generate JSON-LD structured data for Person schema
  const personSchema = generatePersonSchema();

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
