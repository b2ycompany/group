import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B2Y | Líder em Soluções Tecnológicas Sustentáveis e Impacto Positivo no Meio Ambiente",
  description:
    "A B2Y é líder no desenvolvimento de soluções tecnológicas inovadoras que impulsionam a sustentabilidade e promovem um impacto positivo no meio ambiente. Transformando o futuro através da tecnologia verde.",
  openGraph: {
    title: "B2Y | Líder em Soluções Tecnológicas Sustentáveis e Impacto Positivo no Meio Ambiente",
    description:
      "A B2Y é líder no desenvolvimento de soluções tecnológicas inovadoras que impulsionam a sustentabilidade e promovem um impacto positivo no meio ambiente. Transformando o futuro através da tecnologia verde.",
    url: "https://www.b2ysolution.com",
    siteName: "B2Y",
    images: [
      {
        url: "https://www.b2y.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B2Y | Soluções Tecnológicas Sustentáveis e Impacto Positivo no Meio Ambiente",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@B2YTech",
    title: "B2Y | Líder em Soluções Tecnológicas Sustentáveis e Impacto Positivo no Meio Ambiente",
    description:
      "A B2Y é líder no desenvolvimento de soluções tecnológicas inovadoras que impulsionam a sustentabilidade e promovem um impacto positivo no meio ambiente. Transformando o futuro através da tecnologia verde.",
    images: ["https://www.b2y.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Soluções tecnológicas inovadoras e sustentáveis para um futuro mais verde e sustentável" />
        <meta name="keywords" content="líder em tecnologia sustentável, soluções ambientais, impacto positivo, inovação verde, sustentabilidade, futuro verde, tecnologia para o meio ambiente" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-emerald-800 to-emerald-500` } >

        {children}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-0f3273d0-4429-4263-b4b1-d3a8e03063fb" data-elfsight-app-lazy></div>
        <div>
          <FooterComponent />
        </div>

      </body>
    </html>
  );
}
