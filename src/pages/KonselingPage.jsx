import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, Shield, Clock, Heart } from 'lucide-react';

const KonselingPage = () => {
    const [formData, setFormData] = useState({
        nama: '',
        noHp: '',
        email: '',
        jenisLayanan: '',
        tanggalKonseling: '',
        jadwalPreferensi: '',
        keluhan: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const layananList = [
        'Kesehatan Mental',
        'Konseling Keluarga',
        'Pendampingan Spiritual',
        'Konseling Akademik',
        'Konseling Karir',
    ];

    const jadwalList = [
        'Senin - Pagi (08:00 - 12:00)',
        'Senin - Siang (13:00 - 17:00)',
        'Selasa - Pagi (08:00 - 12:00)',
        'Selasa - Siang (13:00 - 17:00)',
        'Rabu - Pagi (08:00 - 12:00)',
        'Rabu - Siang (13:00 - 17:00)',
        'Kamis - Pagi (08:00 - 12:00)',
        'Kamis - Siang (13:00 - 17:00)',
        'Jumat - Pagi (08:00 - 11:00)',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const message = encodeURIComponent(
            `Halo Admin Klinik K2+, saya ingin mendaftar konseling.\n\n` +
            `Nama: ${formData.nama}\n` +
            `No HP: ${formData.noHp}\n` +
            `Layanan: ${formData.jenisLayanan}\n` +
            `Tanggal: ${formData.tanggalKonseling}\n` +
            `Jadwal: ${formData.jadwalPreferensi}\n` +
            `Keluhan: ${formData.keluhan || '-'}`
        );

        const whatsappNumber = "6285123299880";// Ganti dengan nomor admin yang sesuai

        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-[2rem] p-8 text-center shadow-xl">
                    <div className="w-20 h-20 bg-moss/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-moss" />
                    </div>
                    <h2 className="text-3xl font-outfit font-bold text-charcoal mb-4">
                        Pendaftaran Berhasil!
                    </h2>
                    <p className="text-charcoal/70 mb-6">
                        Terima kasih telah mendaftar konseling di Klinik K2+.
                        Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi jadwal.
                    </p>
                    <div className="bg-moss/10 rounded-xl p-4 mb-6">
                        <p className="text-charcoal/80 text-sm">
                            <strong>Catatan:</strong> Harap siapkan kartu mahasiswa saat sesi konseling berlangsung.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="inline-block px-8 py-4 bg-moss text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                    >
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/konseling.avif"
                    alt="Supportive hand"
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '100vh' }}
                />
                <div className="absolute inset-0 bg-cream/30 md:bg-cream/20"></div>
            </div>
            <div className="bg-moss py-4 relative z-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Link
                        to="/"
                        className="inline-flex min-h-10 items-center gap-2 text-white hover:text-white transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <ArrowLeft size={20} />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl py-6 lg:py-8 relative z-10">
                <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-10 items-start">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal mb-3">
                            Mulai Konseling
                        </h1>
                        <p className="text-charcoal text-lg mb-6 max-w-2xl">
                            Isi formulir di bawah ini untuk mendaftar sesi konseling.
                            Data Anda dijamin kerahasiaannya.
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-4 p-4 lg:p-3 bg-white rounded-xl">
                                <div className="w-12 h-12 lg:w-10 lg:h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0">
                                    <Shield size={22} className="text-moss" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">100% Rahasia</h3>
                                    <p className="text-charcoal text-sm">Data dan cerita Anda dijamin kerahasiaannya</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 lg:p-3 bg-white rounded-xl">
                                <div className="w-12 h-12 lg:w-10 lg:h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={22} className="text-moss" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">Respon Cepat</h3>
                                    <p className="text-charcoal text-sm">Konfirmasi jadwal dalam 1x24 jam</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 lg:p-3 bg-white rounded-xl">
                                <div className="w-12 h-12 lg:w-10 lg:h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0">
                                    <Heart size={22} className="text-moss" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">Gratis</h3>
                                    <p className="text-charcoal text-sm">Layanan gratis untuk seluruh mahasiswa UNU</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 lg:p-7 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-3.5">
                            <div>
                                <label htmlFor="nama" className="block text-charcoal font-medium mb-1.5">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 focus-visible:outline-none focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-all"
                                    placeholder="Nama sesuai kartu mahasiswa"
                                />
                            </div>
                            <div>
                                <label htmlFor="noHp" className="block text-charcoal font-medium mb-1.5">
                                    Nomor WhatsApp <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="noHp"
                                    type="tel"
                                    name="noHp"
                                    value={formData.noHp}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                    inputMode="tel"
                                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 focus-visible:outline-none focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-all"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>

                            <div>
                                <label htmlFor="jenisLayanan" className="block text-charcoal font-medium mb-1.5">
                                    Jenis Layanan <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="jenisLayanan"
                                    name="jenisLayanan"
                                    value={formData.jenisLayanan}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 focus-visible:outline-none focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-all bg-white"
                                >
                                    <option value="">Pilih Jenis Layanan</option>
                                    {layananList.map((lay, idx) => (
                                        <option key={idx} value={lay}>{lay}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="tanggalKonseling" className="block text-charcoal font-medium mb-1.5">
                                    Tanggal Konseling <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="tanggalKonseling"
                                    type="date"
                                    name="tanggalKonseling"
                                    value={formData.tanggalKonseling}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 focus-visible:outline-none focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="jadwalPreferensi" className="block text-charcoal font-medium mb-1.5">
                                    Jadwal Preferensi <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="jadwalPreferensi"
                                    name="jadwalPreferensi"
                                    value={formData.jadwalPreferensi}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 focus-visible:outline-none focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-all bg-white"
                                >
                                    <option value="">Pilih Jadwal</option>
                                    {jadwalList.map((jadwal, idx) => (
                                        <option key={idx} value={jadwal}>{jadwal}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="keluhan" className="block text-charcoal font-medium mb-1.5">
                                    Keluhan / Hal yang Ingin Dibicarakan <span className="text-charcoal/40">(Opsional)</span>
                                </label>
                                <textarea
                                    id="keluhan"
                                    name="keluhan"
                                    value={formData.keluhan}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 focus-visible:outline-none focus-visible:border-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-all resize-none"
                                    placeholder="Ceritakan secara singkat apa yang ingin Anda bicarakan..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                aria-busy={isLoading}
                                className="w-full min-h-12 py-3 bg-moss text-white rounded-xl font-medium text-lg hover:bg-charcoal transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Kirim Pendaftaran
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KonselingPage;
