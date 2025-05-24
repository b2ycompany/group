// src/app/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import {
  Leaf, Globe, Users as UsersIcon, HeartPulse, Cpu, Building, Award,
  ShieldCheck, Zap, Network, Brain, ArrowRightCircle, BarChartBig, Code2, BriefcaseBusiness, DollarSign, UsersRound
  // Ícones removidos se não usados: BatteryCharging, Briefcase, Lightbulb, TrendingUp
  // Se precisar deles, descomente ou adicione-os de volta e use-os no JSX.
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { LanguageSelector } from '@/components/language-selector';
import { LoadingScene } from '@/components/loading-scene';
import { Navigation } from '@/components/navigation';
import Image from 'next/image';

// --- ASSETS ---
import LogoB2YGroup from '@/components/assets/B2Y BUSINESS 2 Y U.svg';
import ImagemHeroGrupo from '@/components/assets/high-tech-view-futuristic-earth.jpg';
import ImagemHeroCarbon from '@/components/assets/view-green-forest-trees-with-co2.jpg';
import ImagemHeroTecnologia from '@/components/assets/digital-screen-with-environment-day.jpg';
import FundoSobreNos from '@/components/assets/group-businesspeople-working-graph-office.jpg';
import MockupOuImagemB2YCarbon from '@/components/assets/view-green-forest-trees-with-co2.jpg';
import FundoSolucoes from '@/components/assets/3447494.jpg';
import FundoServicos from '@/components/assets/tech-people-trying-achieve-ambitious-sustainability-goals.jpg';
import FundoTecnologia from '@/components/assets/tech-people-trying-achieve-ambitious-sustainability-goals.jpg';
import FundoSustentabilidade from '@/components/assets/smart-farming-with-agriculture-iot.jpg';

import HeroVideoDialogComponents from '@/components/HeroVideoDialogPlay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface AppCardProps {
  icon: React.ReactElement<React.SVGAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  cta?: string;
  ctaLink?: string;
  className?: string;
}

const AppCard: React.FC<AppCardProps> = ({ icon, title, description, cta, ctaLink, className }) => (
  <div className={`relative flex flex-col h-full p-6 md:p-8 bg-gray-800/30 backdrop-blur-xl border border-emerald-500/20 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-400/40 hover:border-emerald-500/50 group ${className}`}>
    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/30 rounded-full mb-6 shrink-0 mx-auto border-2 border-emerald-500/30 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400">
      {React.cloneElement(icon, { 
        className: `w-10 h-10 text-emerald-300 transition-colors duration-300 group-hover:text-emerald-200 ${icon.props.className || ''}` 
      })}
    </div>
    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center tracking-tight group-hover:text-glow-emerald">{title}</h3>
    <p className="text-gray-300 text-md lg:text-lg flex-grow text-center leading-relaxed font-light group-hover:text-gray-200">{description}</p>
    {cta && ctaLink && (
      <button
        onClick={(e) => {
          if (ctaLink.startsWith("#")) {
            e.preventDefault();
            scrollToSectionGlobal(ctaLink.substring(1));
          } else {
            window.open(ctaLink, '_blank', 'noopener,noreferrer');
          }
        }}
        className="mt-8 block w-max mx-auto bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-emerald-400/50 transition-all transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900 futuristic-hover"
      >
        {cta} <ArrowRightCircle size={20} className="inline ml-2" />
      </button>
    )}
  </div>
);

const scrollToSectionGlobal = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

interface FeatureItem { title: string; description: string; }
interface TechPillarItem { title: string; description: string; }


