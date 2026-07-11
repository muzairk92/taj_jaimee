import client from "@/lib/apollo/client";
import { GET_THEME_SETTINGS } from "@/lib/graphql/theme.queries";
import SocialIcon from "@/components/ui/SocialIcon";

interface FooterColumn {
  columnTitle?: string;
  links?: { label: string; url: string }[];
}

interface FooterData {
  companyName?: string;
  tagline?: string;
  closerText?: string;
  footerColumns?: FooterColumn[];
  contactEmail?: string;
  contactLocation?: string;
  copyrightText?: string;
  linkedin?:string;
  facebook?:string;
  x?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  threads?: string;
  pinterest?: string;
}

async function fetchFooterData(): Promise<FooterData | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;

  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));

  const fetch = client
    .query({ query: GET_THEME_SETTINGS, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.themeSettings?.themeSettingsFields?.footer ?? null)
    .catch(() => null);

  return Promise.race([fetch, timeout]);
}

export default async function Footer() {
  const footer = await fetchFooterData();

  const companyName = footer?.companyName ?? "Tan Jimenez Consulting";
  const tagline = footer?.tagline ?? "Strategy · Growth · Impact";
  const closerText = footer?.closerText ?? "We help ambitious companies turn complexity into direction, opportunity into execution, and growth into lasting impact."
  const footerColumns = footer?.footerColumns ?? [];
  const contactEmail = footer?.contactEmail ?? "hello@tanjimenezconsulting.com";
  const contactLocation = footer?.contactLocation ?? "Kongsberg, Norway";
  const copyrightText = footer?.copyrightText ?? "© 2025 Tan Jimenez Consulting. All rights reserved.";
  const socialLinks = [
    { label: "LinkedIn", icon: "linkedin", url: footer?.linkedin },
    { label: "Facebook", icon: "facebook", url: footer?.facebook },
    { label: "X", icon: "x", url: footer?.x },
    { label: "Instagram", icon: "instagram", url: footer?.instagram },
    { label: "YouTube", icon: "youtube", url: footer?.youtube },
    { label: "TikTok", icon: "tiktok", url: footer?.tiktok },
    { label: "Threads", icon: "threads", url: footer?.threads },
    { label: "Pinterest", icon: "pinterest", url: footer?.pinterest },
  ].filter(
    (social): social is { label: string; icon: Parameters<typeof SocialIcon>[0]["name"]; url: string } =>
      !!social.url
  );

  const gridCols = `1.5fr ${footerColumns.length > 0 ? footerColumns.map(() => '1fr').join(' ') + ' ' : ''}1fr`;

  return (
    <footer style={{ background: "var(--midnight)" }}>
      <div className="max-w-[1600px] mx-auto px-16 max-[1280px]:px-12 max-[900px]:px-6 pt-14 pb-8">
        <div
          className="footer-grid grid gap-12 mb-10 max-[900px]:gap-8"
          style={{ "--footer-cols": gridCols } as React.CSSProperties}
        >
          {/* Brand */}
          <div>
            <span className="block font-playfair text-xl text-[#f0ebe0] tracking-[0.03em] mb-1">
              {companyName}
            </span>
            <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#b8924a] mb-4">
              {tagline}
            </span>
            <p className="font-cormorant font-semibold  text-[rgba(212,176,106,0.7)] leading-[1.7] max-w-[280px]">
              Strategy with clarity.
              <br/>
              Growth with execution.
              <br />
              Leadership with impact.
              <br />
            </p>
            <p className="text-sm text-[rgba(240,235,224,0.65)] w-80 mt-5">{closerText}</p>
          </div>

          {/* Footer Columns */}
          {footerColumns.length > 0 ? (
            footerColumns.map((column, index) => (
              <div key={index}>
                {column.columnTitle && (
                  <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[rgba(240,235,224,0.45)] mb-5">
                    {column.columnTitle}
                  </span>
                )}
                {column.links && column.links.length > 0 && (
                  <div className="flex flex-col gap-2.5">
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="text-sm font-medium text-[rgba(240,235,224,0.65)] hover:text-white transition-colors block"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[rgba(240,235,224,0.45)] mb-5">
                Navigate
              </span>
              <div className="flex flex-col gap-2.5">
                {["About", "Services", "Partners", "Insights", "Contact"].map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className="text-sm font-medium text-[rgba(240,235,224,0.65)] hover:text-white transition-colors block"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Contact - Always show */}
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[rgba(240,235,224,0.45)] mb-5">
              Get in touch
            </span>
            <a
              href={`mailto:${contactEmail}`}
              className="block text-sm font-medium text-[rgba(240,235,224,0.65)] hover:text-white transition-colors mb-2"
            >
              {contactEmail}
            </a>
            <span className="block text-sm font-medium text-[rgba(240,235,224,0.65)] mb-2">
              {contactLocation}
            </span>
            
          </div>
        </div>

        <div
          className="pt-5 flex justify-between items-center max-[640px]:flex-col max-[640px]:gap-3 max-[640px]:items-start"
          style={{ borderTop: "0.5px solid rgba(240,235,224,0.1)" }}
        >
          <span className="text-xs text-[rgba(240,235,224,0.35)]">
            {copyrightText}
          </span>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase text-[rgba(240,235,224,0.45)] hover:text-[#b8924a] transition-colors"
              >
                <SocialIcon name={social.icon} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
