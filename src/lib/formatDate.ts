// ACF date_picker fields can come back as "Ymd" (e.g. "20260315") or an ISO-ish
// string depending on the field's Return Format setting — handle both.
export function formatInsightDate(value?: string | null): string | null {
  if (!value) return null;

  let date: Date;
  if (/^\d{8}$/.test(value)) {
    const year = value.slice(0, 4);
    const month = value.slice(4, 6);
    const day = value.slice(6, 8);
    date = new Date(`${year}-${month}-${day}`);
  } else {
    date = new Date(value);
  }

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
