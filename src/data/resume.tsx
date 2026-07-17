import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Sagar Manohar",
  initials: "SM",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Product Designer",
  summary:
    "Over the past 5+ years, I’ve designed AI apps, dashboards, mobile, and web experiences by blending engineering expertise with user-centered design.<br/><u>**At Pixis, I built the design system and Figma variable architecture while creating AI-powered workflows**</u> to keep design consistency high as the team scaled.\n\n<u>**I believe great design starts with understanding people, their needs, emotions, and challenges**</u>. I enjoy simplifying complex problems into intuitive, thoughtful experiences with attention to every detail.",
  avatarUrl: "/me.png",
  skills: [
    { name: "AI Platform" },
    { name: "E-commerce" },
    { name: "Edtech" },
    { name: "Healthcare" },
    { name: "SaaS" },
    { name: "Fintech" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/sagarmanohar",
        icon: Icons.behance,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sagar-manohar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Call: {
        name: "Call",
        url: "tel:+918281921430",
        icon: Icons.phone,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pixis AI",
      href: "https://pixis.ai",
      badges: [],
      location: "Remote",
      title: "Product Designer",
      logoUrl: "/pixis.png",
      start: "Mar 2023",
      end: "Present",
      description: `
- Led end-to-end design of Prism, an AI-powered conversational interface that helps marketers analyze campaigns, audiences, and spend using natural language.
- Conducted user research with media buyers and performance strategists to map workflows, identify pain points, and shape product decisions.
- Designed key experiences including prompt-first workflows, reasoning visibility, workspace panels, voice input, file attachments, workflow automation, and billing systems.
- Worked on Adroom, Pixis’s creative studio, designing features like competitor ad insights, ad launch flows, and AI-driven creative generation.
- Built a custom conversational design system with reusable response cards, data visualizations, loading states, and interaction patterns for scalable AI experiences.`,
    },
    {
      company: "ICwares Systems & Softwares",
      badges: [],
      href: "",
      location: "",
      title: "Product Designer",
      logoUrl: "/icware.png",
      start: "Jul 2021",
      end: "Mar 2023",
      description: `
Designed and implemented UI/UX solutions for ICwares Systems & Softwares, successfully delivering multiple products and enhancing brand identities.

**Highlights:**
- Performed in-depth competitor analysis and A/B testing, informing data-driven UX strategies that optimized user flows and improved product usability.
- Collaborated with engineering to design and manage the implementation of new UI/UX features, ensuring seamless integration and enhanced user experience.
- Developed over 70 wireframes and prototypes (50+ mobile, 20+ web screens) for 3 successful products launched within a year for esteemed organizations.
- Created comprehensive brand identities and guidelines for various clients, strengthening their market positioning and visual consistency.`,
    },
    // Hidden — uncomment to restore
    // {
    //   company: "Entvickler web solutions",
    //   href: "",
    //   badges: [],
    //   location: "",
    //   title: "UI/UX Designer",
    //   logoUrl: "/Envick.png",
    //   start: "Oct 2020",
    //   end: "Jul 2021",
    //   description: `
    // Contributed to user experience and interface design for Entvickler web solutions, delivering impactful visuals and strategic design solutions for tech startups.
    //
    // **Highlights:**
    // - Led UX/UI design initiatives across numerous projects, translating complex user needs into intuitive and effective digital solutions.
    // - Consulted with tech startups to review existing products, providing strategic design solutions that addressed critical user needs and business challenges.
    // - Conceptualized and executed impactful visual designs, ensuring consistent brand identity and enhancing user perception across diverse platforms.
    // - Drove the full design process from competitive analysis and low-cost guerrilla research to live product delivery, significantly accelerating project timelines and outcomes.`,
    // },
  ],
  education: [
    {
      school: "Bridge UX Design Studios",
      href: "",
      degree: "Advanced UX/UI Training for Web & Mobile",
      logoUrl: "/bridgeux.png",
      start: "Mar 2019",
      end: "Mar 2019",
    },
    {
      school: "Toonz Academy",
      href: "",
      degree: "Diploma, Visual Effects and Animation",
      logoUrl: "/toonz.jpg",
      start: "Jan 2018",
      end: "Dec 2018",
    },
    {
      school: "Srinivas Institute of Technology",
      href: "",
      degree: "B.E., Computer Engineering",
      logoUrl: "/sit.jpg",
      start: "Jan 2013",
      end: "Dec 2017",
    },
    {
      school: "Gulf Model School Dubai",
      href: "",
      degree: "Pre-University, Pre-University Studies",
      logoUrl: "/GMS.jpg",
      start: "Jan 2011",
      end: "Dec 2013",
    },
  ],
  projects: [
    {
      title: "Swaram AI (Personal Project)",
      href: "",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Building a personal AI agent with a natural, Malayalam-based voice model, powered by open-source multilingual technologies.",
      technologies: [
        "Python",
        "Qwen (Open-source LLMs)",
        "XTTS",
        "Whisper",
        "AI Workflow Design",
        "Conversation Design",
        "Figma",
      ],
      links: [],
      image: "/swaram.jpg",
      video: "",
    },
    {
      title: "Prism AI",
      href: "https://pixis.ai/products/prism/",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Prism is an AI-powered ad campaign manager that helps brands and agencies monitor performance through a simple conversational interface.",
      technologies: [
        "Product Strategy",
        "User Research",
        "User Flows",
        "Interaction Design",
        "Design Systems",
        "Prototyping",
        "Usability Testing",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixis.ai/products/prism/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/prism.jpg",
      video: "",
    },
    {
      title: "SideGigs (Personal Project)",
      href: "https://www.figma.com/proto/iexIWEufQppG8Hc0iDYcJ2/Sidegigs-case-study?node-id=1-2&viewport=350%2C182%2C0.1&t=rErWKMtzlo4uSdOV-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "SideGigs is a free community-driven app that connects local workers with nearby part-time jobs, helping people earn extra income with flexible opportunities.",
      technologies: [
        "Product Strategy",
        "User Research",
        "User Journey Mapping",
        "Interaction Design",
        "Design Systems",
        "Usability Testing",
        "Figma & FigJam",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.figma.com/proto/iexIWEufQppG8Hc0iDYcJ2/Sidegigs-case-study?node-id=1-2&viewport=350%2C182%2C0.1&t=rErWKMtzlo4uSdOV-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sidegigs.png",
      video: "",
    },
    {
      title: "Adroom | Generative AI platform",
      href: "https://pixis.ai/products/creative-ai/",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Adroom is an AI-powered creative studio that enables marketers to generate high-quality, on-brand, performance-driven advertising creatives in seconds.",
      technologies: [
        "Product Strategy",
        "User Research",
        "Information Architecture",
        "User Flows",
        "Wireframing",
        "Interaction Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixis.ai/products/creative-ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adroom.jpg",
      video: "",
    },
    {
      title: "MyStop",
      href: "https://www.behance.net/gallery/217621443/MYSTOP-where-is-my-bus-app",
      dates: "Jan 2024 - Dec 2024",
      active: true,
      description:
        "MyStop is a bus tracking platform that helps passengers access bus schedules, delay information, and route details in real time, making public transportation more efficient and reliable.",
      technologies: [
        "User Research",
        "User Flows",
        "Interaction Design",
        "Design Systems",
        "Prototyping",
        "Usability Testing",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.behance.net/gallery/217621443/MYSTOP-where-is-my-bus-app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mystop.jpg",
      video: "",
    },
    {
      title: "Visibility",
      href: "https://pixisvisibility.pixis.ai/pixis-visibility-lp/?utm_source=google&utm_medium=search&utm_campaign=VISBILITY_SEARCH_BRAND_ALL&utm_adgroup=193849748543&utm_term=pixis%20visibility&utm_content=804150786420&g_id=CjwKCAjwmdLSBhANEiwAkREMN-0ZIp9MffwZnylZkH0UPT35BkDCRK0HRf4uHxp8GSivPbl_VC2SuRoCMuUQAvD_BwE&gad_source=1&gad_campaignid=23726093409&gbraid=0AAAAApPyNoy6G4dgzmC63aY7tp41qpbyt&gclid=CjwKCAjwmdLSBhANEiwAkREMN-0ZIp9MffwZnylZkH0UPT35BkDCRK0HRf4uHxp8GSivPbl_VC2SuRoCMuUQAvD_BwE",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Visibility is an AI search analytics platform that helps brands monitor how they appear across AI assistants and search engines.",
      technologies: [
        "User Research",
        "User Flows",
        "Interaction Design",
        "Design Systems",
        "Prototyping",
        "Usability Testing",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixisvisibility.pixis.ai/pixis-visibility-lp/?utm_source=google&utm_medium=search&utm_campaign=VISBILITY_SEARCH_BRAND_ALL&utm_adgroup=193849748543&utm_term=pixis%20visibility&utm_content=804150786420&g_id=CjwKCAjwmdLSBhANEiwAkREMN-0ZIp9MffwZnylZkH0UPT35BkDCRK0HRf4uHxp8GSivPbl_VC2SuRoCMuUQAvD_BwE&gad_source=1&gad_campaignid=23726093409&gbraid=0AAAAApPyNoy6G4dgzmC63aY7tp41qpbyt&gclid=CjwKCAjwmdLSBhANEiwAkREMN-0ZIp9MffwZnylZkH0UPT35BkDCRK0HRf4uHxp8GSivPbl_VC2SuRoCMuUQAvD_BwE",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/visibility.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Pixis Brand Refresh",
      dates: "",
      location: "",
      description:
        "Led the brand refresh for Pixis, creating a cohesive visual identity and scalable design system and website design.",
      image: "/pixis.jpg",
      links: [
        {
          title: "View Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pixis.ai/",
        },
      ],
    },
    {
      title: "Brand Refresh Plugin",
      dates: "",
      location: "",
      description:
        "Designed a plugin that helps designers generate prompts and identify UI components from images.",
      image: "/Brand.jpg",
      links: [
        {
          title: "View Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chromewebstore.google.com/detail/hbdbcbikeiedniojdaneabiopcgnncmc?utm_source=item-share-cb",
        },
      ],
    },
    {
      title: "Care.io",
      dates: "",
      location: "",
      description:
        "Designed a healthcare platform that connects patients with trusted doctors, making it easy to discover specialists, book appointments.",
      image: "/care.jpg",
      links: [
        {
          title: "View Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.behance.net/gallery/160066733/CAREIO-UX-UI",
        },
      ],
    },
    {
      title: "Foodo",
      dates: "",
      location: "",
      description:
        "Designed an order support platform that simplifies collaboration between customers, restaurants, and delivery partners.",
      image: "/Foodo.jpg",
      links: [
        {
          title: "View Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.behance.net/gallery/163206053/FOODO-UX-case-study",
        },
      ],
    },
    {
      title: "2× Employer of the Month Award",
      dates: "",
      location: "",
      description:
        "Recognized twice at Pixis for outstanding contributions to product design, design systems, and cross-functional collaboration.",
      image: "/awards.jpg",
      links: [
        {
          title: "View Awards",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/drive/folders/11QZslnvjtRnChLxH_BYg994xraGNvv0O?usp=sharing",
        },
      ],
    },
  ],
} as const;
