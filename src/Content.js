// import images
import Hero_person from "./assets/images/Hero/person.png";

import HTML from "./assets/images/Skills/html.png";
import CSS from "./assets/images/Skills/tailwindimage.webp";
import MANGODB from "./assets/images/Skills/mangodb.png";
import REACT from "./assets/images/Skills/node_js.png";
import NODEJS from "./assets/images/Skills/react_new.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/portfolio.png";
import project4 from "./assets/images/Projects/dress-ecommerce.png";
import person_project from "./assets/images/Projects/person.png";
import project1 from "./assets/images/Projects/shoes.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },

    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "AKSHAY",
    LastName: "BILAGI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Proficient in structuring web content using HTML.",
        logo: HTML,
      },
      {
        name: "Tailwind CSS",
        para: "Skilled in styling and designing web pages using CSS",
        logo: CSS,
      },
      {
        name: "MANGODB",
        para: "Experienced in working with MongoDB for database management",
        logo: MANGODB,
      },
      {
        name: "React js",
        para: "Well-versed in building dynamic user interfaces using React.js.",
        logo: NODEJS,
      },
      {
        name: "Node js",
        para: "Capable of developing server-side applications using Node.js",
        logo: REACT,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Shoes E-commerce",
        image: project1,
        link: "https://nike-nu.vercel.app/",
      },
      {
        title: "RazorPay Integration",
        link: "https://64b954e0142fcf166b93677b--akshay-razorpay.netlify.app/",
        image: project2,
      },
      {
        title: "Portfolio",
        link: "https://akshay-one.vercel.app/",
        image: project3,
      },

      {
        title: "Cloth E-commerce",
        image: project4,
        link: "https://cloth-seven.vercel.app/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    // image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Akshay22bv@gmail.com",
        icon: GrMail,
        link: "mailto:Akshay22bv@gmaiil.com",
      },
      {
        text: "9686721221",
        icon: MdCall,
        link: "https://wa.me/9686721221",
      },
      {
        text: "Akshay Bilagi",
        icon: BsInstagram,
        link: "https://www.instagram.com/bilagi_akshay/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
