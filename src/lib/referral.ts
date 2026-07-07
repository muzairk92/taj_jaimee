/**
 * Sets UTM parameters on an outbound partner URL so the destination site's
 * analytics can attribute the visit back to this site, regardless of whether
 * the browser sends a Referer header. Uses `set` (not string concatenation)
 * so it's idempotent — safe to call even if a CMS editor already added their
 * own utm params to the URL, without producing duplicate/conflicting params.
 */
export function withReferral(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("utm_source", "tanjimenezconsulting.com");
    parsed.searchParams.set("utm_medium", "referral");
    parsed.searchParams.set("utm_campaign", "partners_page");
    return parsed.toString();
  } catch {
    return url;
  }
}
