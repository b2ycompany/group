// src/components/navigation.tsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react"; // Adicionado React
import { useLanguage } from "@/contexts/language-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

// Logo para o menu mobile
import LogoMobileMenu from '@/components/assets/logocorp_redondo.png'; // SEU LOGO REDONDO

const scrollToSection = (sectionId: string, setIsOpen?: (isOpen: boolean) => void) => {
  console.log("[Navigation] Tentando scroll para:", sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    if (setIsOpen) setIsOpen(false);
  } else {
    console.warn("[Navigation] Elemento não encontrado para scroll:", sectionId);
  }
};

export function Navigation() {
  const { content, currentLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("hero-swiper");
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);


  const links = useMemo(() => [
    { id: "hero-swiper", label: content.nav.home },
    { id: "sobre-nos", label: content.nav.aboutUs },
    { id: "b2y-carbon", label: content.nav.b2yCarbon },
    { id: "outras-solucoes", label: content.nav.solutions },
    { id: "servicos-parcerias", label: content.nav.services },
    { id: "tecnologia", label: content.nav.technology },
    { id: "sustentabilidade", label: content.nav.sustainability },
    { id: "fale-conosco", label: content.nav.contact },
  ], [content.nav]);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 20) {
        setHasScrolled(true);
    } else {
        setHasScrolled(false);
    }

    let currentSectionId = "";
    const headerOffset = 150;

    for (let i = links.length - 1; i >= 0; i--) {
        const link = links[i];
        const sectionElement = document.getElementById(link.id);
        if (sectionElement) {
            const sectionRect = sectionElement.getBoundingClientRect();
            if (sectionRect.top <= headerOffset && sectionRect.bottom > headerOffset) {
                currentSectionId = link.id;
                break;
            }
        }
    }
    if (!currentSectionId && links.length > 0 && window.pageYOffset < 200) {
        currentSectionId = links[0].id;
    }
    
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight - 2) {
        currentSectionId = links[links.length -1].id;
    }

    setActiveSection(currentSectionId);
  }, [links]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, currentLanguage]);

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
                className={`p-2 rounded-md transition-colors duration-300 focus:outline-none ring-offset-transparent focus:ring-2 focus:ring-emerald-500/70
                            ${isOpen ? 'text-emerald-300' : (hasScrolled ? 'text-gray-100 hover:text-emerald-300' : 'text-gray-300 hover:text-emerald-300')}`}
                aria-label="Abrir menu"
            >
              <Menu size={30} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 bg-gray-950/90 backdrop-blur-2xl text-white border-l-2 border-emerald-500/30 w-[85vw] sm:w-[60vw] flex flex-col shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
                {/* CORREÇÃO AQUI: Usar LogoMobileMenu */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-800/30 border border-emerald-700/50">
                    <Image 
                        src={LogoMobileMenu} 
                        alt="B2Y Group Logo" 
                        width={48} 
                        height={48}
                    />
                </div>
                <SheetTrigger asChild>
                    <button className="text-gray-400 hover:text-emerald-300 p-2 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 rounded-md" aria-label="Fechar menu">
                        <X size={28} />
                    </button>
                </SheetTrigger>
            </div>
            <ul className="space-y-2 p-6 flex-grow overflow-y-auto">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id, setIsOpen)}
                    className={`flex items-center justify-between w-full text-left text-xl py-4 px-4 rounded-lg transition-all duration-200 ease-in-out group
                      ${activeSection === link.id
                        ? "text-emerald-300 bg-emerald-500/10 font-bold shadow-inner shadow-emerald-500/20 border-l-4 border-emerald-400"
                        : "text-gray-200 hover:text-emerald-300 hover:bg-gray-800/70"
                      }`}
                  >
                    {link.label}
                    <ChevronRight className={`w-6 h-6 transition-all duration-300 transform ${activeSection === link.id ? 'text-emerald-400 translate-x-1 opacity-100' : 'text-gray-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-1'}`} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-6 border-t border-gray-700/50 text-center">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} B2Y Group</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-x-1 lg:gap-x-2 xl:gap-x-3 items-center">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 relative px-2 py-2 group focus:outline-none focus:ring-1 focus:ring-emerald-500/50 rounded-md
                  ${activeSection === link.id
                    ? "text-emerald-300"
                    : (hasScrolled ? 'text-gray-100 hover:text-emerald-300' : 'text-gray-300 hover:text-emerald-300')
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transform transition-all duration-400 ease-out 
                  ${activeSection === link.id ? "w-full opacity-100" : "w-0 opacity-50 group-hover:w-3/4 group-hover:opacity-100"}
                `} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}