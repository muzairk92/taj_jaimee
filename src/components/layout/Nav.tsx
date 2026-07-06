import client from "@/lib/apollo/client";
import { GET_THEME_SETTINGS } from "@/lib/graphql/theme.queries";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export interface NavItem {
  label: string;
  url: string;
  subItems?: { label: string; url: string }[];
}

interface HeaderData {
  logo?: { node?: { sourceUrl?: string; altText?: string } };
  navItems?: NavItem[];
  ctaText?: string;
  ctaUrl?: string;
}

async function fetchHeaderData(): Promise<HeaderData | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;

  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));

  const fetch = client
    .query({ query: GET_THEME_SETTINGS, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.themeSettings?.themeSettingsFields?.header ?? null)
    .catch(() => null);

  return Promise.race([fetch, timeout]);
}

export default async function Nav() {
  const header = await fetchHeaderData();

  const navItems = header?.navItems ?? [];
  const ctaText = header?.ctaText ?? "Start a Conversation";
  const ctaUrl = header?.ctaUrl ?? "#contact";
  const logoSrc = header?.logo?.node?.sourceUrl ?? null;
  const logoAlt = header?.logo?.node?.altText ?? "Tan Jimenez Consulting";

  return (
    <nav
      className="h-[68px] sticky top-0 z-[100] border-b border-[rgba(184,146,74,0.15)]"
      style={{ background: "var(--midnight)" }}
    >
      <div className="max-w-[1600px] mx-auto px-16 max-[1280px]:px-12 max-[992px]:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-9 w-auto object-contain"
            />
          ) : (
            <>
              <div className="w-9 h-9 border border-[#b8924a] rounded-[2px] flex items-center justify-center">
                <span className="font-playfair italic text-base text-[#b8924a]">TJ</span>
              </div>
              <div>
                <span className="block text-sm font-semibold tracking-[0.08em] uppercase text-[#f0ebe0] leading-[1.1]">
                  Tan Jimenez
                </span>
                <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#b8924a] mt-[2px]">
                  Consulting
                </span>
              </div>
            </>
          )}
        </Link>

        {/* Desktop Links + CTA */}
        <div className="flex items-center gap-7 max-[992px]:hidden">
          {navItems.map((link) => {
            const hasSubItems = !!link.subItems?.length;

            return (
              <div key={link.label} className="relative group">
                <a
                  href={link.url}
                  className="flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] uppercase text-[#b8924a] hover:text-white transition-colors py-2"
                >
                  {link.label}
                  {hasSubItems && (
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className="shrink-0 transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>

                {hasSubItems && (
                  // Bridges the visual gap between the link and dropdown panel so the
                  // hover state doesn't drop while the cursor crosses that empty space.
                  <div className="absolute left-0 top-full pt-2 w-max">
                    <div
                      className="min-w-[190px] rounded-[4px] py-2 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200"
                      style={{
                        background: "var(--forest)",
                        border: "1px solid rgba(184,146,74,0.2)",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                      }}
                    >
                      {link.subItems!.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.url}
                          className="block px-4 py-2.5 text-xs font-medium tracking-[0.06em] uppercase text-[rgba(240,235,224,0.75)] hover:text-white hover:bg-[rgba(240,235,224,0.06)] transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <a
            href={ctaUrl}
            className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-[2px] hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.05] active:scale-[0.96] transition-all duration-300 whitespace-nowrap"
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu (visible <= 992px) */}
        <MobileMenu navItems={navItems} ctaText={ctaText} ctaUrl={ctaUrl} />
      </div>
    </nav>
  );
}
