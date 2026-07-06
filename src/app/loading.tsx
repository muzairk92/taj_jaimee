export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center" style={{ background: "var(--linen)" }}>
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-11 h-11 rounded-full animate-spin"
          style={{
            border: "2px solid rgba(184,146,74,0.2)",
            borderTopColor: "#b8924a",
          }}
        />
        <span className="text-[11px] tracking-[0.22em] uppercase text-[#7b6b5a] font-medium">
          Loading
        </span>
      </div>
    </div>
  );
}
