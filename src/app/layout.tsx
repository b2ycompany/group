// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import FooterComponent from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "B2Y Group | Vanguarda em Soluções Tecnológicas e Sustentabilidade Digital",
  description:
    "B2Y Group e Lion Solutions: Cocriando o futuro com Inteligência Artificial, Blockchain e tecnologias imersivas para um impacto socioambiental positivo e regenerativo.",
  openGraph: {
    title: "B2Y Group | Pioneirismo em Tecnologia Sustentável e Inovação Digital",
    description:
      "Explore o ecossistema B2Y: Da neutralização de carbono com B2Y Carbon à IA preditiva do Genius Loto. Descubra a engenharia de vanguarda da Lion Solutions.",
    url: "https://www.SEU_DOMINIO.com", // SUBSTITUA
    siteName: "B2Y Group",
    images: [
      {
        url: "https://www.SEU_DOMINIO.com/og-image-b2y-futuristic.jpg", // SUBSTITUA
        width: 1200,
        height: 630,
        alt: "B2Y Group: Futuro da Tecnologia Sustentável",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SEU_TWITTER_HANDLE", // SUBSTITUA
    title: "B2Y Group: Inovação. Sustentabilidade. Futuro.",
    description:
      "Junte-se à revolução tecnológica com B2Y Group e Lion Solutions. Soluções que definem o amanhã.",
    images: ["https://www.SEU_DOMINIO.com/twitter-image-b2y-futuristic.jpg"], // SUBSTITUA
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { // Next.js gerencia a maioria dos ícones a partir daqui
    icon: "/favicon.ico", // Deve estar em /public
    shortcut: "/favicon-16x16.png", // Deve estar em /public
    apple: "/apple-touch-icon.png",   // Deve estar em /public
  },
  manifest: "/site.webmanifest", // Deve estar em /public
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      {/* A tag <head> é preenchida pelo Next.js com base no objeto 'metadata' e outros otimizadores.
        Colocar tags manualmente aqui pode levar a conflitos ou ao erro de whitespace.
        As tags essenciais como manifest, theme-color e ícones são melhor gerenciadas
        pelo objeto 'metadata' ou por arquivos na pasta /public.
      */}
      <head>
        {/* Mantenha esta seção <head> o mais limpa possível. */}
        {/* O Next.js injetará as tags meta do objeto 'metadata' aqui. */}
        {/* Se precisar de tags <link> ou <script> específicas que não podem ir no metadata, adicione-as com cuidado. */}
        {/* Exemplo: <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        {/* A tag theme-color pode ser definida no metadata ou aqui se necessário. */}
        <meta name="theme-color" content="#065f46" />
        {/* O manifest já está no objeto metadata.icons, então esta linha pode ser redundante, mas não deve causar o erro de whitespace. */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={`font-sans antialiased bg-gray-950 selection:bg-emerald-500 selection:text-white`}>
        <LanguageProvider>
          <div id="root-container" className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
            <FooterComponent />
          </div>
        </LanguageProvider>
        
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-0f3273d0-4429-4263-b4b1-d3a8e03063fb" data-elfsight-app-lazy></div>
      </body>
    </html>
  );
}