import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  LuGraduationCap,
  LuHome,
  LuInfo,
  LuFolders,
  LuBriefcase,
  LuAtSign,
  LuShapes,
} from "react-icons/lu";
import { BsBoxes } from "react-icons/bs";

import { PiPathBold } from "react-icons/pi";
// Works
import aliveImg from "@/public/images/works/alive-haus.png";
import tramontinaImg from "@/public/images/works/tramontina.png";
import acquaImg from "@/public/images/works/acquamotion.png";
import profuseImg from "@/public/images/works/profuse.png";
import ritmoneuranImg from "@/public/images/works/ritmoneuran.png";

import owngreenImg from "@/public/images/projects/owngreen.png";
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
    name: "Works",
    hash: "#works",
    icon: React.createElement(BsBoxes),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(LuFolders),
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Sao Paulo - SP",
    description:
      "My first experience as a Front-End developer and I worked using HTML, CSS, JavaScript, JQuery, Gulp, EngageOneVideo, SEO and making integrations with the API.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "The main stack I used was Vue.js, using Vuex and also Vuetify. I worked with many technologies such as Node.js, React, DjangoCMS and Angular.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "The main stack was Nuxt, Pinia and Highcharts. At the same time as I took care of the Front-End side I also made screen prototypes using Figma.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
] as const;

export const worksData = [
  {
    title: "Alive Haus",
    imageUrl: aliveImg,
    url: "https://play.alive.haus/lives",
  },
  {
    title: "Ritmoneuran",
    imageUrl: ritmoneuranImg,
    url: "https://ritmoneuran.com.br/",
  },
  {
    title: "Acquamotion",
    imageUrl: acquaImg,
    url: "https://acquamotion.com.br/",
  },
  {
    title: "Profuse",
    imageUrl: profuseImg,
    url: "https://www.profuse.com.br/",
  },
  {
    title: "Tramontina",
    imageUrl: tramontinaImg,
    url: "https://assets.tramontina.com.br/",
  },
] as const;

export const projectsData = [
  {
    title: "Owngreen",
    description: "A website that sells gardening stuff.",
    tags: ["React", "Tailwind", "Strapi", "Stripe"],
    imageUrl: owngreenImg,
    url: "https://owngreen.vercel.app/",
  },
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
