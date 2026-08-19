import type { Metadata } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import IntroLoader from "@/components/motion/IntroLoader";
import { siteConfig } from "@/lib/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://future-optima-website.vercel.app"),
  title: {
    default: `${siteConfig.name} — Best IT & AI Institute in Kochi, Kerala`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "best IT institute in Kochi",
    "best AI institute Kerala",
    "AI course Kochi",
    "python full stack course Kochi",
    "data science course Kerala",
    "software training institute Kochi",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Best IT & AI Institute in Kochi, Kerala`,
    description: siteConfig.description,
    images: ["/images/brand/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Best IT & AI Institute in Kochi, Kerala`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/brand/logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    postalCode: "682021",
    addressCountry: "IN",
  },
  telephone: siteConfig.primaryPhone,
  email: siteConfig.email,
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <IntroLoader />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
