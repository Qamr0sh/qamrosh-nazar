import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    ShieldCheck,
    Lock,
    Compass,
    Database,
    Bell,
    Mail,
    FileCheck,
    CreditCard,
    Headphones,
    Languages,
    Sparkles
} from 'lucide-react';

export const metadata = {
    title: 'Gizlilik Politikası (KVKK) - As-Salah',
    description: 'As-Salah İslami yaşam ve namaz vakitleri uygulaması Gizlilik Politikası ve KVKK Aydınlatma Metni. Kişisel verileriniz ve ibadet gizliliğiniz kutsaldır.',
};

export default function AsSalahPrivacyPolicyTR() {
    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#93A5D5] selection:text-black">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#C6A266]/10 via-[#1B4332]/10 to-transparent blur-3xl opacity-70" />
                <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#93A5D5]/5 blur-3xl" />
            </div>

            {/* Navigation Bar */}
            <nav className="sticky top-0 w-full z-50 bg-[#050B08]/85 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/as-salah"
                            className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C6A266]/40 transition-all group"
                            title="As-Salah Ana Sayfasına Dön"
                        >
                            <ArrowLeft className="w-4 h-4 text-slate-300 group-hover:-translate-x-0.5 group-hover:text-[#C6A266] transition-all" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9 ring-1 ring-[#C6A266]/30 rounded-xl p-1 bg-[#0E1A14]">
                                <Image
                                    src="/as-salah/logo.png"
                                    alt="As-Salah Logo"
                                    fill
                                    className="object-contain p-1 rounded-lg"
                                />
                            </div>
                            <div>
                                <span className="font-space-grotesk font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] via-blue-100 to-white">
                                    As-Salah
                                </span>
                                <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                    Gizlilik &amp; KVKK
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Language Switcher & Navigation Links */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Selector */}
                        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                            <Link
                                href="/as-salah/privacy-policy"
                                className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition-colors"
                                title="English version"
                            >
                                EN
                            </Link>
                            <span className="px-2.5 py-1 rounded-lg bg-[#C6A266] text-black font-semibold shadow-sm">
                                TR
                            </span>
                        </div>

                        <Link
                            href="/as-salah/support/tr"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden md:block"
                        >
                            Destek &amp; SSS
                        </Link>
                        <Link
                            href="/as-salah/terms-and-conditions"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden lg:block"
                        >
                            Kullanım Koşulları
                        </Link>
                        <Link
                            href="/as-salah/trader-status"
                            className="text-xs font-semibold text-[#C6A266] bg-[#C6A266]/10 border border-[#C6A266]/30 px-3 py-1.5 rounded-lg hover:bg-[#C6A266]/20 transition-all inline-flex items-center gap-1.5"
                        >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Satıcı Beyanı (DSA)</span>
                            <span className="sm:hidden">DSA</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
                
                {/* Hero Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide">
                        <Lock className="w-3.5 h-3.5" />
                        Gizlilik Odaklı &bull; Sıfır Dini Veri Satışı &bull; KVKK Uyumlu
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-white">
                        Gizlilik Politikası
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        <span className="text-white font-medium">As-Salah</span> olarak manevi yolculuğunuza derin saygı duyuyoruz. İbadet alışkanlıklarınızı, namaz vakti takibinizi, Kur&apos;an dinleme geçmişinizi ve zikir kayıtlarınızı mutlak bir gizlilik ve emanet bilinciyle koruyoruz.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Uygulama Kimliği: <code className="text-[#93A5D5]">online.qamrosh.assalah</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Yürürlük Tarihi: Kasım 2026
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#C6A266]/10 border border-[#C6A266]/30 text-[#C6A266]">
                            Mevzuat: 6698 Sayılı KVKK &amp; GDPR
                        </span>
                    </div>

                    {/* Language Switch Notice Banner */}
                    <div className="max-w-xl mx-auto p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <Languages className="w-4 h-4 text-[#C6A266]" />
                            <span>Bu sayfa Türkçe gizlilik politikasıdır.</span>
                        </div>
                        <Link 
                            href="/as-salah/privacy-policy"
                            className="text-[#93A5D5] hover:text-white underline underline-offset-2 transition-colors font-medium"
                        >
                            View in English &rarr;
                        </Link>
                    </div>
                </div>

                {/* Document Sections */}
                <div className="space-y-6">

                    {/* Section 1 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Bölüm 1</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Veri Toplama, İşleme ve Kullanım İlkeleri
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-13">
                            <div>
                                <strong className="text-white block mb-1">1.1 Konum Verileri (Cihaz Konumu):</strong>
                                Bulunduğunuz konuma göre en doğru namaz vakitlerini (İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı) hesaplamak ve Kıble pusulası istikametini kesin olarak belirlemek amacıyla uygulama cihazınızın konum bilgisine erişim izni talep eder. Bu konum verileri <strong>tamamen ve yalnızca cihazınızın kendi donanımı üzerinde yerel olarak (on-device) işlenir</strong>. Konum geçmişiniz hiçbir şekilde harici sunuculara aktarılmaz, izlenmez ve saklanmaz.
                            </div>
                            <div>
                                <strong className="text-white block mb-1">1.2 Yerel Veritabanı ve Zikir Kayıtları:</strong>
                                Dijital Tesbih sayımlarınız, günlük zikir ve dua hedefi ayarlarınız ve tema tercihleriniz yalnızca cihazınızın güvenli yerel depolama alanında saklanır. Geliştirici veya herhangi bir üçüncü taraf kişisel ibadet sıklığınızı veya verilerinizi göremez.
                            </div>
                            <div>
                                <strong className="text-white block mb-1">1.3 Kur&apos;an-ı Kerim Ses Yayını ve Çevrimdışı İndirme:</strong>
                                Sureleri veya ayet tilavetlerini çevrimdışı dinlemek üzere cihazınıza indirdiğinizde, indirilen ses dosyaları sadece uygulamanın cihazdaki yerel klasöründe barındırılır. Çevrimiçi ses yayını (streaming) sırasında ise dosyalar doğrudan yüksek performanslı CDN içerik dağıtım sunucularından aktarılır; hangi sureyi kaç defa dinlediğinize dair hiçbir dinleme kaydı tutulmaz ve profillenmez.
                            </div>
                            <div className="p-4 rounded-xl bg-[#C6A266]/5 border border-[#C6A266]/20 text-xs sm:text-sm text-slate-300 space-y-1">
                                <strong className="text-[#C6A266] flex items-center gap-1.5">
                                    <Sparkles className="w-4 h-4" />
                                    Kesin İlke: Sıfır Dini Profilleme ve Veri Satışı Yasağı
                                </strong>
                                <p className="text-slate-400">
                                    Kişinin ibadeti yalnızca kendisi ile Yaratıcısı arasındadır. As-Salah; kullanıcılarının dini eğilimlerini, ibadet alışkanlıklarını, konumlarını veya uygulama kullanım telemetrilerini <strong>asla satmaz, kiralamaz, reklam hedeflemesi amacıyla üçüncü taraflarla paylaşmaz ve ticarileştirmez</strong>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Bölüm 2</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Üçüncü Taraf Hizmet Sağlayıcıları ve Altyapı Ortakları
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-3">
                            <p>
                                Uygulamamız yalnızca uluslararası güvenlik ve veri koruma standartlarına (ISO 27001, SOC2, GDPR) uyumlu, sertifikalı altyapı hizmetlerini kullanır:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-400">
                                <li>
                                    <strong className="text-white">RevenueCat:</strong> As-Salah Pro abonelik yetkilendirme anahtarlarını doğrulamak için kullanılır. Kredi kartı ve finansal bilgileriniz geliştirici tarafından asla görülmez veya saklanmaz.
                                </li>
                                <li>
                                    <strong className="text-white">Google Play Store &amp; Apple App Store:</strong> Tüm uygulama içi satın alma, faturalandırma ve abonelik ödemeleri doğrudan Google LLC veya Apple Inc. tarafından yürütülür ve korunur.
                                </li>
                                <li>
                                    <strong className="text-white">İçerik Dağıtım Ağı (CDN):</strong> Kur&apos;an tilaveti ses dosyalarını düşük gecikmeyle kullanıcılara sunmak için küresel güvenli CDN ağları kullanılır.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                <Bell className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Bölüm 3</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Uygulama İzinleri ve Kullanım Amaçları
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-3">
                            <p>As-Salah yalnızca temel işlevlerini eksiksiz yerine getirebilmek için gerekli minimum izinleri talep eder:</p>
                            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-400">
                                <li>
                                    <strong className="text-white">Konum İzni (Hassas / Yaklaşık):</strong> Ezan ve namaz vakitlerinin güneş açılarına göre matematiksel hesaplaması ve Kıble pusulasının açısını belirlemek için kullanılır.
                                </li>
                                <li>
                                    <strong className="text-white">Bildirim İzni (POST_NOTIFICATIONS):</strong> Ezan vakitlerinde bildirim göndermek, namaz hatırlatıcılarını zamanında ekrana ulaştırmak ve vakit yaklaştığında sesli/sessiz uyarı vermek için gereklidir.
                                </li>
                                <li>
                                    <strong className="text-white">Ön Plan Hizmeti / Medya Oynatma (Foreground Service &amp; Media Playback):</strong> Cihaz ekranınız kilitliyken veya As-Salah arka planda çalışırken Kur&apos;an-ı Kerim tilavetinin kesintisiz çalabilmesi ve kilit ekranında medya denetimlerinin gösterilmesi için kullanılır.
                                </li>
                                <li>
                                    <strong className="text-white">Titreşim ve Dokunsal Geri Bildirim (Vibrate / Haptics):</strong> Dijital Tesbih modülünde ekrana bakmadan zikir çekebilmeniz için parmak ucunuza fiziksel his sağlama amacıyla kullanılır.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Bölüm 4</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    6698 Sayılı KVKK ve GDPR Kapsamındaki Haklarınız
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-3">
                            <p>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) 11. maddesi ve Avrupa Birliği Genel Veri Koruma Tüzüğü (&ldquo;GDPR&rdquo;) uyarınca ilgili kişi olarak aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                                <li>Verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                                <li>Verilerin silinmesini veya yok edilmesini talep etme hakkı.</li>
                            </ul>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                                <strong className="text-white">Verilerinizi Tamamen Silme Hakkı:</strong> As-Salah cihaz üzerinde yerel mimariyle çalıştığı için, telefonunuzun ayarlarından <em>Uygulamalar &gt; As-Salah &gt; Verileri Temizle</em> seçeneğine dokunarak veya uygulamayı kaldırarak cihazınızda saklanan tüm verileri saniyeler içinde kalıcı olarak silebilirsiniz.
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Bölüm 5</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Veri Sorumlusu ve İletişim
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 space-y-3 text-sm text-slate-300">
                            <p>
                                6698 sayılı KVKK kapsamında Veri Sorumlusu: <strong>Qamrosh Ali Nazar</strong>. Gizlilik haklarınız, veri koruma talepleriniz veya sorularınız için doğrudan iletişime geçebilirsiniz:
                            </p>
                            <div className="flex flex-wrap items-center gap-3 pt-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-sm">
                                    <Mail className="w-4 h-4 text-[#C6A266]" />
                                    <a href="mailto:qamrosh.dev@gmail.com" className="text-[#C6A266] hover:underline">
                                        qamrosh.dev@gmail.com
                                    </a>
                                </div>
                                <Link
                                    href="/as-salah/trader-status"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/30 text-[#C6A266] hover:bg-[#C6A266]/20 transition-all text-xs font-semibold"
                                >
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>AB &amp; Küresel Satıcı Beyanı</span>
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Footer */}
                <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                        <div className="relative w-6 h-6 ring-1 ring-white/20 rounded-lg p-0.5 bg-[#0E1A14]">
                            <Image
                                src="/as-salah/logo.png"
                                alt="As-Salah Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span>&copy; {new Date().getFullYear()} As-Salah. Tüm hakları saklıdır.</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/as-salah" className="hover:text-white transition-colors">Uygulama Genel Bakış</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/support/tr" className="hover:text-[#C6A266] transition-colors">Destek &amp; SSS</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/terms-and-conditions" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/trader-status" className="text-[#C6A266] hover:underline font-medium">Satıcı Beyanı</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/" className="hover:text-white transition-colors">Portfolyo</Link>
                    </div>
                </footer>

            </main>
        </div>
    );
}

