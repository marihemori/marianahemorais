import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {
  LuGraduationCap,
  LuHome,
  LuInfo,
  LuFolders,
  LuBriefcase,
  LuAtSign,
  LuShapes,
} from "react-icons/lu";
import woodnisImg from "@/public/images/projects/woodnis.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(LuHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(LuInfo),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(LuFolders),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(LuShapes),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(LuBriefcase),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(LuAtSign),
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Woodnis",
    description:
      "A project for a company that sells furniture and mostly furniture made from reforested wood.",
    tags: ["Nuxt.js 3", "Pinia", "SCSS"],
    imageUrl: woodnisImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "Nuxt.js",
  "Vuex",
  "Pinia",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Angular",
  "DjangoCMS",
  "Bootstrap",
] as const;
