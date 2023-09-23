import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/FArbucks.png";
import rmtdevImg from "@/public/furnid.png";
import wordanalyticsImg from "@/public/musicPlayer.png";

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
    title: "HIMTI Activist",
    location: "BInus University",
    description:
      "I work as a Creative and Design HIMTI Activist, where my tasks include creating and designing UI/UX aspects for the HIMTI organization's website, as well as creating aesthetically attractive posters for various events.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2022 - Now",
  },
  {
    title: "iCPC",
    location: "ICPC Foundation",
    description:
      "I had the opportunity to participate in an ICPC (International Collegiate Programming Contest) competition, where teams of university students solve intricate algorithmic problems under a time constraint. During the competition, I am proud to say that our team successfully solved 5 out of the 10 challenging problems presented to us, showcasing our problem-solving skills and determination in a highly competitive environment.",
    icon: React.createElement(AiOutlineCode),
    date: "Nov 2022",
  },
  {
    title: "Compfest",
    location: "University of Indonesia",
    description:
      "I had the opportunity to participate in Compfest, an IT competition with various sub-categories, and I chose to compete in the game development segment. During the event, I successfully created a captivating 2D pixel ninja game, but unfortunately I did not win in the competition.",
    icon: React.createElement(FaGamepad),
    date: "Jul 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "FArbucks",
    description:
      "I made this project during the second semester of college, I created a website that provides information about coffee.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "FURNID",
    description:
      "An e-commerce website that displays various home furniture, created when I was in my 3rd semester at college.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Tepen Kiyowo",
    description:
      "Website that displays a music player with an interactive User Interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "React(in progress)",
  "Git",
  "SQL",
  "Python",
  "Java",
  "JavaFX",
  "Laravel",
] as const;
