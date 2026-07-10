"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Category {
  title?: string;
  description?: string;
}

export interface CategoriesData {
  eyebrowText?: string;
  heading?: string;
  categories?: Category[];
}

interface InsightNode {
  slug?: string;
  title?: string;
  insightFields?: {
    category?: string;
    subtitle?: string;
    author?: string;
    readTime?: string;
  };
}

interface InsightsExplorerProps {
  categoriesData: CategoriesData | null;
  insights: InsightNode[];
}

function normalize(value?: string) {
  return (value ?? "").trim().toLowerCase();
}

export default function InsightsExplorer({ categoriesData, insights }: InsightsExplorerProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const categories = categoriesData?.categories?.filter((c) => c.title) ?? [];
  const hasHeader = !!(categoriesData?.eyebrowText || categoriesData?.heading);

  const filteredInsights = selected
    ? insights.filter((node) => normalize(node.insightFields?.category) === normalize(selected))
    : insights;

  return (
    <>
      {(hasHeader || categories.length > 0) && (
        <section style={{ background: "var(--rose)" }}>
          <Container className="py-20 max-[900px]:py-14">
            {hasHeader && (
              <Reveal className="text-center mb-12">
                {categoriesData?.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {categoriesData.eyebrowText}
                  </p>
                )}
                {categoriesData?.heading && (
                  <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                    {categoriesData.heading}
                  </h2>
                )}
              </Reveal>
            )}

            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-5">
                {categories.map((category, i) => {
                  const isActive = normalize(selected ?? undefined) === normalize(category.title);
                  return (
                    <Reveal key={category.title} delay={i * 60} className="flex-1 min-w-[260px] max-w-[320px]">
                      <button
                        type="button"
                        onClick={() => setSelected(isActive ? null : (category.title as string))}
                        aria-pressed={isActive}
                        style={{ height: "230px" }}
                        className={`w-full text-left rounded-[6px] p-6 border transition-all hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)] cursor-pointer flex flex-col ${
                          isActive ? "bg-[#3a2e28] border-[#3a2e28]" : "bg-white border-[#c8b8a2]"
                        }`}
                      >
                        <h3
                          className={`text-[15px] font-semibold mb-2 line-clamp-1 ${
                            isActive ? "text-white" : "text-[#3a2e28]"
                          }`}
                        >
                          {category.title}
                        </h3>
                        {category.description && (
                          <p
                            className={`text-[14px] font-normal leading-[1.75] line-clamp-6 ${
                              isActive ? "text-[rgba(255,255,255,0.75)]" : "text-[#7b6b5a]"
                            }`}
                          >
                            {category.description}
                          </p>
                        )}
                      </button>
                    </Reveal>
                  );
                })}
              </div>
            )}

            {selected && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-xs font-semibold tracking-[0.1em] uppercase text-[#5a3535] hover:text-[#3a2e28] transition-colors cursor-pointer"
                >
                  Clear filter ✕
                </button>
              </div>
            )}
          </Container>
        </section>
      )}

      <section id="articles" className="bg-white">
        <Container className="py-20 max-[900px]:py-14">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
              Latest Articles
            </p>
            <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
              {selected ? `Insights: ${selected}` : "Featured Insights"}
            </h2>
          </Reveal>

          {filteredInsights.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {filteredInsights.map((insight, i) => {
                const fields = insight.insightFields;
                const category = fields?.category;

                return (
                  <Reveal
                    key={insight.slug ?? i}
                    delay={i * 100}
                    className="flex-1 min-w-[300px] max-w-[420px] rounded-[6px] overflow-hidden hover:shadow-[0_6px_32px_rgba(58,46,40,0.1)] hover:-translate-y-1"
                    style={{ border: "0.5px solid var(--border)" }}
                  >
                    <Link href={`/insights/${insight.slug}`} className="flex flex-col h-full">
                      {category && (
                        <div
                          className="px-6 py-2.5"
                          style={{ background: "var(--linen)", borderBottom: "0.5px solid var(--border)" }}
                        >
                          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a]">
                            {category}
                          </span>
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        {insight.title && (
                          <h3 className="font-playfair text-base font-semibold text-[#3a2e28] leading-[1.5] mb-3">
                            {insight.title}
                          </h3>
                        )}
                        {fields?.subtitle && (
                          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] flex-1 mb-4">
                            {fields.subtitle}
                          </p>
                        )}
                        {(fields?.author || fields?.readTime) && (
                          <p
                            className="text-[12px] font-medium text-[#7b6b5a]"
                            style={{ borderTop: "0.5px solid var(--border)", paddingTop: "12px" }}
                          >
                            {fields.author && `By ${fields.author}`}
                            {fields.author && fields.readTime && " · "}
                            {fields.readTime}
                          </p>
                        )}
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-[14px] font-normal text-[#7b6b5a]">
              No articles in this category yet.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
