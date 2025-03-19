import Image from "next/image"
import { Card } from "@/components/ui/card"
import Bandeira01 from "@/components/assets/brasil.svg"

export default function LanguageSelector() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-emerald-800 to-emerald-500">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Bem-vindo à Lion Solution</h1>
          <p className="text-lg text-white/90">Selecione seu idioma:</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <LanguageButton
            flag={Bandeira01}
            language="Português"
            onClick={() => console.log("Selected Portuguese")}
          />
          <LanguageButton
            flag={Bandeira01}
            language="English"
            onClick={() => console.log("Selected English")}
          />
          <LanguageButton
            flag={Bandeira01}
            language="Español"
            onClick={() => console.log("Selected Spanish")}
          />
        </div>
      </div>
    </div>
  )
}

interface LanguageButtonProps {
  flag: string
  language: string
  onClick: () => void
}

function LanguageButton({ flag, language, onClick }: LanguageButtonProps) {
  return (
    <Card className="p-2 hover:bg-gray-50 transition-colors cursor-pointer" onClick={onClick}>
      <div className="w-32 space-y-2">
        <div className="relative h-20 w-full border rounded">
          <Image src={flag || "/placeholder.svg"} alt={`${language} flag`} fill className="object-cover rounded" />
        </div>
        <p className="text-gray-700 font-medium">{language}</p>
      </div>
    </Card>
  )
}

