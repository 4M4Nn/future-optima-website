import type { Metadata } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import DemoClassNotification from "@/components/layout/DemoClassNotification";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import { siteConfig } from "@/lib/data/site";

// Same GTM container + Google tag already live on the WordPress production
// site (verified by fetching futureoptimaitsolutions.com and reading the
// embedded gtag.js/gtm.js script tags — not newly created). Carrying the
// exact same IDs over keeps GA4/GTM history continuous across the
// WordPress -> Next.js cutover. See SEO-MIGRATION-REPORT.md Section L.
const GTM_CONTAINER_ID = "GTM-PD2WDLQP";
const GOOGLE_TAG_ID = "GT-TWTT2Z4T";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Best IT & AI Institute in Kochi, Kerala`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "best IT institute in Kochi",
    "best AI institute in Kochi Kerala",
    "AI course Kochi",
    "AI course Kerala",
    "python full stack course Kochi",
    "python full stack course Kerala",
    "MERN stack course Kochi",
    "data science course Kochi Kerala",
    "data science with AI course Kerala",
    "software training institute Kochi",
    "software training institute Ernakulam",
    "IT training institute Chembumukku Kochi",
    "cybersecurity course Kochi Kerala",
    "agentic AI course Kerala",
    "AI engineering course Kochi",
    "software testing course Kochi",
    "job oriented IT courses Kerala",
    "placement guaranteed IT course Kochi",
    "IT institute near Chembumukku",
    "AI training institute Ernakulam",
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
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <DemoClassNotification />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
