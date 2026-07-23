const HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
  mdash: "—",
  ndash: "–",
  hellip: "…",
};

// CMS text fields are expected to be plain text, but editors sometimes paste
// markup (e.g. copied straight from a design mockup) into them. Since those
// fields are rendered as plain text (not dangerouslySetInnerHTML), strip any
// tags and decode entities so raw markup never leaks onto the page.
export function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&(#(\d+)|[a-zA-Z]+);/g, (match, _entity, numeric) => {
      if (numeric) return String.fromCharCode(Number(numeric));
      const key = match.slice(1, -1);
      return HTML_ENTITIES[key] ?? match;
    })
    .trim();
}

export function deepStripHtml<T>(value: T): T {
  if (typeof value === "string") {
    return stripHtml(value) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepStripHtml(item)) as unknown as T;
  }
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = deepStripHtml(val);
    }
    return result as T;
  }
  return value;
}
