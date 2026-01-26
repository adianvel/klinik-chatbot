import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[95%] max-w-6xl">
            <div
                className={`
          px-5 md:px-6 py-3 md:py-4 transition-[background-color,box-shadow,backdrop-filter] duration-300
          ${mobileMenuOpen
                        ? 'rounded-2xl bg-white/95 backdrop-blur-md shadow-xl text-charcoal'
                        : scrolled
                            ? 'rounded-full glass-dark text-moss shadow-2xl'
                            : 'rounded-full bg-white/10 backdrop-blur-sm text-white'
                    }
        `}
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold font-cormorant italic">
                        K2+
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#layanan" className="hover:opacity-70 transition-opacity">Layanan</a>
                        <a href="#filosofi" className="hover:opacity-70 transition-opacity">Filosofi</a>
                        <a href="#program" className="hover:opacity-70 transition-opacity">Program</a>
                        <a href="#konselor" className="hover:opacity-70 transition-opacity">Konselor</a>
                        <Link
                            to="/konseling"
                            className={`
                px-6 py-2 rounded-full font-medium transition-all
                ${scrolled
                                    ? 'bg-moss text-white hover:bg-opacity-90'
                                    : 'bg-white text-moss hover:bg-opacity-90'
                                }
              `}
                        >
                            Mulai Konseling
                        </Link>
                    </div>

                    <button
                        className="md:hidden p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-charcoal/10">
                        <div className="flex flex-col gap-3">
                            <a
                                href="#layanan"
                                className="py-2 hover:text-moss transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Layanan
                            </a>
                            <a
                                href="#filosofi"
                                className="py-2 hover:text-moss transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Filosofi
                            </a>
                            <a
                                href="#program"
                                className="py-2 hover:text-moss transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Program
                            </a>
                            <a
                                href="#konselor"
                                className="py-2 hover:text-moss transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Konselor
                            </a>
                            <Link
                                to="/konseling"
                                className="mt-2 px-6 py-3 rounded-full font-medium bg-moss text-white hover:bg-opacity-90 transition-all text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Mulai Konseling
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
