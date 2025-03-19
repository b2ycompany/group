

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "pt-BR" | "en-US" | "es-ES"

interface ContentData {
  heroTitle: string
  heroDescription: string
  aboutTitle: string
  aboutText: string
  appsTitle: string
  apps: {
    carbon: { title: string; description: string }
    frequency: { title: string; description: string }
    sales: { title: string; description: string }
  }
  contact: {
    title: string
    text: string
    address: {
      building: string
      street: string
      floor: string
      city: string
      postalCode: string
    }
  }
  footerText: string
  nav: {
    home: string
    about: string
    apps: string
    contact: string  
  }
}

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  content: ContentData
}

const contentData: Record<Language, ContentData> = {
  "pt-BR": {
    heroTitle: "Tecnologia Sustentável",
    heroDescription: "Solucionando desafios com inovação e respeito ao meio ambiente",
    aboutTitle: "Sobre Nós",
    aboutText:
      "A Lion Solution é líder em soluções tecnológicas que promovem sustentabilidade e impacto positivo no meio ambiente.",
    appsTitle: "Nossos Aplicativos",
    apps: {
      carbon: {
        title: "B2Y Carbon",
        description: "Gerencie os quilômetros rodados e acompanhe o sequestro de carbono.",
      },
      frequency: {
        title: "B2Y Frequency",
        description: "Aplicativo de vibrações terapêuticas para bem-estar.",
      },
      sales: {
        title: "B2Y Sales",
        description: "Classificados para vendas, compras e investimentos em negócios.",
      },
    },
    contact: {
      title: "Contato",
      text: "Entre em contato conosco através de nossas redes sociais e canais oficiais.",
      address: {
        building: "Torre Jacarandá",
        street: "Av. Marcos Penteado de Ulhoa Rodrigues, 939",
        floor: "8º andar",
        city: "Alphaville, Barueri - SP",
        postalCode: "06460-040",
      },
    },
    footerText: "© 2025 Lion Solution | Tecnologia Sustentável para um Mundo Melhor",
    nav: {
      home: "Início",
      about: "Sobre",
      apps: "Aplicativos",
      contact: "Contato",
    },
  },
  "en-US": {
    heroTitle: "Sustainable Technology",
    heroDescription: "Solving challenges with innovation and environmental respect",
    aboutTitle: "About Us",
    aboutText:
      "Lion Solution is a leader in technological solutions that promote sustainability and positive environmental impact.",
    appsTitle: "Our Applications",
    apps: {
      carbon: {
        title: "B2Y Carbon",
        description: "Manage mileage and track carbon sequestration.",
      },
      frequency: {
        title: "B2Y Frequency",
        description: "Therapeutic vibration application for wellness.",
      },
      sales: {
        title: "B2Y Sales",
        description: "Classifieds for sales, purchases, and business investments.",
      },
    },
    contact: {
      title: "Contact",
      text: "Contact us through our social networks and official channels.",
      address: {
        building: "Torre Jacarandá",
        street: "Av. Marcos Penteado de Ulhoa Rodrigues, 939",
        floor: "8th floor",
        city: "Alphaville, Barueri - SP",
        postalCode: "06460-040",
      },
    },
    footerText: "© 2025 Lion Solution | Sustainable Technology for a Better World",
    nav: {
      home: "Home",
      about: "About",
      apps: "Apps",
      contact: "Contact",
    },
  },
  "es-ES": {
    heroTitle: "Tecnología Sostenible",
    heroDescription: "Resolviendo desafíos con innovación y respeto al medio ambiente",
    aboutTitle: "Sobre Nosotros",
    aboutText:
      "Lion Solution es líder en soluciones tecnológicas que promueven la sostenibilidad y un impacto positivo en el medio ambiente.",
    appsTitle: "Nuestras Aplicaciones",
    apps: {
      carbon: {
        title: "B2Y Carbon",
        description: "Gestione el kilometraje y rastree el secuestro de carbono.",
      },
      frequency: {
        title: "B2Y Frequency",
        description: "Aplicación de vibración terapéutica para el bienestar.",
      },
      sales: {
        title: "B2Y Sales",
        description: "Clasificados para ventas, compras e inversiones comerciales.",
      },
    },
    contact: {
      title: "Contacto",
      text: "Contáctenos a través de nuestras redes sociales y canales oficiales.",
      address: {
        building: "Torre Jacarandá",
        street: "Av. Marcos Penteado de Ulhoa Rodrigues, 939",
        floor: "Piso 8",
        city: "Alphaville, Barueri - SP",
        postalCode: "06460-040",
      },
    },
    footerText: "© 2025 Lion Solution | Tecnología Sostenible para un Mundo Mejor",
    nav: {
      home: "Inicio",
      about: "Sobre",
      apps: "Aplicaciones",
      contact: "Contacto",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt-BR")

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        content: contentData[currentLanguage],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

