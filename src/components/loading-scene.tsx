'use client'

import { useEffect } from "react"
import { Car, Leaf, Battery } from "lucide-react"
import gsap from "gsap"

interface LoadingSceneProps {
  onLoadingComplete: () => void
}

export function LoadingScene({ onLoadingComplete }: LoadingSceneProps) {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Animações de rotação circular para os elementos
    tl.to(".loading-container", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.out"
    })
      .to(".spinning-background", {
        rotation: 360,
        duration: 6,
        repeat: -1,
        ease: "linear"
      })
      .to(".spinning-element", {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear"
      })

      // Car (Movimento circular ao redor do centro)
      .to(".spinning-car", {
        rotation: 360,  // Gira o carro
        x: "50vw",      // Move o carro para a direita
        y: "50vh",      // Move o carro para baixo
        duration: 5,
        repeat: -1,
        transformOrigin: "center center",
        ease: "linear"
      })

      // Leaf (Movimento circular ao redor do centro)
      .to(".orbiting-leaf", {
        rotation: 360,  // Gira a folha
        x: "50vw",      // Move a folha para a direita
        y: "50vh",      // Move a folha para baixo
        duration: 5,
        repeat: -1,
        transformOrigin: "center center",
        ease: "linear"
      })

      // Battery (Movimento circular ao redor do centro)
      .to(".orbiting-battery", {
        rotation: 360,  // Gira a bateria
        x: "50vw",      // Move a bateria para a direita
        y: "50vh",      // Move a bateria para baixo
        duration: 5,
        repeat: -1,
        transformOrigin: "center center",
        ease: "linear"
      })

    // Inicia a animação
    tl.play();

    //  fim do carregamento após 3 segundos
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 3000);

    return () => {
      clearTimeout(timer);
      tl.kill(); // Limpa a animação ao desmontar o componente
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-emerald-800 to-emerald-600 z-50 flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center opacity-0 loading-container">
        {/* Spinning circle background */}
        <div className="absolute inset-0 rounded-full bg-emerald-700/50 spinning-background" />

        {/* Main spinning container */}
        <div className="relative p-8 rounded-full bg-emerald-700 shadow-lg spinning-element">
          <Car className="w-12 h-12 text-emerald-100 spinning-car" />
        </div>

        {/* Orbiting elements */}
        <div className="absolute top-0 -mt-4 orbiting-leaf">
          <Leaf className="w-6 h-6 text-emerald-300" />
        </div>
        <div className="absolute bottom-0 -mb-4 orbiting-battery">
          <Battery className="w-6 h-6 text-emerald-300" />
        </div>
      </div>

      {/* Loading text */}
      <div className="mt-8 text-emerald-100 font-medium">
        <div className="flex items-center gap-2">
          <span className="animate-pulse">Carregando</span>
          <span className="flex gap-1">
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>
      </div>
    </div>
  )
}
