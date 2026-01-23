// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I build fast, responsive, and visually polished interfaces that feel effortless to use. My focus is clean UI, smooth interactions, and scalable frontend architecture.",
    items: [
      {
        title: "Modern Frameworks",
        description: "(React, Next.js, Vue, TypeScript)",
      },
      {
        title: "UI Engineering",
        description: "(Tailwind CSS, shadcn/ui, Responsive Design)",
      },
      {
        title: "State Management",
        description: "(Zustand, Pinia, Redux Basics)",
      },
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "I develop reliable backend systems that power real-world applications—handling logic, authentication, and data flow with clarity and performance in mind.",
    items: [
      {
        title: "API Development",
        description: "(REST APIs, Node.js, Express, Django)",
      },
      {
        title: "Authentication Systems",
        description: "(JWT, Clerk, Secure Auth Flows)",
      },
      {
        title: "Business Logic",
        description: "(Scalable & Maintainable Architecture)",
      },
    ],
  },
  {
    title: "Database Design",
    description:
      "A strong database is the backbone of every great product. I design efficient, scalable data models that keep applications fast and reliable as they grow.",
    items: [
      {
        title: "Relational Databases",
        description: "(PostgreSQL, SQL Schema Design)",
      },
      {
        title: "NoSQL Databases",
        description: "(MongoDB, Flexible Data Modeling)",
      },
      {
        title: "ORMs & Query Optimization",
        description: "(Sequelize, Efficient Queries)",
      },
    ],
  },
  {
    title: "API & App Integrations",
    description:
      "I connect applications with third-party services and internal systems—making everything work together smoothly and securely.",
    items: [
      {
        title: "Payments",
        description: "(Stripe Integration, Checkout Flows)",
      },
      {
        title: "External APIs",
        description: "(Third-Party Services & Data Sync)",
      },
      {
        title: "Full App Workflows",
        description: "(Frontend ↔ Backend ↔ Database)",
      },
    ],
  },
];

export const projects = [
   {
    id: 1,
    name: "Food-Delivery-Website",
    description:
      "A full-stack food ordering platform with menu browsing, order placement, and role-based dashboards for customers, restaurants, and delivery partners.",
    href: "",
    image: "/assets/projects/foodie.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "React" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Zustand" },
      { id: 6, name: "JWT" },
      { id: 7, name: "Stripe" },
      { id: 8, name: "Cloudinary" },
      { id: 9, name: "Bootstrap" },
    ],
  },
  
   {
    id: 2,
    name: "Lume",
    description:
      "A Slack-like team chat application with organizations, channels, threads, real-time messaging, and reactions.",
    href: "",
    image: "/assets/projects/lume.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Sequelize" },
      { id: 5, name: "NextAuth" },
      { id: 6, name: "oRPC" },
      { id: 7, name: "Zod" },
      { id: 8, name: "PartyKit" },
      { id: 9, name: "shadcn/ui" },
    ],
  },


  {
    id: 3,
    name: "Inventory Management and Billing Software ",
    description:
      "A finance and inventory management platform enabling businesses to manage companies, parties, items, expenses, and transactions from a unified interface.",
    href: "",
    image: "/assets/projects/invisio.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Sequelize" },
      { id: 5, name: "JWT" },
      { id: 6, name: "Pinia" },
      { id: 7, name: "SCSS" },
    ],
  },
 
    {
    id: 4,
    name: " Oppo",
    description:
      "An online store for Oppo Mobile Accessories with smooth animation affect and scroll effects.",
    href: "",
    image: "/assets/projects/oppo.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Bootstrap" },
    ],
  },
 
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Material UI" },
    ],
  },

  {
    id: 6,
    name: "Digital E-commerce Store",
    description:
      "An online store for multiple vendors to sell their products.",
    href: "",
    image: "/assets/projects/estore.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Django" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Bootstrap" },
      { id: 4, name: "JWT" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/noorulain-fatima-nf/" },
  { name: "Discord", href: "https://discord.com/users/1289485039658205266" },
];

export const contactInfo = {
  email: "noorulannfatima@gmail.com",
};

