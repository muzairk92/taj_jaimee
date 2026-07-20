"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface SlideImage {
  node?: { sourceUrl?: string; altText?: string };
}

interface Slide {
  image?: SlideImage;
  videoUrl?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  caption?: string;
  altText?: string;
  linkUrl?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

interface SliderConfig {
  autoplay?: boolean;
  autoplaySpeed?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
}

export interface DynamicSliderData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  slides?: Slide[];
  sliderConfig?: SliderConfig;
}

export default function DynamicSlider({ data }: { data: DynamicSliderData | null }) {
  const slides = data?.slides?.filter((s) => s.image?.node?.sourceUrl || s.videoUrl || s.heading) ?? [];
  const config = data?.sliderConfig ?? {};
  const autoplay = config.autoplay ?? true;
  const autoplaySpeed = config.autoplaySpeed && config.autoplaySpeed > 0 ? config.autoplaySpeed : 8000;
  const showPagination = config.showPagination ?? true;
  const showNavigation = config.showNavigation ?? true;
  const loop = config.loop ?? true;

  const count = slides.length;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [progress, setProgress] = useState(0);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => {
      if (prev + 1 < count) return prev + 1;
      return loop ? 0 : prev;
    });
    setProgress(0);
  }, [count, loop]);

  const handlePrev = useCallback(() => {
    setActiveSlide((prev) => {
      if (prev - 1 >= 0) return prev - 1;
      return loop ? count - 1 : prev;
    });
    setProgress(0);
  }, [count, loop]);

  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (isPlaying && count > 1) {
      const step = 50;
      let elapsed = 0;
      progressIntervalRef.current = setInterval(() => {
        elapsed += step;
        const pct = (elapsed / autoplaySpeed) * 100;
        if (pct >= 100) {
          handleNext();
        } else {
          setProgress(pct);
        }
      }, step);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, handleNext, autoplaySpeed, count, activeSlide]);

  const handleSelectSlide = (idx: number) => {
    setActiveSlide(idx);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  if (count === 0) return null;

  const currentSlide = slides[activeSlide];
  const isFirst = activeSlide === 0;
  const isLast = activeSlide === count - 1;

  return (
    <section
      className="max-w-[1920px] mx-auto min-h-[660px] md:min-h-[720px] relative overflow-hidden flex flex-col justify-between py-12 md:py-20"
      style={{ background: "var(--midnight)" }}
    >
      {/* Background Layer with Cross-fade */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {slides.map((slide, idx) => {
          const isCurrent = activeSlide === idx;
          const imgSrc = slide.image?.node?.sourceUrl;
          return (
            <div
              key={`bg-${idx}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? "opacity-90" : "opacity-0"
              }`}
            >
              {slide.videoUrl ? (
                <video
                  src={slide.videoUrl}
                  poster={imgSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              ) : imgSrc ? (
                <img
                  src={imgSrc}
                  alt={slide.altText ?? slide.image?.node?.altText ?? ""}
                  className="w-full h-full object-cover object-center"
                />
              ) : null}
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
        <div key={`text-${activeSlide}`} className="w-full max-w-[640px] animate-fade-in-up">
          {currentSlide.caption && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-5 font-semibold font-dm-sans">
              {currentSlide.caption}
            </p>
          )}

          {currentSlide.heading && (
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
          )}

          {currentSlide.description && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.85] mb-8 max-w-[460px] font-dm-sans">
              {currentSlide.description}
            </p>
          )}

          <div className="flex gap-3 items-center flex-wrap">
            {currentSlide.primaryButtonText && (currentSlide.primaryButtonUrl || currentSlide.linkUrl) && (
              <a
                href={currentSlide.primaryButtonUrl ?? currentSlide.linkUrl}
                className="border border-[#b8924a] text-[#f2ebe0] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] bg-[rgba(184,146,74,0.15)] hover:bg-[#b8924a] hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 inline-block shadow-sm"
              >
                {currentSlide.primaryButtonText}
              </a>
            )}
            {currentSlide.secondaryButtonText && currentSlide.secondaryButtonUrl && (
              <a
                href={currentSlide.secondaryButtonUrl}
                className="border border-white/25 text-[#f2ebe0] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-block"
              >
                {currentSlide.secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      {count > 1 && (showNavigation || showPagination) && (
        <div className="w-full max-w-[1600px] mx-auto px-16 max-[1280px]:px-12 max-[900px]:px-6 mt-12 z-10 flex items-center justify-between font-dm-sans border-t border-[rgba(240,235,224,0.1)] pt-6 select-none">
          {showNavigation && (
            <button
              onClick={handlePrev}
              disabled={!loop && isFirst}
              className="w-8 h-8 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
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
          )}

          {showPagination && (
            <div className="flex items-center gap-6 md:gap-10 grow justify-center px-4 max-w-[60%]">
              {slides.map((_, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlide(idx)}
                    className="group flex items-center gap-2 text-left focus:outline-none"
                  >
                    <span
                      className={`text-[11px] font-bold tracking-wider leading-none transition-colors duration-300 ${
                        isActive
                          ? "text-[#d4b06a] drop-shadow-[0_0_8px_rgba(212,176,106,0.5)]"
                          : "text-white/45 group-hover:text-white/80"
                      }`}
                    >
                      {`0${idx + 1}`}
                    </span>

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
          )}

          {showNavigation && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleNext}
                disabled={!loop && isLast}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
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

              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-white/60 transition-all duration-300 active:scale-95 ml-1"
                aria-label={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isPlaying ? (
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                    <rect x="0" width="2.5" height="10" rx="0.5" fill="currentColor" />
                    <rect x="5.5" width="2.5" height="10" rx="0.5" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                    <path
                      d="M1 1.5L7 5L1 8.5Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
