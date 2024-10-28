import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdBarChart,
  MdPersonPin,
  MdCode,
  MdContacts,
  MdNotes,
} from "react-icons/md";

import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/about";
import Resume from "./views/resume/resume";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/contact";
import Notes from "./views/Notes/Notes.jsx";

const routes = [
  {
    name: "Home",
    path: "/home",
    navbarDisplayName: "Home",
    icon: <Icon as={MdDashboard} width="30px" height="30px" color="inherit" />,
    component: Dashboard
  },
  {
    name: "About Me",
    path: "/about",
    navbarDisplayName: "About Me",
    icon: <Icon as={MdPersonPin} width="30px" height="30px" color="inherit" />,
    component: About
  },
  {
    name: "Projects",
    path: "/projects",
    navbarDisplayName: "Projects ",
    icon: <Icon as={MdCode} width="30px" height="30px" color="inherit" />,
    component: Projects
  },
  {
    name: "Resume",
    path: "/resume",
    navbarDisplayName: "Resume",
    icon: <Icon as={MdBarChart} width="30px" height="30px" color="inherit" />,
    component: Resume
  },
  {
    name: "Contact Me",
    path: "/contact",
    navbarDisplayName: "Contact",
    icon: <Icon as={MdContacts} width="30px" height="30px" color="inherit" />,
    component: Contact
  },
  {
    name: "Notes",
    path: "/notes",
    navbarDisplayName: "Notes",
    icon: <Icon as={MdNotes} width="30px" height="30px" color="inherit" />,
    component: Notes
  },
];

export default routes;
