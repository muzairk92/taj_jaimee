"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface HeroData {
  eyebrowText?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  backgroundImage?: { node?: { sourceUrl?: string; altText?: string } };
}

// ----------------------------------------------------
// Main Hero Section component (Slider version)
// ----------------------------------------------------

export default function HeroSection({ data }: { data: HeroData | null }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // References for timing
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideDuration = 8000; // 8 seconds per slide

  // Go to next slide
  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % 5);
    setProgress(0);
  }, []);

  // Go to previous slide
  const handlePrev = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + 5) % 5);
    setProgress(0);
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (isPlaying) {
      const step = 50; // Update every 50ms
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + (step / slideDuration) * 100;
        });
      }, step);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, handleNext]);

  // Click handler for indicators
  const handleSelectSlide = (idx: number) => {
    setActiveSlide(idx);
    setProgress(0);
  };

  // Click handler to toggle play/pause
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Merging CMS dynamic fields into Slide 1 text, if provided
  const slide1Eyebrow = data?.eyebrowText ?? "01 / 05 ABOUT TAN JIMENEZ CONSULTING";
  const slide1Heading = data?.heading ?? "Connecting markets, relationships and specialist expertise.";
  const slide1Subheading = data?.subheading ?? "";
  const slide1Desc =
    data?.description ??
    "A Norway-based international advisory firm helping ambitious companies turn growth opportunities into practical action through commercial direction, trusted partnerships and the right specialist capability.";
  const slide1BtnText = data?.primaryButtonText ?? "Discover Our Approach";
  const slide1BtnUrl = data?.primaryButtonUrl ?? "#about";

  // Slides configuration
  const slides = [
    {
      eyebrow: slide1Eyebrow,
      heading: slide1Heading,
      subheading: slide1Subheading,
      description: slide1Desc,
      buttonText: slide1BtnText,
      buttonUrl: slide1BtnUrl,
      bgImage: "/images/singapore_skyline_dusk.png",
    },
    {
      eyebrow: "02 / 05 HOW WE HELP",
      heading: "Growth requires strategy, capability and the right expertise.",
      description:
        "We support companies through three connected pillars—bringing the right adviser or specialist into each engagement.",
      buttonText: "Explore How We Help",
      buttonUrl: "#services",
      bgImage: "/images/abstract_strategy_bg.png",
    },
    {
      eyebrow: "03 / 05 OUR PARTNER ECOSYSTEM",
      heading: "One connected relationship. A world of specialist expertise.",
      description:
        "We bring together selected advisers, regional specialists and solution providers according to the client's requirements—with clearly defined responsibilities from strategy through implementation.",
      buttonText: "Explore the Ecosystem",
      buttonUrl: "#partners",
      bgImage: "/images/abstract_network_bg.png",
    },
    {
      eyebrow: "04 / 05 INSIGHTS & INTELLIGENCE",
      heading: "Evidence turns opportunity into better decisions.",
      description:
        "Explore perspectives on market expansion, strategic partnerships, organisational capability, responsible technology and digital sustainability.",
      buttonText: "Explore Insights",
      buttonUrl: "#insights",
      bgImage: "/images/abstract_insights_bg.png",
    },
    {
      eyebrow: "05 / 05 FOUNDER & RELATIONSHIP LEAD",
      heading: "Growth moves through trust, clarity and the right connections.",
      description:
        "Jaimee Tan Jimenez leads the firm's client and partner relationships—helping organisations understand the opportunity, shape commercial direction and connect with the advisers and specialists best suited to move the work forward.",
      buttonText: "Meet Jaimee",
      buttonUrl: "#founder",
      bgImage: "/images/abstract_founder_bg.png",
    },
  ];

  const currentSlide = slides[activeSlide];

  return (
    <section
      className="max-w-[1920px] mx-auto min-h-[660px] md:min-h-[720px] relative overflow-hidden flex flex-col justify-between py-12 md:py-20"
      style={{ background: "var(--midnight)" }}
    >
      {/* Dynamic Background Image Layer with Cross-fade Transition */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {slides.map((slide, idx) => {
          const isCurrent = activeSlide === idx;
          return (
            <div
              key={`bg-image-${idx}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? "opacity-90" : "opacity-0"
              }`}
            >
              <img
                src={slide.bgImage}
                alt=""
                className="w-full h-full object-cover object-center"
              />
              {/* Radial gradient vignette overlay to guarantee readability of overlayed left side text */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #0b1f1ce0 0%, #0b1f1c 35%, rgb(11 31 28 / 0%) 65%, rgb(11 31 28 / 0%) 100%), linear-gradient(to top, var(--midnight) 0%, transparent 20%)",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Main Slide Layout Container */}
      <div className="w-full max-w-[1600px] mx-auto px-16 max-[1280px]:px-12 max-[900px]:px-6 flex items-center flex-grow z-[2]">
        {/* Content Area */}
        <div key={`text-${activeSlide}`} className="w-full max-w-[640px] animate-fade-in-up">
          {currentSlide.eyebrow && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-5 font-semibold font-dm-sans">
              {currentSlide.eyebrow}
            </p>
          )}

          <h1 className="font-playfair text-[32px] md:text-[40px] font-semibold text-[#f0ebe0] leading-[1.15] mb-5">
            {currentSlide.heading}
            {currentSlide.subheading && (
              <em
                className="font-cormorant block leading-[1.2] mt-2 text-[#d4b06a]"
                style={{ fontStyle: "italic", fontSize: "36px" }}
              >
                {currentSlide.subheading}
              </em>
            )}
          </h1>

          {currentSlide.description && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.85] mb-8 max-w-[460px] font-dm-sans">
              {currentSlide.description}
            </p>
          )}

          {/* Special element for Slide 5: blockquote quote block */}
          {activeSlide === 4 && (
            <div className="border-l-2 border-[#b8924a] pl-4 py-1 mb-8 max-w-[460px]">
              <p className="text-[14px] font-normal italic text-[#d4b06a] leading-[1.6]">
                "My role is to understand the opportunity, shape the direction and connect the right expertise."
              </p>
            </div>
          )}

          <div className="flex gap-3 items-center flex-wrap">
            {currentSlide.buttonText && currentSlide.buttonUrl && (
              <a
                href={currentSlide.buttonUrl}
                className="border border-[#b8924a] text-[#f2ebe0] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] bg-[rgba(184,146,74,0.15)] hover:bg-[#b8924a] hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 inline-block shadow-sm"
              >
                {currentSlide.buttonText}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
          Bottom Navigation Controls
          ---------------------------------------------------- */}
      <div className="w-full max-w-[1600px] mx-auto px-16 max-[1280px]:px-12 max-[900px]:px-6 mt-12 z-10 flex items-center justify-between font-dm-sans border-t border-[rgba(240,235,224,0.1)] pt-6 select-none">
        {/* Left Manual Arrow */}
        <button
          onClick={handlePrev}
          className="w-8 h-8 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-all duration-300 active:scale-95"
          aria-label="Previous Slide"
        >
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path
              d="M5 9L1 5L5 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dynamic Track Slide Indicators */}
        <div className="flex items-center gap-6 md:gap-10 grow justify-center px-4 max-w-[60%]">
          {[0, 1, 2, 3, 4].map((idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectSlide(idx)}
                className="group flex items-center gap-2 text-left focus:outline-none"
              >
                {/* Active index displays as bright champagne/gold (#d4b06a) */}
                <span
                  className={`text-[11px] font-bold tracking-wider leading-none transition-colors duration-300 ${
                    isActive ? "text-[#d4b06a] drop-shadow-[0_0_8px_rgba(212,176,106,0.5)]" : "text-white/45 group-hover:text-white/80"
                  }`}
                >
                  {`0${idx + 1}`}
                </span>

                {/* Horizontal Progress line bar */}
                <div className="w-8 md:w-16 h-[2px] bg-white/15 rounded-full overflow-hidden relative hidden sm:block">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#d4b06a] transition-all"
                    style={{
                      width: isActive ? `${progress}%` : "0%",
                      transitionDuration: isActive && progress > 0 ? "50ms" : "0ms",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Manual Arrow & Play/Pause */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-all duration-300 active:scale-95"
            aria-label="Next Slide"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-all duration-300 active:scale-95 ml-1"
            aria-label={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
          >
            {isPlaying ? (
              // Pause Icon (||)
              <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                <rect x="0" width="2.5" height="10" rx="0.5" fill="currentColor" />
                <rect x="5.5" width="2.5" height="10" rx="0.5" fill="currentColor" />
              </svg>
            ) : (
              // Play Icon (triangle)
              <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                <path d="M1 1.5L7 5L1 8.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
