"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/contexts/language-context"
import background from "@/components/assets/view-green-forest-trees-with-co2.jpg"
interface LanguageOption {
  code: Language
  label: string
  flag: string
}

const languages: LanguageOption[] = [
  {
    code: "pt-BR",
    label: "Português",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  },
  {
    code: "en-US",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
  {
    code: "es-ES",
    label: "Español",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_First_Spanish_Republic.svg/1024px-Flag_of_the_First_Spanish_Republic.svg.png",
  },
]

interface LanguageSelectorProps {
  onLanguageSelect: () => void
}

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const { setLanguage } = useLanguage()

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang)
    onLanguageSelect()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Usando Next.js Image para o fundo */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Fundo Futurista"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      <div className="text-center space-y-8 px-6 py-8 bg-black/60 rounded-2xl shadow-xl z-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-300">
            Bem-vindo à Lion Solution
          </h1>
          <p className="text-lg text-white/80">Selecione seu idioma:</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center animate-fadeIn">
          {languages.map((lang) => (
            <Card
              key={lang.code}
              className="p-4 hover:scale-110 hover:rotate-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out cursor-pointer rounded-xl border-2 border-transparent bg-gradient-to-r from-green-600 to-lime-300 bg-opacity-20 backdrop-blur-lg filter"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <div className="w-32 space-y-3">
                <div className="relative h-24 w-full border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={lang.flag || "/placeholder.svg"}
                    alt={`${lang.label} flag`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <p className="text-gray-300 font-semibold">{lang.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
