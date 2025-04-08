import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pleignsImg from "@/public/pleigns.png";
import goodEatsImg from "@/public/goodEats.png";
import wordWizardsImg from "@/public/wordWizards.png";

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
    title: "Pharmacutical Technician",
    location: "Atlanta, GA",
    description:
    "I worked as a pharmacutical technician for a few years. I handled all the medications and helped customers with their prescriptions.",
    icon: React.createElement(FaReact),
    date: "2018 - 2020",
  },
  {
    title: "Graduated bootcamp",
    location: "Online",
    description:
    "I graduated after a few years of bootcamp. I learned full-stack web development and upskilled to a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Account Manager",
    location: "Lawrencville, GA",
    description:
      "I am now an Account Manager at a small company. I manage a small team and handle all client relations. I also handle all the company's income finances.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Software Engineer Intern",
    location: "New York, NY",
    description:
      "I am interning at Tern. I deploy, collaborate, and work on a variety of tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "wordWizards",
    site: "https://wordwizards.onrender.com/",
    description:
      "A social media/blogging website. It allows users to create, like, comment and share posts as well as other CRUD operations.",
    tags: ["React", "Express.js", "postgreSQL", "CSS", "React-Bootstap", "Node.js"],
    imageUrl: wordWizardsImg,
  },
  {
    title: "Pleigns",
    site: "https://pleigns-api.onrender.com/",
    description:
      "An ecommerce website about buying airplanes. It allows users to browse, add to cart, checkout and other CRUD operations.",
      tags: ["React", "Express.js", "postgreSQL", "CSS", "React-Bootstap", "Node.js",],
    imageUrl: pleignsImg,
  },
  {
    title: "Good Eats!",
    site: "https://goodeats.fun/",
    description:
      "A public web app for quick recipes. It allows users to interact with the Spoonacular API to find recipes based off their preferences or fridge ingredients.",
    tags: ["React", "CSS", "JavaScript", "Spoonacular API"],
    imageUrl: goodEatsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vercel",
  "React",
  "Node.js",
  "Tailwind",
  "Next.js",
  "Git",
  "Redux",
  "Express",
  "PostgreSQL",
  "Render",
  "Bash",
  "Analytics",
  "SEO",
  "Cybersecurity",
  "Figma",
  "Mocha",
  "Chai"
] as const;
