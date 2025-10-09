"use client"
import React from 'react';
import { Hand, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from "next/link";

const socials = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/vrajesh-patel-004171243"
  },
  {
    name: "github",
    link: "https://github.com/VrajeshPatel02/"
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/vrajesh.patel_02/"
  },
  {
    name: "email",
    link: "vrajeshpatel2990@gmail.com"
  }
]

const Hero = () => {
  return (
    <section className="max-w-screen font-sans px-4 py-20">
      <div className="w-full h-80vh flex flex-col">
        {/* 👋 waving hand */}
        <div className="py-8">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              transformOrigin: "70% 70%", // wrist pivot
            }}
          >
            <Hand className="inline-block mr-2 stroke-highlight size-6" />
          </motion.div>
          <span>Hey! It&apos;s me Vrajesh,</span>
        </div>

        {/* Headline */}
        <h1 className="font-sans-bold text-7xl">
          Crafting <span className="text-highlight">purpose driven<br /> experiences</span> that inspire<br /> & engage.
        </h1>

        {/* Description with divider */}
        <div>
          <div className="md:flex-center mt-8 flex flex-col gap-4 md:flex-row items-center">
            <div className="bg-bg-700 h-[1px] w-full items-center" />
            <p className="w-full text-pretty text-gray-700 dark:text-gray-500 ">
              I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
            </p>
          </div>
        </div>

        {/* Social links + button */}
        <div className="flex flex-row items-center justify-between mt-8 text-sm w-full">
          {/* socials (left side) */}
          <div className="flex flex-row gap-3 text-gray-500 group">
            {socials.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="uppercase transition-colors duration-300 group-hover:text-gray-700 hover:text-gray-500"
              >
                {link.name}
                <ArrowUpRight className="inline-block ml-1 size-5" />
              </Link>
            ))}
          </div>

          {/* button (right side) */}
          <button className="px-10 py-3 rounded-full border border-gray-400 text-md text-foreground hover:bg-foreground hover:text-background transition">
            Know me better
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
