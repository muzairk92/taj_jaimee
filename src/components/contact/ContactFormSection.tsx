import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";

export interface ReasonsData {
  eyebrowText?: string;
  heading?: string;
  reasons?: { text?: string }[];
}

export interface FormData {
  interestOptions?: { label?: string }[];
  submitButtonText?: string;
}

interface ContactFormSectionProps {
  reasonsData: ReasonsData | null;
  formData: FormData | null;
}

export default function ContactFormSection({ reasonsData, formData }: ContactFormSectionProps) {
  const reasons = reasonsData?.reasons?.filter((r) => r.text) ?? [];
  const hasHeader = !!(reasonsData?.eyebrowText || reasonsData?.heading);

  return (
    <section id="contact-form" className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            {hasHeader && (
              <Reveal>
                {reasonsData?.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {reasonsData.eyebrowText}
                  </p>
                )}
                {reasonsData?.heading && (
                  <h2 className="font-playfair text-[26px] font-semibold text-[#3a2e28] leading-[1.3] mb-6">
                    {reasonsData.heading}
                  </h2>
                )}
              </Reveal>
            )}

            {reasons.length > 0 && (
              <div className="flex flex-col gap-3">
                {reasons.map((reason, i) => (
                  <Reveal
                    key={reason.text}
                    delay={i * 60}
                    className="flex items-center gap-4 rounded-[4px] px-5 py-3.5"
                    style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#b8924a] rounded-full shrink-0" />
                    <span className="text-[14px] font-medium text-[#3a2e28]">{reason.text}</span>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          <Reveal delay={150}>
            <ContactForm
              interestOptions={formData?.interestOptions?.map((o) => o.label).filter((l): l is string => !!l) ?? []}
              submitButtonText={formData?.submitButtonText}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
