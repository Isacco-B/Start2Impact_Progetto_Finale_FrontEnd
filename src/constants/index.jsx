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
  { title: "Popolazione", icon: <FaPeopleGroup size={16} /> },
  { title: "Economia", icon: <FaEuroSign size={16} /> },
  { title: "Società", icon: <FaUserGear size={16} /> },
  { title: "Lavoro", icon: <FaSuitcase size={16} /> },
  { title: "Politica", icon: <FaLandmark size={16} /> },
  { title: "Sicurezza", icon: <FaPersonMilitaryPointing size={16} /> },
  { title: "Salute", icon: <FaHospital size={16} /> },
  {
    title: "Projects",
    icon: <FaHospital size={16} />,
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
    icon: <FaLinkedin size={16} />,
  },
  {
    id: 2,
    name: "Github",
    href: "https://github.com/Isacco-B",
    icon: <FaGithub size={16} />,
  },
  {
    id: 3,
    name: "Website",
    href: "https://www.isaccobertoli.com/",
    icon: <FaGlobe size={16} />,
  },
];
