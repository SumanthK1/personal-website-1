import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const projectImages = [
    getAssetPath("images/meta.png"),
    getAssetPath("images/node.png"),
    getAssetPath("images/thescore.jpg"),
    getAssetPath("images/healthcaresystemsra.png"),
    getAssetPath("images/spotwork.png"),
    getAssetPath("images/stride.png")
  ];

  const projectDetails = [
    { title: "Meta", description: "Software Engineering Intern - Monetization\n(May 2025 - August 2025)" },
    { title: "Node App", description: "Software Engineering Intern - Internal Tools\n(January 2025 - April 2025)" },
    { title: "theScore", description: "Software Engineering Intern - Accounts\n(May 2024 - August 2024)" },
    { title: "Healthcare Systems R&A", description: "Software Engineering Intern - Machine Learning\n(September 2023 - December 2023)" },
    { title: "Spotwork", description: "Software Engineering Intern - Mobile\n(January 2023 - April 2023)" },
    { title: "Stride", description: "Software Engineering Intern - Product\n(May 2022 - August 2022)" }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : ""
        }`}
      >
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm md:text-xl font-semibold text-glow"
            >
              Sumanth Kumar
            </motion.h1>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-6 h-6 rounded-full bg-black dark:bg-white transition-colors duration-300 absolute left-1/2 -translate-x-1/2"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-4 md:space-x-8"
            >
              {["About", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs md:text-sm hover:text-accent transition-colors dark:text-white/80 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-sm text-accent mb-6 dark:text-white/60">Welcome</h2>
            <h1 
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-[#0EA5E9] via-[#33C3F0] to-[#4ADE80] bg-clip-text text-transparent dark:text-white dark:heading-glow dark:bg-none"
            >
             Hello, I'm Sumanth. Solving problems, one line at a time.
            </h1>
            <p className="text-xl text-accent max-w-3xl mx-auto mb-12 dark:text-white/60">
            Software at Meta for Summer 2025. Mechatronics at UWaterloo until April 2026.
            </p>
            <a
              href="#work"
              className="inline-flex items-center bg-[#0071e3] text-white px-6 py-3 rounded-full hover:bg-[#0077ED] transition-colors"
            >
              View my work
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-32 relative bg-gradient-to-b from-white via-primary-light to-primary-light dark:from-black dark:via-primary-dark dark:to-primary-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="reveal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 dark:text-white">About Me</h2>
              <p className="text-xl text-accent mb-12 dark:text-white/60">
              Hey, I'm Sumanth, a final-year Mechatronics Engineering student at the University of Waterloo and a seasoned software engineering intern (six times over). 
              I've built (and broken) my fair share of code at Meta, Node, theScore, Healthcare Systems R&A, Spotwork, and Stride, 
              so I like to think I know what I'm doing... most of the time.<br /><br />

              When I'm not coding, you'll find me playing or watching soccer (I support Tottenham, so I'm used to heartbreak), 
              gaming (mediocre at FIFA, decent at Rocket League, garbage at Fortnite), or convincing myself I'll go on a run later.
              I'm currently on the lookout for new-grad opportunities starting in 2026, so if you're hiring, let's chat! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 bg-primary-light dark:bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="reveal">
            <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projectDetails.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#161617] shadow-sm dark:shadow-white/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-accent-light dark:bg-accent/10">
                    <img 
                      src={projectImages[index]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-accent dark:text-white/60 whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-[#1D1D1F] text-white">
        <div className="container mx-auto px-6">
          <div className="reveal">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
              <p className="text-xl opacity-80 mb-12">
                Have a project in mind? Feel free to reach out!
              </p>
              <a
                href="mailto:sumanth.kumar@uwaterloo.ca"
                className="inline-flex items-center bg-[#0071e3] text-white px-6 py-3 rounded-full hover:bg-[#0077ED] transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 bg-[#1D1D1F] text-white border-t border-white/10">
        <div className="w-full px-6">
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-80">© 2025 Sumanth Kumar</p>
            <div className="space-x-6">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/sumanthkumar7494/" },
                { name: "GitHub", url: "https://github.com/SumanthK1" }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
