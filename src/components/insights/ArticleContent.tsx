interface BodyBlock {
  __typename?: string;
  text?: string;
}

export default function ArticleContent({ body }: { body: BodyBlock[] }) {
  return (
    <div className="max-w-[680px] mx-auto">
      {body.map((block, i) => {
        if (!block.text) return null;

        if (block.__typename === "InsightFieldsBodyHeadingBlockLayout") {
          return (
            <h3
              key={i}
              className="font-playfair text-[20px] font-semibold text-[#3a2e28] leading-[1.35] mt-10 mb-4 first:mt-0"
            >
              {block.text}
            </h3>
          );
        }

        if (block.__typename === "InsightFieldsBodyQuoteBlockLayout") {
          return (
            <blockquote key={i} className="border-l-2 border-[#b8924a] pl-5 my-8">
              <p className="font-cormorant italic font-semibold text-[19px] text-[#3a2e28] leading-[1.7]">
                {block.text}
              </p>
            </blockquote>
          );
        }

        if (block.__typename === "InsightFieldsBodyCitationBlockLayout") {
          return (
            <p
              key={i}
              className="font-cormorant italic text-[15px] text-[#5c4f42] leading-[1.8] my-8 pt-5"
              style={{ borderTop: "0.5px solid var(--border)" }}
            >
              {block.text}
            </p>
          );
        }

        return (
          <p key={i} className="text-[14px] font-normal text-[#3a2e28] leading-[1.85] mb-5">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
