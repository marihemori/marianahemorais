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
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(LuFolders),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(LuAtSign),
  },
] as const;

export const experiencesData = [
  {
    title: "",
    location: "",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Woodnis",
    description:
      "A project for a company that sells furniture and mostly furniture made from reforested wood.",
    tags: ["Nuxt.js 3", "Pinia", "SCSS"],
    imageUrl: woodnisImg,
    url: "https://woodnis.vercel.app/",
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
