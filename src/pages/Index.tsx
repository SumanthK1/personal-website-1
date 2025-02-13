import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-semibold"
            >
              John Doe
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-8"
            >
              {["About", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-accent transition-colors"
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
            <h2 className="text-sm text-accent mb-6">Welcome to my portfolio</h2>
            <h1 
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-[#0EA5E9] via-[#33C3F0] to-[#4ADE80] text-transparent bg-clip-text"
            >
              Creating digital experiences that inspire and delight.
            </h1>
            <p className="text-xl text-accent max-w-2xl mx-auto mb-12">
              I'm a designer and developer passionate about crafting beautiful, functional websites and applications.
            </p>
            <a
              href="#work"
              className="inline-flex items-center text-[#0071e3] px-8 py-4 rounded-full border-2 border-[#0071e3] bg-white hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              View my work
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-32 relative bg-gradient-to-b from-white via-primary-light to-primary-light">
        <div className="container mx-auto px-6">
          <div className="reveal">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-xl text-accent mb-12">
                I combine technical expertise with creative vision to build
                digital solutions that make a difference. With years of experience
                in design and development, I bring ideas to life through clean,
                efficient code and thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="reveal">
            <h2 className="text-4xl font-bold mb-16 text-center">Selected Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-accent-light"></div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                    <p className="text-accent">
                      A brief description of the project and its impact.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="reveal">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
              <p className="text-xl opacity-80 mb-12">
                Have a project in mind? Let's create something amazing together.
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

      <footer className="py-8 bg-primary text-white border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-80">© 2024 John Doe. All rights reserved.</p>
            <div className="space-x-6">
              {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {platform}
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
