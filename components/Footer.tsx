import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import Link from "next/link"

interface SocialItems {
  link: string;
  name: keyof typeof LucideIcons;
}

const socials: SocialItems[] = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/vrajesh-patel-004171243"
  },
  {
    name: "Github",
    link: "https://github.com/VrajeshPatel02/"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vrajesh.patel_02/"
  },
  {
    name: "Mail",
    link: "mailto:vrajeshpatel2990@gmail.com"
  }
];

const Footer = () => {
  return (
    <footer className="mt-14">
      <div className="flex flex-col rounded-xl justify-center items-center bg-bg-800 py-10">
        <div className="flex flex-row gap-2 justify-center items-center bg-bg-600 rounded-full p-2 px-4">
          <span className="relative flex row size-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
          </span>
          <p className="text-xs">Available for work</p>
        </div>
        <h2 className="font-sans-bold py-5 text-5xl text-center pb-8 tracking-wide">
          Let&apos;s create your next big <br /> idea.
        </h2>
        <button className="px-8 py-3 rounded-full border border-gray-400 text-md text-foreground hover:bg-foreground hover:text-background transition">
          Contact Me
        </button>
      </div>
      <div className="flex flex-row justify-between items-center py-4">
        <div className="pt-2 text-sm text-secondary">
          © 2025 Vrajesh Patel. All rights reserved.
        </div>
        <div className="flex flex-row gap-3 text-gray-500 group transition-colors ease-in-out duration-300">
          {socials.map((social, index) => {
            const Icon = LucideIcons[social.name] as React.ComponentType<LucideProps>;
            return Icon ? (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="inline-block size-6 transition-colors duration-300 group-hover:text-gray-700 hover:text-gray-500" />
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
