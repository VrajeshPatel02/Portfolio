import { Marquee } from "@/components/ui/marquee";
import { Sparkle } from "lucide-react";

const tags = [
  "Development",
  "Mentor",
  "Websites",
  "Designing",
  "Graphics",
  "Animations",
  "Community",
];

export default function MarqueeText() {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-y border-bg-700 mt-2.5 py-6 flex items-center justify-center overflow-hidden">
      <Marquee className="[--duration:50s]">
        {tags.map((tag, index) => (
          <h2
            key={index}
            className="text-5xl font-sans-bold text-bg-600 flex items-center"
          >
            <span className="mx-4">
              <Sparkle className="size-6 inline-block" />
            </span>
            {tag}
          </h2>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
