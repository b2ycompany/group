'use client'

import { useState } from 'react'
import { Leaf, Vibrate, ShoppingBag, Globe, BatteryCharging } from 'lucide-react'
import { LanguageProvider } from '@/contexts/language-context'
import { LanguageSelector } from '@/components/language-selector'
import { LoadingScene } from '@/components/loading-scene'
import { Navigation } from '@/components/navigation'
import { useLanguage } from '@/contexts/language-context'

import Background from '@/components/assets/smart-farming-with-agriculture-iot.jpg'
import Background1 from '@/components/assets/3447494.jpg'
import Background2 from '@/components/assets/digital-screen-with-environment-day.jpg'
import Team from "@/components/assets/tech-people-trying-achieve-ambitious-sustainability-goals.jpg"
import Back from "@/components/assets/Home.jpg"
import Users from "@/components/assets/Apoie-se.png"
import Grupo from "@/components/assets/group-businesspeople-working-graph-office.jpg"
import Logo from '@/components/assets/Group 26620.svg'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import HeroVideoDialogPlay from '@/components/HeroVideoDialogPlay'


interface AppCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Dados do slider
const slides = [
  {
    title: 'REVOLUÇÃO TECNOLÓGICA',
    description: 'Experimente o futuro com inovação de ponta. Tecnologia e inteligência redefinindo limites.',
    image: Background,
  },
  {
    title: 'INOVAÇÃO SEM FRONTEIRAS',
    description: 'Descubra soluções que transformam a maneira como vivemos e trabalhamos.',
    image: Background1,
  },
  {
    title: 'O FUTURO É AGORA',
    description: 'A tecnologia do amanhã ao seu alcance hoje. Conecte-se com a revolução digital.',
    image: Background2,
  },
];

const AppCard: React.FC<AppCardProps> = ({ icon, title, description }) => (
  <div className="relative p-6 md:p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center justify-center w-16 h-16 bg-emerald-600/20 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-lg">{description}</p>
  </div>
)

