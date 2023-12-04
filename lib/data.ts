import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import portfolio from "@/public/portfolio.png";
import todolist from "@/public/todolist.png";
import simonsays from "@/public/simonsays.png";
import imagegenerator from "@/public/imagegenerator.png";
import urlshortener from "@/public/urlshortener.png";
import automind from "@/public/automind.png"
import imagedetection from "@/public/image-detection.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Certificate: 100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    location: "Udemy (Status: In progress)",
    description:
      "Full course for Python from beginner to advanced (web development, data sciene, machine learning).",
    icon: React.createElement(LiaCertificateSolid),
    date: "2023",
  },
  {
    title: "Certificate: The Complete 2023 Web Development Bootcamp",
    location: "Udemy (Status: Completed)",
    description:
      "Full course for learning web development (HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps).",
    icon: React.createElement(LiaCertificateSolid),
    date: "2023",
  },
  {
    title: "Certificate: AZ-900 Microsoft Azure Fundamentals",
    location: "Udemy (Status: Completed)",
    description:
      "Getting hands-on with Microsoft Azure (VM's, Storage, Databases, DevOps, Security).",
    icon: React.createElement(LiaCertificateSolid),
    date: "2023",
  },
  {
    title: "Technical SEO Manager",
    location: "Tchibo GmbH, Germany",
    description:
      "I worked as a technical SEO Manager for 5 years of experience. My expertise includes conducting comprehensive SEO audits, implementing on-page strategies with focus on the technical part by using the common tools like GSC, Sistrix, Ryte or Screaming Frog.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2023",
  },
  {
    title: "Certificate: Python Basics",
    location: "Codecademy (Status: Completed)",
    description:
      "Basics of Python",
    icon: React.createElement(LiaCertificateSolid),
    date: "2022",
  },
  {
    title: "Certificate: HTML & CSS Fundamentals",
    location: "Codecademy (Status: Completed)",
    description:
      "Fundamentals of HTML & CSS",
    icon: React.createElement(LiaCertificateSolid),
    date: "2022",
  },
  {
    title: "Master: E-Commerce",
    location: "Wedel, Germany",
    description:
      "Master Thesis: Machine Learning in Search Engine Optimization: Application of Random Forest Regression and K-Means Clustering for Prioritizing SEO Measures.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Bachelor: Industrial Enineering",
    location: "Wedel, Germany",
    description:
      "Bachelor Thesis: Impact of SEO On-Page Optimizations using the example of an E-Commerce platform.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Intership: Onsite Manager",
    location: "Tchibo GmbH, Germany",
    description:
      "I worked as an Onsite Manager to learn all about an online shop and it's workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2017 - Feb 2018",
  },
  {
    title: "Semester Abroad",
    location: "Bangkok, Thailand",
    description:
      "During my bachelor I've studied Business Administration for 1 semester in Bangkok.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2016 - Feb 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Image Detection",
    description:
      "A Python script that loops through a list of images in AWS S3 to detect adjustment and generating a detailed description, title and relevant tags for the image.",
    tags: ["Python", "OpenAI", "AWS"],
    link: "",
    imageUrl: imagedetection,
    mail: "",
    pw: "",
    demo: ""
  },
  {
    title: "AutoMind",
    description:
      "A SaaS platform for generating Text, Images and Code powered by OpenAI. Click to try it out!",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "OpenAI", "Clerk"],
    link: "https://automind-by-tobi.vercel.app/",
    imageUrl: automind,
    mail: "demo(1-5)@automind.com",
    pw: "automind-demo-2023",
    demo: "Demo Account:"
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio to practice my skills and show my work to other people. The portfolio is responsive with light & dark mode and using different packages like react-resend for direct E-Mail contact.",
    tags: ["React", "Next.js", "Tailwind"],
    link: "",
    imageUrl: portfolio,
    mail: "",
    pw: "",
    demo: ""
  },
  {
    title: "Image Generator",
    description:
      "A python script for getting ideas with the ChatGPT API and automated image generation using Midjourney & Discord Bot",
    tags: ["Python"],
    link: "",
    imageUrl: imagegenerator,
    mail: "",
    pw: "",
    demo: ""
  },
  {
    title: "Shrinker",
    description:
      "A URL shortener application build with React and shrtcode API.",
    tags: ["React", "CSS", "Axios"],
    link: "",
    imageUrl: urlshortener,
    mail: "",
    pw: "",
    demo: ""
  },
  {
    title: "Todo-List App",
    description:
      "A simple todo list for adding, checking and removing taskt. The app is using the local storage to keep the items when refreshing. Click to try it out!",
    tags: ["React", "CSS"],
    link: "https://todo-list-by-tobi.vercel.app/",
    imageUrl: todolist,
    mail: "",
    pw: "",
    demo: ""
  },
  {
    title: "Simon Says Game",
    description:
      "A simple Simon Says game built with JavaScript. The player has to remember a sequence of sounds. Click to try it out!",
    tags: ["JavaScript", "CSS", "HTML"],
    link: "https://tobi-ahx.github.io/simon-says/",
    imageUrl: simonsays,
    mail: "",
    pw: "",
    demo: ""
  },
] as const;

export const skillsData = [
  "SEO",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "WordPress",
  "WooCommerce"
] as const;