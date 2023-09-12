"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT ME</SectionHeading>
      <p className="mb-3">
        Since 2018, I have worked as a technical SEO manager. With over 5 years
        of experience, I have been dedicated to optimizing websites for search
        engines and enhancing their online visibility. My role involves
        conducting in-depth technical website analyses, identifying and
        resolving issues that may hinder SEO performance, and implementing best
        practices to ensure search engine-friendliness. I specialize in various
        aspects of technical SEO, including optimizing page structure, improving
        URL architecture, and ensuring efficient crawling and indexing by search
        engines.{" "}
      </p>

      <p>
        Furthermore, while working as a technical SEO, I developed a passion for
        coding and web development. As I learned the fundamentals of HTML, CSS,
        and JavaScript as part of my work, I began self-teaching myself more
        in-depth coding skills since August 2023. I am pursuing further learning
        through platforms like YouTube, Udemy, and ChatGPT to explore web
        development and modern technologies such as Next.js, React, and Python
        automation.{" "}
      </p>

      <p className="mt-10">
        Fun fact: I'm also a DJ, so I am available for company events too ✌️.{" "}
      </p>
    </motion.section>
  );
}
