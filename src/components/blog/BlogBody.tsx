import type { BlogBlock } from "@/types";

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-none space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="leading-relaxed text-navy-800">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="pt-4 font-heading text-2xl font-extrabold text-navy-900">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-2 font-heading text-xl font-bold text-navy-900">
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-navy-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-amber-500 bg-navy-50 py-3 pl-5 italic text-navy-800"
              >
                {block.text}
                {block.attribution ? (
                  <footer className="mt-1 text-sm not-italic text-muted-foreground">
                    &mdash; {block.attribution}
                  </footer>
                ) : null}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
