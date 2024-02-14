import {
  FaPeopleGroup,
  FaEuroSign,
  FaSuitcase,
  FaHospital,
  FaLandmark,
  FaPersonMilitaryPointing,
  FaUserGear,
} from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export const menuItems = [
  { title: "Popolazione", icon: <FaPeopleGroup /> },
  { title: "Economia", icon: <FaEuroSign /> },
  { title: "Società", icon: <FaUserGear/> },
  { title: "Lavoro", icon: <FaSuitcase /> },
  { title: "Politica", icon: <FaLandmark /> },
  { title: "Sicurezza", icon: <FaPersonMilitaryPointing /> },
  { title: "Salute", icon: <FaHospital /> },
  {
    title: "Projects",
    submenu: true,
    submenuItems: [
      { title: "Submenu 1" },
      { title: "Submenu 2" },
      { title: "Submenu 3" },
    ],
  },
];


export const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/isacco-bertoli-10aa16252/",
    icon: <FaLinkedin size={20} />,
  },
  {
    id: 2,
    name: "Github",
    href: "https://github.com/Isacco-B",
    icon: <FaGithub size={20} />,
  },
  {
    id: 3,
    name: "Website",
    href: "https://www.isaccobertoli.com/",
    icon: <FaGlobe size={20} />,
  },
];