const MainContent: React.FC = () => {
  const { content } = useLanguage()

  return (
    <div className="min-h-screen  rounded-md">
      <header className="fixed top-0 w-full bg-emerald-800/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="mt-3">
            <Image src={Logo} alt="Logo" width={250} height={250} />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="pt-16">
        <section className="relative w-full h-[90vh] rounded-xl shadow-md">
          <div className="w-full h-full overflow-hidden rounded-xl"> {/* Evita o scroll horizontal */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="w-full h-full "
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                  />

                  <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl text-center max-w-3xl border border-white/20">
                      <h1 className="text-4xl md:text-5xl font-bold text-[#62D84E] drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white mt-4">
                        {slide.description}
                      </p>
                      <button
                        className="mt-6 bg-[#62D84E] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-emerald-500 transition-transform transform hover:scale-105"
                      >
                        Explorar Agora 🚀
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>



        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 shadow-md mr-3 ml-3 mt-3 rounded-xl overflow-hidden">
          {/* Imagem de fundo */}
          <Image
            src={Back}
            alt="Descrição da imagem"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 rounded-xl "
          />

          {/* Overlay para melhorar a legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004d2d] to-[#1b5e20] opacity-80 rounded-xl"></div>

          {/* Conteúdo */}
          <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">{content.aboutTitle}</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">{content.aboutText}</p>
            <HeroVideoDialogPlay.HeroVideoDialogDemo />
          </div>
        </section>

        <section id="apps" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 shadow-md mr-3 ml-3 mt-3 rounded-xl overflow-hidden">
          {/* Imagem de fundo */}
          <Image
            src={Users}
            alt="Descrição da imagem"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 rounded-xl"
          />

          {/* Overlay para melhorar a legibilidade do conteúdo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004d2d] to-[#1b5e20] opacity-80 rounded-xl"></div>

          {/* Conteúdo */}
          <div className="relative z-10 container mx-auto px-4 text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              {content.appsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <AppCard
                icon={<Leaf className="w-10 h-10 text-emerald-400" />}
                title={content.apps.carbon.title}
                description={content.apps.carbon.description}
              />
              <AppCard
                icon={<Vibrate className="w-10 h-10 text-yellow-400" />}
                title={content.apps.frequency.title}
                description={content.apps.frequency.description}
              />
              <AppCard
                icon={<ShoppingBag className="w-10 h-10 text-blue-400" />}
                title={content.apps.sales.title}
                description={content.apps.sales.description}
              />
              <AppCard
                icon={<ShoppingBag className="w-10 h-10 text-blue-400" />}
                title={content.apps.sales.title}
                description={content.apps.sales.description}
              />
              <AppCard
                icon={<ShoppingBag className="w-10 h-10 text-blue-400" />}
                title={content.apps.sales.title}
                description={content.apps.sales.description}
              />
              <AppCard
                icon={<ShoppingBag className="w-10 h-10 text-blue-400" />}
                title={content.apps.sales.title}
                description={content.apps.sales.description}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-32 rounded-xl overflow-hidden mx-3 shadow-md mr-3 ml-3 mt-3">
          {/* Imagem de fundo */}
          <Image
            src={Grupo}
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 rounded-xl"
          />

          {/* Overlay para melhorar a legibilidade do conteúdo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004d2d] to-[#1b5e20] opacity-80 rounded-xl"></div>

          {/* Conteúdo */}
          <div className="relative z-10 container flex flex-col gap-10 sm:gap-16 md:gap-20 text-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white tracking-wide animate__animated animate__fadeIn">
                A Inovação Começa Aqui
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto">
                Empoderando empresas por meio de tecnologia de ponta e design. Junte-se a nós para construir um futuro sustentável hoje.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 relative p-6 sm:p-8 backdrop-blur-lg">
              <div className="relative p-8 bg-gradient-to-br from-[#2f6a4f] to-[#004d2d] backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={Team}
                  alt="Equipe"
                  className="max-w-full max-h-96 rounded-2xl object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col justify-between gap-10 rounded-2xl bg-transparent p-8">
                <div className="relative p-8 bg-gradient-to-br from-[#006400] to-[#004d2d] backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                  <p className="text-sm text-gray-300">NOSSA VISÃO</p>
                  <p className="text-lg font-semibold text-white">
                    Aproveitar a tecnologia para promover a sustentabilidade e criar um impacto positivo no meio ambiente. Um futuro mais verde começa agora.
                  </p>
                </div>
                <div className="relative p-8 bg-gradient-to-br from-[#006400] to-[#004d2d] backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                  <p className="text-sm text-gray-300">NOSSA ABORDAGEM</p>
                  <p className="text-lg font-semibold text-white">
                    Integrando tecnologias sustentáveis com estratégias de negócios para impulsionar mudanças positivas para o planeta e as futuras gerações.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate__animated animate__fadeInUp">
                Pioneirismo em Soluções Tecnológicas Sustentáveis
              </h2>
              <p className="text-gray-300 animate__animated animate__fadeInUp">
                Acreditamos no poder da tecnologia para criar um futuro sustentável. Veja como estamos moldando o meio ambiente com inovação.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 mr-5 ml-5">
              <div className="flex flex-col p-8 bg-gradient-to-br from-[#2f6a4f] to-[#004d2d] backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center">
                <div className="mb-5 flex items-center justify-center rounded-2xl bg-white/20 p-4">
                  <Globe className="size-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Inovação para um Amanhã Mais Verde</h3>
                <p className="text-gray-300">
                  Nossas soluções tecnológicas sustentáveis são projetadas para reduzir a pegada ambiental e promover práticas ecológicas em diversos setores.
                </p>
              </div>
              <div className="flex flex-col p-8 bg-gradient-to-br from-[#1b5e20] to-[#006400] backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center">
                <div className="mb-5 flex items-center justify-center rounded-2xl bg-white/20 p-4">
                  <Leaf className="size-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Empoderando a Mudança Sustentável</h3>
                <p className="text-gray-300">
                  Combinando tecnologia com consciência ambiental, entregamos soluções que promovem a sustentabilidade de longo prazo.
                </p>
              </div>
              <div className="flex flex-col p-8 bg-gradient-to-br from-[#006400] to-[#004d2d] backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out text-center">
                <div className="mb-5 flex items-center justify-center rounded-2xl bg-white/20 p-4">
                  <BatteryCharging className="size-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Liderando com Tecnologia Verde</h3>
                <p className="text-gray-300">
                  Estamos comprometidos em aproveitar as tecnologias verdes de ponta para melhorar a eficiência e minimizar o impacto ambiental.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'language' | 'loading' | 'main'>('language')

  return (
    <LanguageProvider>
      <div className="relative">
        {currentStep === 'language' && <LanguageSelector onLanguageSelect={() => setCurrentStep('loading')} />}

        {currentStep === 'loading' && <LoadingScene onLoadingComplete={() => setCurrentStep('main')} />}

        {currentStep === 'main' && <MainContent />}
      </div>
    </LanguageProvider>
  )
}

export default Page
