import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white">
            <div className="container mx-auto px-6 max-w-6xl py-12">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-cormorant italic font-bold mb-4">
                            Klinik K2+
                        </h3>
                        <p className="text-white/70 mb-6 max-w-md">
                            Layanan konseling dan kesejahteraan untuk mahasiswa UNU Yogyakarta.
                            Ruang aman dan terpercaya untuk berbagi cerita.
                        </p>
                        <div className="flex gap-4">
                            <a href="mailto:klinikk2plus@unu-jogja.ac.id" aria-label="Email Klinik K2+" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay hover:text-charcoal transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                <Mail size={20} aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Klinik K2+" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay hover:text-charcoal transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                <Instagram size={20} aria-hidden="true" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter Klinik K2+" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay hover:text-charcoal transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                <Twitter size={20} aria-hidden="true" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Klinik K2+" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay hover:text-charcoal transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                <Linkedin size={20} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-outfit font-bold mb-4">Tautan</h4>
                        <ul className="space-y-2">
                            <li><a href="#layanan" className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Layanan</a></li>
                            <li><a href="#filosofi" className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Filosofi</a></li>
                            <li><a href="#program" className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Program</a></li>
                            <li><a href="/konseling" className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Konseling</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-bold mb-4">Kontak</h4>
                        <ul className="space-y-2">
                            <li className="text-white/70">Kampus UNU Yogyakarta</li>
                            <li className="text-white/70">Jl. Lowanu No. 47</li>
                            <li className="text-white/70">Yogyakarta</li>
                            <li className="text-white/70 mt-4">
                                <a href="mailto:klinikk2plus@unu-jogja.ac.id" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                                    klinikk2plus@unu-jogja.ac.id
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        Copyright 2024 Klinik K2+ - UNU Yogyakarta. Hak cipta dilindungi.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="mailto:klinikk2plus@unu-jogja.ac.id?subject=Kebijakan%20Privasi" className="text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Kebijakan Privasi</a>
                        <a href="mailto:klinikk2plus@unu-jogja.ac.id?subject=Syarat%20dan%20Ketentuan" className="text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
