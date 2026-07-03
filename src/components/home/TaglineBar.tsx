import Container from "@/components/ui/Container";

interface TaglineBarData {
  trustItems?: { label: string }[];
}

export default function TaglineBar({ data }: { data: TaglineBarData | null }) {
  const items = data?.trustItems;
  if (!items?.length) return null;

  return (
    <div style={{ background: "var(--rose)" }}>
      <Container className="py-3 flex items-center justify-center gap-6 flex-wrap max-[900px]:gap-3 max-[900px]:py-2.5">
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-6 max-[900px]:gap-3">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#5a3535] font-medium">
              {item.label}
            </span>
            {i < items.length - 1 && (
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: "rgba(90,53,53,0.4)" }}
              />
            )}
          </span>
        ))}
      </Container>
    </div>
  );
}
