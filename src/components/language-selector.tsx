// src/components/language-selector.tsx
'use client';

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useLanguage, type Language } from '@/contexts/language-context';

// ASSET DE FUNDO - Verifique se este caminho está correto
import FundoSeletor from "@/components/assets/digital-screen-with-environment-day.jpg";

interface LanguageSelectorProps {
  onLanguageSelect: () => void;
}

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "pt-BR", name: "Português (Brasil)", flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
  { code: "en-US", name: "English (USA)", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
  { code: "es-ES", name: "Español (España)", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
];

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const { setLanguage, currentLanguage } = useLanguage();

  const handleSelect = (langCode: Language) => {
    console.log(`[LanguageSelector] Idioma ATUAL no contexto ANTES de setar: ${currentLanguage}`);
    console.log(`[LanguageSelector] Botão clicado, tentando definir idioma para: ${langCode}`);
    setLanguage(langCode);
    console.log("[LanguageSelector] Chamando onLanguageSelect para mudar a etapa na Page...");
    onLanguageSelect();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={FundoSeletor}
          alt="Tecnologia e Natureza se encontram no ecossistema B2Y"
          fill // NOVA PROP
          className="object-cover opacity-30 blur-sm" // NOVA CLASSE
          priority
          sizes="100vw" // Adicionado para otimização com 'fill'
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-950/80 via-emerald-950/60 to-gray-950/80"></div>
      <div className="relative z-20 text-center space-y-10 md:space-y-12 px-4 animate-fadeInUp">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-glow-emerald tracking-tight">
            Conectando Realidades, <span className="text-emerald-400">Desbravando o Amanhã</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Escolha seu portal de imersão no universo de inovação B2Y Group & Lion Solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
          {languages.map((lang) => (
            <LanguageButton
              key={lang.code}
              flagUrl={lang.flag}
              languageName={lang.name}
              onClick={() => handleSelect(lang.code)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface LanguageButtonProps {
  flagUrl: string;
  languageName: string;
  onClick: () => void;
}

function LanguageButton({ flagUrl, languageName, onClick }: LanguageButtonProps) {
  return (
    <Card
      className="group p-1 bg-white/5 backdrop-blur-lg border border-emerald-500/40 rounded-xl shadow-2xl hover:bg-emerald-500/15 transition-all duration-300 cursor-pointer w-52 transform hover:scale-110 hover:shadow-emerald-400/30"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <div className="w-full space-y-4 p-4">
        <div className="relative h-28 w-full border-2 border-gray-700/60 group-hover:border-emerald-400/70 rounded-lg overflow-hidden shadow-inner transition-all duration-300">
          <Image
            src={flagUrl}
            alt={`${languageName} flag`}
            fill // NOVA PROP
            className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105" // NOVA CLASSE
            sizes="(max-width: 640px) 52w, (max-width: 1024px) 33vw, 208px" // Ajuste 'sizes' conforme necessário
            // unoptimized={flagUrl.endsWith('.svg')} // Pode ser necessário para SVGs remotos
          />
        </div>
        <p className="text-gray-200 font-semibold text-center text-lg group-hover:text-emerald-300 transition-colors">
          {languageName}
        </p>
      </div>
    </Card>
  );
}