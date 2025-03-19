import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/assets/Group 26620.svg";

const FooterComponent = () => {
    return (
        <footer className="bg-gradient-to-b from-[#052e16] to-[#031a0d] text-white py-16 border-t border-emerald-500/20 shadow-lg rounded-t-xl mt-3 mr-3 ml-3 ">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
                {/* Logo e Mensagem */}
                <div className="space-y-6">
                    <div className="flex justify-center md:justify-start">
                        <Image src={Logo} alt="B2Y Future Labs Logo" width={220} height={60} className="animate-pulse rounded-lg" />
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel illum quaerat eveniet, esse fugiat necessitatibus aperiam est perferendis. Dignissimos, libero.
                    </p>
                    <p className="text-white/60 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel illum quaerat eveniet, esse fugiat necessitatibus aperiam est perferendis.
                    </p>
                </div>

                {/* Contato */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-emerald-400">Nosso Escritório de Operações</h3>
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-14 h-14 text-emerald-400" />
                            <span className="text-white/80 leading-relaxed text-sm">
                                Torre Jacarandá - Av. Marcos Penteado de Ulhoa Rodrigues, 939 - 8º andar<br />
                                Alphaville, Barueri - SP, 06460-040 | Terra, Sistema Solar, Via Láctea
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-emerald-400" />
                            <span className="text-white/80 text-sm">+55 (11) 96552-0979</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-emerald-400" />
                            <span className="text-white/80 text-sm">support@b2yfuture.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Globe className="w-6 h-6 text-emerald-400" />
                            <span className="text-white/80 text-sm">www.b2ysolution.com</span>
                        </div>
                    </div>
                </div>

                {/* Serviços & Tecnologias */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-emerald-400">Elabore um Título Legal</h3>
                    <ul className="text-white/80 space-y-2 text-sm">
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-emerald-400">Conecte-se ao Futuro</h3>
                    <p className="text-white/60 text-sm">
                        Acompanhe nossas pesquisas e inovações de perto. Seja parte da jornada para um amanhã mais avançado.
                    </p>
                    <div className="flex justify-center md:justify-start gap-6">
                        {[
                            { Icon: Linkedin, label: "LinkedIn" },
                            { Icon: Instagram, label: "Instagram" },
                            { Icon: Facebook, label: "Facebook" },
                            { Icon: Twitter, label: "Twitter" },
                        ].map(({ Icon, label }, index) => (
                            <a
                                key={index}
                                href="#"
                                aria-label={label}
                                className="p-4 rounded-full bg-white/10 hover:bg-emerald-400/20 transition duration-300 shadow-md hover:scale-110"
                            >
                                <Icon className="w-6 h-6 text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mapa no Footer */}
            <div className="flex items-center justify-center mt-12">
                {/* Mapa */}
                <div className="aspect-video w-full max-w-full h-80 rounded-xl overflow-hidden bg-white/10 shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7407219395177!2d-46.839800375424204!3d-23.5058466595536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01f5eee6e73f%3A0xaf1ffed54b9c5092!2sRegus%20-%20Sao%20Paulo%2C%20Alphaville%20-%20Castelo%20Branco%20-%20Tambore!5e0!3m2!1spt-BR!2sbr!4v1740075720982!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="Mapa interativo"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Direitos Autorais & Citação Inspiradora */}
            <div className="text-center mt-12 text-white/60 text-sm tracking-wide">
                &copy; {new Date().getFullYear()} B2Y Future Labs. <span className="text-emerald-400">Tecnologias que promovem sustentabilidade e impacto positivo no meio ambiente.</span>
            </div>
            <div className="text-center text-white/40 text-xs italic mt-4">
                Quando algo é importante o suficiente, você faz, mesmo que as probabilidades não estejam a seu favor.
            </div>
        </footer>
    );
};

export default FooterComponent;
