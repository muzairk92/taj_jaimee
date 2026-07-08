"use client";

import { useState } from "react";

const defaultInterestOptions = [
  "Strategic Consulting",
  "Partnerships",
  "Talent Advisory",
  "Technology Solutions",
  "Speaking / Collaboration",
  "Other",
];

const inputClasses =
  "w-full text-[14px] font-normal text-[#3a2e28] bg-white rounded-[4px] px-4 py-3 outline-none focus:border-[#b8924a] transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  interestOptions?: string[];
  submitButtonText?: string;
}

export default function ContactForm({ interestOptions, submitButtonText }: ContactFormProps) {
  const options = interestOptions && interestOptions.length > 0 ? interestOptions : defaultInterestOptions;
  const buttonText = submitButtonText || "Start a Strategic Conversation";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(options[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, interest, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setInterest(options[0]);
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] p-8 max-[900px]:p-6 flex flex-col gap-4"
      style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
    >
      <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
        <div>
          <label className="block text-[12px] font-semibold text-[#3a2e28] mb-1.5">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            style={{ border: "0.5px solid var(--border)" }}
          />
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-[#3a2e28] mb-1.5">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClasses}
            style={{ border: "0.5px solid var(--border)" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
        <div>
          <label className="block text-[12px] font-semibold text-[#3a2e28] mb-1.5">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
            style={{ border: "0.5px solid var(--border)" }}
          />
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-[#3a2e28] mb-1.5">Phone / WhatsApp</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
            style={{ border: "0.5px solid var(--border)" }}
          />
        </div>
      </div>

      <div>
        <label className="block text-[12px] font-semibold text-[#3a2e28] mb-1.5">What are you interested in?</label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputClasses}
          style={{ border: "0.5px solid var(--border)" }}
        >
          {options.map((option, i) => (
            <option key={`${option}-${i}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[12px] font-semibold text-[#3a2e28] mb-1.5">Message</label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-none`}
          style={{ border: "0.5px solid var(--border)" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-[#3a2e28] hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending…" : buttonText}
      </button>

      {status === "success" && (
        <p className="text-[13px] font-medium text-[#3a2e28]">
          Thank you — your message has been sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-[13px] font-medium text-[#8a3b3b]">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      )}
    </form>
  );
}
