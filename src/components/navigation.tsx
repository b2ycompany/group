"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Sheet,  SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu} from "lucide-react";
import Logo from "@/components/assets/Group 26620.svg";
import Image from "next/image";
import { ComponentSocialMedia } from "./social";

export function Navigation() {
  const { content } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const links = [
    { id: "hero", label: content.nav.home },
    { id: "about", label: content.nav.about },
    { id: "apps", label: content.nav.apps },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="text-white p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6 bg-gray-900 text-white">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src={Logo} alt="Logo" className="w-32 h-auto" />
            </div>

            <ul className="space-y-6 text-center text-white">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-xl py-3 rounded-md transition-all duration-300 
                ${activeSection === link.id ? "text-emerald-300 bg-gray-800" : "hover:text-emerald-300"}
              `}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-center gap-6 mt-8 text-black">
              <ComponentSocialMedia />
            </div>
          </SheetContent>

          
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex gap-6 items-center">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-white transition-all duration-300 relative px-2 py-1
                  ${activeSection === link.id ? "text-emerald-300 shadow-glow" : "hover:text-emerald-300"}
                `}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-300 rounded-full" />
                )}
              </button>
            </li>
          ))}
          <div className="flex gap-4">
            <ComponentSocialMedia />
          </div>
        </ul>
      </div>
    </nav>
  );
}
