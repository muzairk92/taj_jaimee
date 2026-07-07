import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const audiences = [
  "Companies entering new markets",
  "Technology and sustainability firms seeking commercial growth",
  "SMEs that need strategy, structure and partnerships",
  "International companies exploring Norway, Europe or Asia",
  "Organisations that need talent, technology and execution support",
];

export default function WhoWeHelpSection() {
  return (
    <section style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
              Who We Help
            </p>
            <h2 className="font-playfair text-[30px] font-semibold text-[#f0ebe0] leading-[1.25]">
              We are best suited for:
            </h2>
          </Reveal>

          <div className="flex flex-col gap-3">
            {audiences.map((audience, i) => (
              <Reveal
                key={audience}
                delay={i * 80}
                className="flex items-center gap-4 rounded-[4px] px-5 py-3.5 hover:bg-[rgba(240,235,224,0.07)]"
                style={{
                  background: "rgba(240,235,224,0.04)",
                  border: "0.5px solid rgba(240,235,224,0.1)",
                }}
              >
                <div className="w-1.5 h-1.5 bg-[#b8924a] rounded-full shrink-0" />
                <span className="text-[14px] font-normal text-[rgba(240,235,224,0.75)]">{audience}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
