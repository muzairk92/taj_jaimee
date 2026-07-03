"use client";

import { useState } from "react";

interface NavItem {
  label: string;
  url: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  ctaText: string;
  ctaUrl: string;
}

export default function MobileMenu({ navItems, ctaText, ctaUrl }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden max-[992px]:flex items-center">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[110] relative focus:outline-none cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[2px] bg-[#b8924a] transition-all duration-300 ease-out ${
            isOpen ? "transform rotate-45 translate-y-[8px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-[#b8924a] transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-[#b8924a] transition-all duration-300 ease-out ${
            isOpen ? "transform -rotate-45 translate-y-[-8px]" : ""
          }`}
        />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[105] bg-[#0b1f1c]/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 px-6 animate-drawer-in">
          {navItems.map((link, i) => (
            <a
              key={link.label}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-[0.15em] uppercase text-[#b8924a] hover:text-white transition-colors animate-drawer-item"
              style={{ animationDelay: `${i * 60 + 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaUrl}
            onClick={() => setIsOpen(false)}
            className="bg-[#b8924a] text-[#0b1f1c] text-sm font-semibold tracking-[0.1em] uppercase px-8 py-3.5 rounded-[2px] hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.05] active:scale-[0.96] transition-all duration-300 mt-4 animate-drawer-item"
            style={{ animationDelay: `${navItems.length * 60 + 80}ms` }}
          >
            {ctaText}
          </a>
        </div>
      )}
    </div>
  );
}
