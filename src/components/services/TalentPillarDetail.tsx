import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  context: string;
}

const clientFeedback: Testimonial = {
  quote:
    "In the face of challenges assembling a team for our new project in Oslo, Jaimee from SPERTON provided prompt and efficient support by presenting qualified candidates for the required positions. Her assistance contributed greatly to the successful outcomes we achieved in the project. We valued the professionalism, responsiveness and quality of support provided, and looked forward to building a long-term business partnership with SPERTON.",
  name: "Tomas Bairrao",
  role: "Organisation and Risk Manager, Steconfer Norway",
  context: "Client testimonial on recruitment advisory and candidate experience",
};

const candidateFeedback: Testimonial[] = [
  {
    quote:
      "Jaimee carefully studied my profile and supported me through a hiring process that led to my role at Hitachi Energy as Power Devices Engineering Manager. Her professionalism, guidance and understanding of candidate fit helped me find a job I truly value.",
    name: "Luigi Pellegrino",
    role: "Power Devices Engineering Manager, Hitachi Energy, Italy",
    context: "Professional feedback on recruitment advisory and candidate experience",
  },
  {
    quote:
      "Jaimee correctly matched my profile with the role Hitachi Energy was looking for and supported me throughout the hiring process with timely communication and professionalism. I felt continuously guided and accompanied, which made the experience very positive.",
    name: "José Papagni",
    role: "Electrical Project Lead Engineer, Hitachi Energy, Italy",
    context: "Professional feedback on recruitment advisory and candidate experience",
  },
  {
    quote:
      "Jaimee and her team provided constant support throughout my interview process with Hitachi Energy. They listened to my feedback, helped me stay aligned with my goals, and offered guidance on how to approach the opportunity with confidence. Their support helped me secure the role I was looking for.",
    name: "Giovanni Prestigiacomo",
    role: "Supplier Quality Engineer, Hitachi Energy, Italy",
    context: "Professional feedback on recruitment advisory and candidate experience",
  },
  {
    quote:
      "Jaimee has a strong ability to create trust and turn conversations into meaningful professional relationships. What stood out to me was her ability to understand context, connect people effectively and follow through with clarity and consistency. She combines relationship-building, business sense and reliable execution in a way that makes collaboration simple, effective and valuable.",
    name: "Michele Cocondi",
    role: "Manager, Global Project Management Office, Hitachi Energy",
    context: "Professional feedback on trust-building, relationship development and execution",
  },
];

const allTestimonials = [clientFeedback, ...candidateFeedback];

function QuoteCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="flex-1 min-w-[320px] max-w-[440px] bg-white rounded-[6px] p-7 flex flex-col hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(58,46,40,0.08)]"
      style={{ border: "0.5px solid var(--border)" }}
    >
      <span className="font-playfair text-[44px] text-[#b8924a] block leading-[0.7] mb-4 opacity-25 select-none">
        &ldquo;
      </span>
      <p className="font-cormorant italic font-normal text-[16px] text-[#3a2e28] leading-[1.75] mb-6 flex-1">
        {testimonial.quote}
      </p>
      <div className="pt-4" style={{ borderTop: "1px solid #c8b8a2" }}>
        <p className="text-sm font-semibold text-[#3a2e28]">{testimonial.name}</p>
        <p className="text-xs font-medium text-[#7b6b5a] mt-0.5">{testimonial.role}</p>
        <p className="text-[11px] font-normal text-[#7b6b5a] mt-1 italic">{testimonial.context}</p>
      </div>
    </Reveal>
  );
}

export default function TalentPillarDetail() {
  return (
    <section id="talent-advisory" style={{ background: "var(--linen)" }} className="scroll-mt-[68px]">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="text-center mb-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            Pillar Two
          </p>
          <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-3 max-w-[680px] mx-auto">
            Talent and Organisation Advisory
          </h2>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[640px] mx-auto">
            For recruitment strategy, leadership hiring, team structure, capability gaps and
            workforce planning.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="max-w-[760px] mx-auto bg-white rounded-[6px] p-8 mb-14"
          style={{ border: "0.5px solid var(--border)" }}
        >
          <h3 className="text-[17px] font-semibold text-[#3a2e28] mb-3">
            Talent, Training &amp; Organisation Development
          </h3>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] mb-6">
            We advise on recruitment strategy, leadership hiring, team structure, capability gaps
            and workforce planning for growth.
          </p>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-4">
            Jaimee&apos;s experience with Sperton Norway strengthened her expertise in business
            development, recruitment advisory and strategic client relationship management. Her
            work included supporting business growth and partnership development with
            international clients such as Hitachi Energy, where she gained valuable exposure to
            complex talent, commercial and operational needs across the energy sector.
          </p>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-4">
            This relationship later evolved into a research-focused collaboration through her
            master&apos;s thesis, which explored digitalisation, sustainability, lifecycle
            management and energy efficiency within Hitachi Energy Transformer Services. The
            experience gave her a deeper understanding of how people, technology and service
            innovation can support industrial growth and long-term sustainability.
          </p>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85]">
            Today, this blend of commercial experience, client partnership and research-backed
            insight shapes the advisory approach of Tan Jimenez Consulting — practical, strategic
            and focused on helping companies grow with clarity, capability and purpose.
          </p>
        </Reveal>

        <Reveal className="text-center mb-10">
          <h3 className="font-playfair text-[24px] font-semibold text-[#3a2e28] leading-[1.3] mb-3 max-w-[680px] mx-auto">
            Client and Candidate Feedback from Previous Talent Advisory Roles
          </h3>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[640px] mx-auto">
            These testimonials reflect Jaimee Tan Jimenez&apos;s previous professional work in
            recruitment, client support and talent advisory before founding Tan Jimenez
            Consulting.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {allTestimonials.map((testimonial, i) => (
            <QuoteCard key={testimonial.name} testimonial={testimonial} delay={i * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
}