const MainContent: React.FC = () => {
  const { content, currentLanguage } = useLanguage();
  console.log("[MainContent] Renderizando com idioma:", currentLanguage);

  const heroSlides = [
    { id: 'b2yGroup', title: content.hero.b2yGroup.title, description: content.hero.b2yGroup.description, image: ImagemHeroGrupo, buttonText: content.buttons.explore, buttonLink: 'sobre-nos' },
    { id: 'b2yCarbon', title: content.hero.b2yCarbon.title, description: content.hero.b2yCarbon.description, image: ImagemHeroCarbon, buttonText: content.buttons.learnMore, buttonLink: 'b2y-carbon' },
    { id: 'lionSolutions', title: content.hero.lionSolutions.title, description: content.hero.lionSolutions.description, image: ImagemHeroTecnologia, buttonText: content.buttons.discoverTech, buttonLink: 'tecnologia' },
  ];

  useEffect(() => {
    console.log("[MainContent] Conteúdo para nav.home (verificando atualização):", content.nav.home);
  }, [content.nav.home]);

  const b2yCarbonFeatures: FeatureItem[] = [content.b2yCarbon.feature1, content.b2yCarbon.feature2, content.b2yCarbon.feature3];
  const technologyItems: TechPillarItem[] = [content.technology.item1, content.technology.item2, content.technology.item3];
  const sustainabilityPillars: TechPillarItem[] = [content.sustainability.pillar1, content.sustainability.pillar2, content.sustainability.pillar3];


  return (
    <div className="text-gray-100 overflow-x-hidden">
      <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl z-40 shadow-2xl border-b border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <a href="#hero-swiper" onClick={(e) => { e.preventDefault(); scrollToSectionGlobal('hero-swiper'); }} className="cursor-pointer block transform transition-transform hover:scale-105">
              <Image src={LogoB2YGroup} alt="B2Y Group Logo" width={180} height={50} priority />
            </a>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="pt-20">
        <section id="hero-swiper" className="relative w-full h-[calc(100vh-80px)] shadow-lg">
           <div className="w-full h-full overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              pagination={{ clickable: true, dynamicBullets: true, renderBullet: (index, className) => `<span class="${className} !bg-emerald-400 !w-3 !h-3 !opacity-70 !rounded-full !mx-1 transition-all duration-300 hover:!opacity-100"></span>` }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="w-full h-full"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden group">
                  <div className="absolute inset-0">
                    <Image 
                        src={slide.image} 
                        alt={slide.title} 
                        fill 
                        className="object-cover brightness-50 group-hover:brightness-[0.65] transition-all duration-1000 ease-in-out transform group-hover:scale-105" 
                        priority={index === 0} 
                        sizes="100vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-black/60 backdrop-blur-lg p-6 sm:p-10 md:p-14 rounded-xl shadow-2xl text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl border border-white/10">
                      <h1 
                        key={`${slide.id}-title-${currentLanguage}`}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-emerald-400 drop-shadow-xl mb-5 md:mb-8 leading-tight animate-fadeInUp"
                        style={{ animationDelay: '0.2s' }}
                      >
                        {slide.title}
                      </h1>
                      <p 
                        className="text-md sm:text-lg md:text-xl text-white/90 mt-4 mb-8 md:mb-10 leading-relaxed animate-fadeInUp"
                        style={{ animationDelay: '0.5s' }}
                      >
                        {slide.description}
                      </p>
                      <button
                        onClick={() => scrollToSectionGlobal(slide.buttonLink)}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-md sm:text-lg font-semibold shadow-xl hover:shadow-emerald-400/50 transition-all transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 animate-fadeInUp futuristic-hover"
                        style={{ animationDelay: '0.8s' }}
                      >
                        {slide.buttonText} <ArrowRightCircle size={22} className="inline ml-2" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="sobre-nos" className="relative py-20 md:py-28 lg:py-36 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.07]">
            <Image src={FundoSobreNos} alt={content.about.title} fill className="object-cover" quality={100} sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/80 to-gray-950 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 md:space-y-12">
            <Network className="w-16 h-16 md:w-20 md:h-20 text-emerald-400 mx-auto animate-pulse" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight animate-fadeInUp animation-delay-100">{content.about.title}</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                <p className="animate-fadeInUp animation-delay-200">{content.about.text1}</p>
                <p className="animate-fadeInUp animation-delay-300">{content.about.text2}</p>
                {content.about.text3 && <p className="animate-fadeInUp animation-delay-400">{content.about.text3}</p>}
            </div>
            <div className="max-w-3xl lg:max-w-4xl mx-auto mt-10 md:mt-16 rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-400/30 animate-fadeInUp animation-delay-500">
              <HeroVideoDialogComponents.HeroVideoDialogDemo />
            </div>
          </div>
        </section>

        <section id="b2y-carbon" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-emerald-800/20 via-gray-950 to-green-800/20 text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
              <Award className="w-16 h-16 md:w-20 md:h-20 text-emerald-300 mx-auto shadow-lg rounded-full bg-emerald-500/20 p-3 animate-pulseFast" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-300 mt-6 tracking-tight animate-fadeInUp animation-delay-100">{content.b2yCarbon.mainTitle}</h2>
              <p className="text-lg md:text-xl mt-8 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light animate-fadeInUp animation-delay-200">{content.b2yCarbon.intro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="p-1 bg-gradient-to-br from-emerald-500/50 to-green-500/30 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] animate-fadeInUp animation-delay-300">
                <div className="bg-gray-900 p-4 rounded-[calc(1rem-4px)] relative aspect-[4/3]">
                    <Image src={MockupOuImagemB2YCarbon} alt="B2Y Carbon App" fill className="object-contain rounded-xl shadow-2xl mx-auto transition-transform duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw"/>
                </div>
              </div>
              <div className="space-y-8 animate-fadeInUp animation-delay-400">
                {b2yCarbonFeatures.map((feature, index) => ( // Não precisa mais de tipo explícito aqui, pois b2yCarbonFeatures já é tipado
                  <div key={index} className="p-8 bg-gray-800/50 backdrop-blur-md rounded-2xl border border-emerald-500/20 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-400/25 transform hover:-translate-y-1 futuristic-hover">
                    <h3 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg font-light">{feature.description}</p>
                  </div>
                ))}
                <button
                  onClick={() => alert('Ação para o B2Y Carbon CTA!')}
                  className="mt-10 w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-xl text-xl font-semibold shadow-xl hover:shadow-emerald-400/60 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-gray-950 futuristic-hover"
                >
                  {content.b2yCarbon.ctaButton} <span className="ml-2">›</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="outras-solucoes" className="relative py-20 md:py-28 lg:py-36 bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.05]">
                <Image src={FundoSolucoes} alt={content.otherSolutions.title} fill className="object-cover" quality={100} sizes="100vw"/>
            </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-950 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 md:space-y-20">
            <Zap className="w-16 h-16 md:w-20 md:h-20 text-emerald-400 mx-auto animate-pulseFast" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight animate-fadeInUp animation-delay-100">
              {content.otherSolutions.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              <AppCard className="futuristic-hover animate-fadeInUp animation-delay-200" icon={<BarChartBig />} title={content.solutions.b2ySales.title} description={content.solutions.b2ySales.description} cta={content.buttons.learnMore} ctaLink={content.solutions.b2ySales.link || "#"} />
              <AppCard className="futuristic-hover animate-fadeInUp animation-delay-300" icon={<BriefcaseBusiness />} title={content.solutions.jbJuridico.title} description={content.solutions.jbJuridico.description} cta={content.buttons.learnMore} ctaLink={content.solutions.jbJuridico.link || "#"} />
              <AppCard className="futuristic-hover animate-fadeInUp animation-delay-400" icon={<HeartPulse />} title={content.solutions.fthGestao.title} description={content.solutions.fthGestao.description} cta={content.buttons.learnMore} ctaLink={content.solutions.fthGestao.link || "#"} />
              <AppCard className="futuristic-hover animate-fadeInUp animation-delay-500" icon={<Brain />} title={content.solutions.geniusLoto.title} description={content.solutions.geniusLoto.description} cta={content.buttons.learnMore} ctaLink={content.solutions.geniusLoto.link || "#"} />
            </div>
          </div>
        </section>
        
        <section id="servicos-parcerias" className="relative py-20 md:py-28 lg:py-36 bg-gray-900/70 backdrop-blur-md text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.07]">
            <Image src={FundoServicos} alt={content.services.mainTitle} fill className="object-cover" quality={80} sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-emerald-900/40 to-gray-950/60 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building className="w-16 h-16 md:w-20 md:h-20 text-emerald-300 mx-auto shadow-lg rounded-full bg-emerald-500/20 p-3 animate-subtlePulse" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 mb-8 tracking-tight text-glow-emerald animate-fadeInUp">{content.services.mainTitle}</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 md:mb-20 text-gray-300 leading-relaxed font-light animate-fadeInUp animation-delay-200">{content.services.intro}</p>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="bg-gray-800/50 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl border border-emerald-500/25 futuristic-hover animate-fadeInUp animation-delay-400">
                <Code2 className="w-14 h-14 text-emerald-300 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-emerald-300 mb-6 tracking-tight">{content.services.development.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed font-light">{content.services.development.description}</p>
                <ul className="space-y-4 text-left text-gray-200 text-lg">
                  {content.services.development.items.map((item, index) => ( // Tipo string inferido
                    <li key={index} className="flex items-center">
                      <Zap size={22} className="text-emerald-400 mr-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl border border-emerald-500/25 futuristic-hover animate-fadeInUp animation-delay-600">
                <DollarSign className="w-14 h-14 text-emerald-300 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-emerald-300 mb-6 tracking-tight">{content.services.investment.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed font-light">{content.services.investment.description}</p>
                <ul className="space-y-4 text-left text-gray-200 text-lg">
                  {content.services.investment.items.map((item, index) => ( // Tipo string inferido
                    <li key={index} className="flex items-center">
                      <UsersRound size={22} className="text-emerald-400 mr-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-16 md:mt-20 animate-fadeInUp animation-delay-800">
              <button
                onClick={() => scrollToSectionGlobal('fale-conosco')}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xl sm:text-2xl px-12 py-5 sm:py-6 rounded-xl font-semibold transition-all shadow-2xl hover:from-emerald-400 hover:to-green-400 hover:shadow-emerald-300/60 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:ring-offset-4 focus:ring-offset-gray-950 futuristic-hover"
              >
                {content.buttons.partnerWithUs} <ArrowRightCircle size={26} className="inline ml-3" />
              </button>
            </div>
          </div>
        </section>

        <section id="tecnologia" className="py-20 md:py-28 lg:py-36 bg-gray-950/70 backdrop-blur-sm text-white">
           <div className="absolute inset-0 z-0 opacity-[0.08]">
                <Image src={FundoTecnologia} alt={content.technology.title} fill className="object-cover" quality={100} sizes="100vw"/>
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-emerald-900/30 to-gray-950/50 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Cpu className="w-16 h-16 md:w-20 md:h-20 text-emerald-300 mx-auto shadow-lg rounded-full bg-emerald-500/20 p-3" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 mb-8 tracking-tight animate-fadeInUp animation-delay-100">{content.technology.title}</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 md:mb-20 text-gray-300 leading-relaxed font-light animate-fadeInUp animation-delay-200">{content.technology.subtitle}</p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {technologyItems.map((item, index) => ( // Tipo TechPillarItem já definido
                <div key={index} className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-emerald-400/25 futuristic-hover animate-fadeInUp" style={{animationDelay: `${(index * 150) + 300}ms`}}>
                   {index === 0 && <Brain className="w-12 h-12 text-emerald-300 mx-auto mb-5" />}
                   {index === 1 && <ShieldCheck className="w-12 h-12 text-emerald-300 mx-auto mb-5" />}
                   {index === 2 && <Zap className="w-12 h-12 text-emerald-300 mx-auto mb-5" />}
                  <h3 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sustentabilidade" className="relative py-20 md:py-28 lg:py-36 bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-[0.06]">
            <Image src={FundoSustentabilidade} alt={content.sustainability.mainTitle} fill className="object-cover" quality={100} sizes="100vw"/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-green-950/70 via-gray-900/60 to-emerald-950/70 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 md:gap-16 text-center text-white">
            <Globe className="w-16 h-16 md:w-20 md:h-20 text-emerald-400 mx-auto animate-spinSlow" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-fadeInUp animation-delay-100">
              {content.sustainability.mainTitle}
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light animate-fadeInUp animation-delay-200">
              {content.sustainability.introText}
            </p>
            <div className="grid gap-8 md:gap-12 sm:grid-cols-1 md:grid-cols-3 mt-8">
              {sustainabilityPillars.map((pillar, index) => ( // Tipo TechPillarItem já definido
                <div key={index} className="flex flex-col p-8 bg-black/50 backdrop-blur-xl border border-emerald-500/30 rounded-3xl shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 transform hover:scale-105 futuristic-hover animate-fadeInUp" style={{animationDelay: `${(index * 150) + 300}ms`}}>
                  <div className="mb-6 flex items-center justify-center rounded-full bg-emerald-500/20 p-4 w-20 h-20 mx-auto border-2 border-emerald-500/40">
                    {index === 0 && <Zap className="size-10 text-emerald-300" />}
                    {index === 1 && <Leaf className="size-10 text-emerald-300" />}
                    {index === 2 && <Network className="size-10 text-emerald-300" />}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fale-conosco" className="py-20 md:py-28 lg:py-36 bg-gray-950/80 backdrop-blur-sm text-white">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <UsersIcon className="w-16 h-16 md:w-20 md:h-20 text-emerald-400 mx-auto" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 mb-8 tracking-tight animate-fadeInUp animation-delay-100">{content.contact.title}</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 md:mb-16 text-gray-300 leading-relaxed font-light animate-fadeInUp animation-delay-200">{content.contact.subtitle}</p>
            <div className="mt-10 animate-fadeInUp animation-delay-300">
              <a
                href="mailto:contato@b2ygroup.com"
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xl sm:text-2xl px-12 py-5 sm:py-6 rounded-xl font-semibold transition-all shadow-2xl hover:shadow-emerald-400/60 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:ring-offset-4 focus:ring-offset-gray-950 futuristic-hover"
              >
                {content.buttons.sendEmail || "Envie Sua Mensagem"} <span className="ml-2 text-2xl">›</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'language' | 'loading' | 'main'>('language');
  
  useEffect(() => {
    // MANTENHA COMENTADO PARA TESTAR O FLUXO COMPLETO
    // setCurrentStep('main'); 
  }, []);

  const handleLanguageSelected = () => setCurrentStep('loading');
  const handleLoadingComplete = () => setCurrentStep('main');

  if (currentStep === 'language') return <LanguageSelector onLanguageSelect={handleLanguageSelected} />;
  if (currentStep === 'loading') return <LoadingScene onLoadingComplete={handleLoadingComplete} />;
  return <MainContent />;
};

export default Page;