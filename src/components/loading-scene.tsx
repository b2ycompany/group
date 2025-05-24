// src/components/loading-scene.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// Usando seu logo redondo
import LogoB2YSplash from '@/components/assets/logocorp_redondo.png'; 
import { Zap, Leaf, Cpu, Lightbulb, Network, HardDrive, Brain, ShieldCheck } from 'lucide-react';

interface LoadingSceneProps {
  onLoadingComplete: () => void;
}

const bootSequenceMessages = [
  { text: "SYSTEM CORE BOOTING...", icon: HardDrive, duration: 700 },
  { text: "B2Y NEURAL NET ONLINE", icon: Brain, duration: 800 },
  { text: "LION SOLUTIONS ENGINE SYNCED", icon: Zap, duration: 800 },
  { text: "ECO-ALGORITHMS ACTIVATED (B2Y CARBON)", icon: Leaf, duration: 900 },
  { text: "INNOVATION MATRIX CALIBRATING (PORTFOLIO)", icon: Lightbulb, duration: 900 },
  { text: "QUANTUM DATASTREAM ESTABLISHED", icon: Network, duration: 1000 },
  { text: "SECURITY PROTOCOLS VERIFIED", icon: ShieldCheck, duration: 800},
  { text: "REALITY ENGINE INITIALIZING...", icon: Cpu, duration: 1000 },
];

const logoMaterializationDuration = 1200;
const initialDelayBeforeMessages = logoMaterializationDuration + 300;
const totalMessagesDuration = bootSequenceMessages.reduce((acc, msg) => acc + msg.duration, 0);
const finalBuffer = 500;
const totalCalculatedSplashDuration = initialDelayBeforeMessages + totalMessagesDuration + finalBuffer;

export function LoadingScene({ onLoadingComplete }: LoadingSceneProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [logoVisible, setLogoVisible] = useState(false);
  const [progressBarVisible, setProgressBarVisible] = useState(false);

  useEffect(() => {
    const logoAppearTimer = setTimeout(() => setLogoVisible(true), 200);
    const showProgressBarTimer = setTimeout(() => setProgressBarVisible(true), initialDelayBeforeMessages - 400);

    let accumulatedTimeForMessages = initialDelayBeforeMessages;
    const messageTimeouts: NodeJS.Timeout[] = [];

    bootSequenceMessages.forEach((msg, index) => {
      const timeout = setTimeout(() => {
        setCurrentMessageIndex(index);
      }, accumulatedTimeForMessages);
      messageTimeouts.push(timeout);
      accumulatedTimeForMessages += msg.duration;
    });

    const completeTimeout = setTimeout(() => {
      onLoadingComplete();
    }, totalCalculatedSplashDuration); 

    return () => {
      clearTimeout(logoAppearTimer);
      clearTimeout(showProgressBarTimer);
      messageTimeouts.forEach(clearTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  const ActiveMessage = currentMessageIndex >= 0 && currentMessageIndex < bootSequenceMessages.length 
                        ? bootSequenceMessages[currentMessageIndex] 
                        : null;
  
  const calculateProgress = () => {
    if (!progressBarVisible || currentMessageIndex < 0) return 0;
    if (ActiveMessage) {
        return ((currentMessageIndex + 1) / bootSequenceMessages.length) * 100;
    }
    return ((currentMessageIndex +1 ) / bootSequenceMessages.length) * 100;
  };
  const progressBarWidth = calculateProgress();

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none animate-fadeIn" style={{ animationDuration: '1.5s' }}>
        <div className="holographic-grid"></div>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <div
            key={`splash-particle-${i}`}
            className="absolute rounded-full animate-splashParticle"
            style={{
              width: `${Math.random() * 2.5 + 0.5}px`,
              height: `${Math.random() * 2.5 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(16, 185, 129, ${Math.random() * 0.4 + 0.2})`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className={`relative z-20 flex flex-col items-center text-center px-4 w-full`}>
        <div 
            className={`mb-10 md:mb-12 transform transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] 
                        ${logoVisible ? 'opacity-100 scale-100 blur-0 animate-logoPulseSlight' : 'opacity-0 scale-90 blur-md'}`}
        >
          {/* Wrapper para o logo redondo e tamanho ajustado */}
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden flex items-center justify-center 
                          bg-gray-900/20 backdrop-blur-sm border-2 border-emerald-500/60 shadow-2xl animate-subtlePulse" 
               style={{animationDelay: '1s'}}> 
            <Image 
              src={LogoB2YSplash} 
              alt="B2Y Group & Lion Solutions" 
              width={160} // Ajuste para o conteúdo do seu PNG redondo
              height={160} // Manter proporção 1:1 para círculo
              priority 
              className="filter_custom_glow p-2" // Adicione um pequeno padding se o PNG não tiver respiro interno
            />
          </div>
        </div>

        <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden w-full max-w-lg md:max-w-xl mb-8">
          {bootSequenceMessages.map((msg, index) => (
             <div
              key={msg.text + index}
              className={`absolute flex items-center justify-center text-md md:text-lg text-emerald-300 font-mono tracking-widest transition-opacity duration-300 ease-in-out
                          ${index === currentMessageIndex ? 'opacity-100 animate-scanlineRevealInternal' : 'opacity-0'}`}
              style={{ animationDuration: `${msg.duration * 0.00085}s` }}
            >
              {msg.icon && <msg.icon size={20} className="mr-3 text-emerald-400 shrink-0" />}
              <span className="whitespace-nowrap">{msg.text}</span>
            </div>
          ))}
        </div>
        
        <div 
          className={`w-3/4 max-w-md h-2.5 bg-gray-800/60 rounded-full overflow-hidden border border-emerald-700/50 shadow-inner transition-opacity duration-500 delay-1000 ${progressBarVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 rounded-full shadow-[0_0_10px_theme('colors.emerald.400'),_inset_0_1px_1px_theme('colors.green.700/50')]"
            style={{ 
                width: `${progressBarWidth}%`,
                transition: `width ${bootSequenceMessages[0]?.duration ? (bootSequenceMessages[0].duration * 0.7) : 700}ms cubic-bezier(0.65, 0, 0.35, 1)` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}