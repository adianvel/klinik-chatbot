import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section
            className="relative min-h-[100svh] flex items-end pb-24 md:pb-32 overflow-hidden"
        >
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/hero-klinik.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-moss/40 via-charcoal/60 to-charcoal/70 md:from-moss/30 md:via-charcoal/50 md:to-charcoal/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent md:from-charcoal/50"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="space-y-4">
                    <h1 className="hero-reveal hero-reveal-1 text-white text-5xl md:text-7xl font-outfit font-light">
                        You Share,
                    </h1>
                    <h2 className="hero-reveal hero-reveal-2 text-white text-7xl md:text-9xl font-cormorant italic font-bold">
                        We Care.
                    </h2>
                    <p className="hero-reveal hero-reveal-3 text-white/80 text-lg md:text-xl max-w-2xl font-light mt-6">
                        Klinik K2+ adalah ruang aman dan terpercaya untuk berbagi cerita,
                        mencari dukungan kesehatan mental, dan pendampingan spiritual
                        bagi mahasiswa UNU Yogyakarta.
                    </p>
                    <Link
                        to="/konseling"
                        className="hero-reveal hero-reveal-4 mt-8 inline-flex min-h-12 items-center px-8 py-4 bg-moss text-white rounded-full font-medium text-lg hover:bg-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-moss"
                    >
                        Mulai Konseling
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
