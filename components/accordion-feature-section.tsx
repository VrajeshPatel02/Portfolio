"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

export interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
  icon?: keyof typeof LucideIcons;
}

interface Feature197Props {
  features: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Ready-to-Use UI Blocks",
    image: "/images/block/placeholder-1.svg",
    description:
      "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
  },
  {
    id: 2,
    title: "Tailwind CSS & TypeScript",
    image: "/images/block/placeholder-2.svg",
    description:
      "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
  },
  {
    id: 3,
    title: "Dark Mode & Customization",
    image: "/images/block/placeholder-3.svg",
    description:
      "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
  },
  {
    id: 4,
    title: "Accessibility First",
    image: "/images/block/placeholder-4.svg",
    description:
      "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
  },
  {
    id: 5,
    title: "Modern Development Stack",
    image: "/images/block/placeholder-5.svg",
    description:
      "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
  },
];

const Feature197 = ({ features = defaultFeatures }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="pt-8 pb-4">
      <div className="container mx-auto">
        <div className="mb-4 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              className="w-full rounded-xl"
              defaultValue="item-1"
            >
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${
                        tab.id === activeTabId
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {" "}
                      {tab.icon &&
                        (() => {
                          const Icon = LucideIcons[
                            tab.icon
                          ] as React.ComponentType<LucideProps>;
                          return Icon ? (
                            <Icon className="text-primary inline-block mr-3 size-6" />
                          ) : null;
                        })()}
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden aspect-2/1">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        className="h-100 w-full rounded-xl object-cover transition-all duration-500 hover:scale-[1.015] opacity-100 ease-in-out"
                        width={700}
                        height={700}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="pl-4 h-full w-1/2">
            <Image
              src={activeImage}
              alt="Feature preview"
              className="aspect-[2/1] h-80 rounded-xl object-cover transition-all duration-500 hover:scale-[1.015] opacity-100 ease-in-out"
              height={700}
              width={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
