import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CapabilityDeckSection() {
  return (
    <section className="relative overflow-hidden text-center" style={{ background: "var(--midnight)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,146,74,0.07) 0%, transparent 70%)",
        }}
      />
      <Container className="py-20 max-[900px]:py-14 relative">
        <Reveal className="max-w-[760px] mx-auto">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            Capability Deck
          </p>
          <h2 className="font-playfair text-[26px] font-semibold text-[#f0ebe0] leading-[1.3] mb-3">
            Professional Track Record and Testimonials
          </h2>
          <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.8] mb-10">
            The following feedback reflects Jaimee Tan Jimenez&apos;s professional contribution
            across previous roles, client engagements, candidate advisory, leadership
            collaboration and international business development work.
          </p>

          <div
            className="rounded-[6px] p-8 text-left"
            style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
          >
            <span className="font-playfair text-[44px] text-[#b8924a] block leading-[0.7] mb-4 opacity-30 select-none">
              &ldquo;
            </span>
            <p className="font-cormorant italic font-semibold text-[18px] text-[#f0ebe0] leading-[1.75] mb-6">
              Jaimee played an instrumental role in developing the Hitachi Energy account across
              Europe and the United States during her time with Sperton Global. She contributed to
              the strategic direction of the account, supported the development of a global key
              account approach, and helped translate client requirements into clear recruitment
              priorities for the delivery team.
            </p>
            <p className="font-cormorant italic font-semibold text-[18px] text-[#f0ebe0] leading-[1.75] mb-6">
              Her ability to combine strategic thinking, client understanding and execution
              discipline made her a valuable contributor to the growth of the account. Jaimee
              demonstrated strong leadership, commercial awareness and the ability to align
              international stakeholders around a shared growth objective.
            </p>
            <p className="text-[13px] font-semibold text-[#d4b06a]">
              Former Partner, Sperton Global AS
              <br />
              <span className="font-normal text-[rgba(240,235,224,0.6)]">On strategic account growth</span>
            </p>
          </div>

          <a
            href="mailto:hello@tanjimenezconsulting.com"
            className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 mt-10"
          >
            Request Our Capability Profile
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
