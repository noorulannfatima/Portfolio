import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Full Stack Developer
building modern web applications
with clean architecture and real-world impact`;

  const skills = [
    "html", "css", "js", "ts", "react", "next", "vue", "bootstrap", "tailwind", "materialui",
    "sass", "nodejs", "express", "mongodb", "postgres", "sequelize", "python", "fastapi",
    "prisma", "firebase", "redis", "redux", "pinia", "npm", "postman", "docker", "git",
    "vite", "replit", "netlify"
  ];

  const aboutText = `I’m a Full Stack Developer with hands-on experience building scalable web applications and APIs using Python, FastAPI/Django, Node.js, React, Next.js, and Vue.js.

• I focus on creating clean, maintainable systems—from intuitive frontend interfaces using React, shadcn/ui, Tailwind, and Material UI, to robust backend services with secure authentication and well-designed databases.

• I’ve built production-grade applications including food ordering platforms, finance & inventory systems, real-time team chat apps, and multi-role blogging platforms. My work emphasizes performance, clarity, and long-term scalability using MongoDB and PostgreSQL.

• I enjoy solving complex problems, designing efficient data models, and turning ideas into reliable software that users can trust.`;

  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose · Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-4" ref={imgRef}>
          {skills.map((skill, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
