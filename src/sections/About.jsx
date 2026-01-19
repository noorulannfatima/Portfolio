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

  const aboutCards = [
    {
      title: "Full Stack Developer",
      content: "I’m a Full Stack Developer with hands-on experience building scalable web applications and APIs using Python, FastAPI/Django, Node.js, React, Next.js, and Vue.js."
    },
    {
      title: "Clean Architecture",
      content: "I focus on creating clean, maintainable systems—from intuitive frontend interfaces using React, shadcn/ui, Tailwind, and Material UI, to robust backend services with secure authentication and well-designed databases."
    },
    {
      title: "Production-Grade Apps",
      content: "I’ve built production-grade applications including food ordering platforms, finance & inventory systems, real-time team chat apps, and multi-role blogging platforms. My work emphasizes performance, clarity, and long-term scalability using MongoDB and PostgreSQL."
    },
  ];

  const imgRef = useRef(null);
  const cardsRef = useRef([]);

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

    // Animate cards
    if (cardsRef.current.length > 0) {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      });
    }
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

      <div className="flex flex-col gap-10 px-10 pb-16 text-xl font-light tracking-wide text-white/60 md:text-2xl lg:text-3xl">
        
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
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
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6">
              {aboutCards.map((card, index) => (
                <div 
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group"
                >
                  <h3 className="text-white text-xl font-medium mb-3 group-hover:text-blue-400 transition-colors">{card.title}</h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
