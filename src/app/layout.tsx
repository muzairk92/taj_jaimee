import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import client from "@/lib/apollo/client";
import { GET_THEME_SETTINGS } from "@/lib/graphql/theme.queries";

const DEFAULT_DESCRIPTION =
  "Tan Jimenez Consulting helps ambitious companies grow across markets, partnerships, people and technology through founder-led advisory and a trusted global partner ecosystem.";

interface ThemeGlobals {
  metaDescription?: string;
  headerScripts?: string;
  footerScripts?: string;
}

async function fetchThemeGlobals(): Promise<ThemeGlobals | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_THEME_SETTINGS, fetchPolicy: "no-cache" })
    .then(({ data }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fields = (data as any)?.themeSettings?.themeSettingsFields;
      return {
        metaDescription: fields?.description?.metaDescription,
        headerScripts: fields?.scripts?.headerScripts,
        footerScripts: fields?.scripts?.footerScripts,
      };
    })
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

interface ParsedScript {
  src?: string;
  inline?: string;
}

// CMS "scripts" fields may hold a bare JS snippet, an inline <script>...</script>
// block, or a <script src="..."> tag pointing at an external file — handle all three,
// tolerating minor malformed HTML (missing/mismatched closing tags, stray quotes).
function parseThemeScript(raw?: string | null): ParsedScript | null {
  if (!raw || !raw.trim()) return null;
  const trimmed = raw.trim();

  const srcMatch = trimmed.match(/<script[^>]*\ssrc=["']([^"']+)["']/i);
  if (srcMatch) return { src: srcMatch[1] };

  const bodyMatch = trimmed.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  const inline = (bodyMatch ? bodyMatch[1] : trimmed.replace(/<\/?script[^>]*>/gi, "")).trim();
  return inline ? { inline } : null;
}

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const globals = await fetchThemeGlobals();

  return {
    title: "Tan Jimenez Consulting — Strategy · Partnerships · Growth",
    description: globals?.metaDescription || DEFAULT_DESCRIPTION,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globals = await fetchThemeGlobals();
  const headerScript = parseThemeScript(globals?.headerScripts);
  const footerScript = parseThemeScript(globals?.footerScripts);

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body>
        {headerScript?.src && <Script id="theme-header-script" src={headerScript.src} strategy="beforeInteractive" />}
        {headerScript?.inline && (
          <Script
            id="theme-header-script-inline"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: headerScript.inline }}
          />
        )}
        <Nav />
        {children}
        <Footer />
        {footerScript?.src && <Script id="theme-footer-script" src={footerScript.src} strategy="afterInteractive" />}
        {footerScript?.inline && (
          <Script
            id="theme-footer-script-inline"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: footerScript.inline }}
          />
        )}
      </body>
    </html>
  );
}
