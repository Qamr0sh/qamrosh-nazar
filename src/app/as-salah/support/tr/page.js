import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    ShieldCheck,
    Mail,
    HelpCircle,
    Bell,
    Compass,
    Headphones,
    CreditCard,
    CheckCircle2,
    AlertCircle,
    Smartphone,
    LifeBuoy,
    ExternalLink,
    Send,
    Languages
} from 'lucide-react';

export const metadata = {
    title: 'Destek ve Yardım Merkezi - As-Salah',
    description: 'As-Salah Ezan Vakti, Kıble & Kur\'an uygulaması resmi destek ve yardım merkezi. Sıkça sorulan sorular, bildirim sorunları çözümü, abonelik geri yükleme ve geliştirici iletişim kanalları.',
};

export default function AsSalahSupportTR() {
    const supportEmail = 'qamrosh.dev@gmail.com';
    const emailSubject = encodeURIComponent('[As-Salah Destek] Yardım Talebi');
    const emailBody = encodeURIComponent(
        'Merhaba Qamrosh,\n\n' +
        'Uygulama: As-Salah (online.qamrosh.assalah)\n' +
        'Cihaz Modeli: (Örn: iPhone 15 / Samsung Galaxy S23)\n' +
        'İşletim Sistemi Sürümü: (Örn: iOS 18.1 / Android 14)\n' +
        'As-Salah Sürümü: (Uygulama Ayarlarından bakılabilir)\n\n' +
        'Yaşadığım Sorun / Önerim:\n' +
        '[Lütfen sorununuzu veya talebinizi buraya detaylı olarak yazın...]\n'
    );
    const mailtoUrl = `mailto:${supportEmail}?subject=${emailSubject}&body=${emailBody}`;

    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#93A5D5] selection:text-black">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-b from-[#C6A266]/10 via-[#1B4332]/15 to-transparent blur-3xl opacity-75" />
                <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-[#93A5D5]/5 blur-3xl" />
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
                                    Destek Merkezi
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Language Switcher & Navigation Links */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Selector */}
                        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                            <Link
                                href="/as-salah/support"
                                className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition-colors"
                                title="English Support"
                            >
                                EN
                            </Link>
                            <span className="px-2.5 py-1 rounded-lg bg-[#C6A266] text-black font-semibold shadow-sm">
                                TR
                            </span>
                        </div>

                        <Link
                            href="/as-salah/privacy-policy/tr"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                        >
                            Gizlilik (KVKK)
                        </Link>
                        <Link
                            href="/as-salah/trader-status"
                            className="text-xs font-semibold text-[#C6A266] bg-[#C6A266]/10 border border-[#C6A266]/30 px-3 py-1.5 rounded-lg hover:bg-[#C6A266]/20 transition-all inline-flex items-center gap-1.5"
                        >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Satıcı Beyanı</span>
                            <span className="sm:hidden">DSA</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
                
                {/* Hero Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A266]/10 border border-[#C6A266]/25 text-[#C6A266] text-xs font-semibold tracking-wide">
                        <LifeBuoy className="w-3.5 h-3.5" />
                        Resmi Kullanıcı Desteği &amp; Yardım Masası
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-white">
                        Yardım ve Destek
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Namaz vakitleri, ezan bildirimleri, Kıble pusulası, çevrimdışı Kur&apos;an dinleme ve As-Salah Pro aboneliğiniz ile ilgili her konuda yanınızdayız.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Paket Adı: <code className="text-[#93A5D5]">online.qamrosh.assalah</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Apple App Store ID: <code className="text-[#C6A266]">6818953512</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            Ortalama Yanıt Süresi: 24-48 Saat
                        </span>
                    </div>

                    {/* Language Switch Notice */}
                    <div className="max-w-xl mx-auto p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <Languages className="w-4 h-4 text-[#C6A266]" />
                            <span>Türkçe destek ve yardım sayfası görüntüleniyor.</span>
                        </div>
                        <Link 
                            href="/as-salah/support"
                            className="text-[#93A5D5] hover:text-white underline underline-offset-2 transition-colors font-medium"
                        >
                            View Support in English &rarr;
                        </Link>
                    </div>
                </div>

                {/* Quick Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a
                        href={mailtoUrl}
                        className="p-5 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/40 hover:bg-white/[0.03] transition-all group space-y-3 block"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] group-hover:scale-105 transition-transform">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base font-space-grotesk group-hover:text-[#C6A266] transition-colors">
                                E-posta Desteği
                            </h3>
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                Sorularınız için doğrudan geliştirici ekibine e-posta gönderin.
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-[#93A5D5] flex items-center gap-1 pt-1">
                            <span>qamrosh.dev@gmail.com</span>
                            <ExternalLink className="w-3 h-3" />
                        </div>
                    </a>

                    <a
                        href="#sss"
                        className="p-5 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all group space-y-3 block"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base font-space-grotesk group-hover:text-emerald-400 transition-colors">
                                Sıkça Sorulan Sorular
                            </h3>
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                Bildirim sorunları, pusula kalibrasyonu ve çevrimdışı Kur&apos;an çözümleri.
                            </p>
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 pt-1">
                            <span>Çözümleri İncele &darr;</span>
                        </div>
                    </a>

                    <Link
                        href="/as-salah/privacy-policy/tr"
                        className="p-5 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.03] transition-all group space-y-3 block"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base font-space-grotesk group-hover:text-blue-400 transition-colors">
                                KVKK &amp; Gizlilik
                            </h3>
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                Verilerinizin cihazda nasıl saklandığını ve korunduğunu öğrenin.
                            </p>
                        </div>
                        <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1 pt-1">
                            <span>KVKK Metnini Oku &rarr;</span>
                        </div>
                    </Link>
                </div>

                {/* FAQ Section */}
                <div id="sss" className="space-y-6 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266]">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Çözüm Rehberi</span>
                            <h2 className="text-2xl sm:text-3xl font-bold font-space-grotesk text-white">
                                Sıkça Sorulan Sorular (SSS)
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-4">
                        
                        {/* FAQ 1: Notifications */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                                    <Bell className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Ezan ve namaz vakti bildirimleri çalmıyor veya gecikiyor, nasıl çözebilirim?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    Modern Android ve iOS işletim sistemleri batarya tasarrufu için arka plan uygulamalarını kısıtlayabilmektedir. Bildirimlerin tam vaktinde çalması için şu adımları uygulayınız:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <strong className="text-white">Android Kullanıcıları:</strong> Telefonunuzun <em>Ayarlar &gt; Uygulamalar &gt; As-Salah &gt; Pil (Pil Kullanımı)</em> bölümüne gidip <strong>&ldquo;Kısıtlanmamış&rdquo; (Unrestricted)</strong> veya <strong>&ldquo;Optimizasyon Yok&rdquo;</strong> seçeneğini işaretleyiniz. Ayrıca &ldquo;Alarmlar ve Hatırlatıcılar&rdquo; izninin açık olduğundan emin olunuz.
                                    </li>
                                    <li>
                                        <strong className="text-white">Xiaomi / Huawei / Samsung:</strong> Otomatik başlatma (Auto-start) iznini etkinleştiriniz ve As-Salah&apos;ı temizleyici/bellek boşaltıcı istisnalarına ekleyiniz.
                                    </li>
                                    <li>
                                        <strong className="text-white">iOS (iPhone) Kullanıcıları:</strong> <em>Ayarlar &gt; As-Salah &gt; Bildirimler</em> menüsünde &ldquo;Bildirimlere İzin Ver&rdquo;, &ldquo;Sesler&rdquo; ve &ldquo;Kritik Uyarılar / Zaman Duyarlı Bildirimler&rdquo; seçeneklerini aktif ediniz. Telefonunuzun Sessiz/Odak modunda olmadığından emin olunuz.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ 2: Compass */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                                    <Compass className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Kıble pusulası açısı titriyor veya yanlış yönü gösteriyor, ne yapmalıyım?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    Pusula, cihazınızın içindeki manyetometre sensöründen yararlanır. Çevresel manyetik alanlar pusulanın sapmasına yol açabilir:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <strong className="text-white">8 Çizme Kalibrasyonu:</strong> Telefonunuzu yatay tutarak havada 3-4 kez büyük bir &ldquo;8&rdquo; rakamı çizecek şekilde hareket ettiriniz. Bu işlem telefonun manyetik sensörünü anında sıfırlar ve kalibre eder.
                                    </li>
                                    <li>
                                        <strong className="text-white">Manyetik Kılıflar:</strong> Mıknatıslı telefon kılıfları, MagSafe aksesuarları veya metal yüzeyler pusulayı doğrudan etkiler. Pusulayı kullanırken manyetik aksesuarları çıkarınız veya cihazı metal masalardan uzaklaştırınız.
                                    </li>
                                    <li>
                                        <strong className="text-white">Konum Doğruluğu:</strong> Kıble açısının kesin hesabı için konum izninin &ldquo;Tam / Hassas Konum&rdquo; olarak verildiğini kontrol ediniz.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ 3: Quran Audio */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
                                    <Headphones className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Kur&apos;an-ı Kerim surelerini çevrimdışı (internetsiz) nasıl dinleyebilirim?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    As-Salah, hem yüksek hızlı CDN üzerinden anlık ses akışını (streaming) hem de sureleri tek dokunuşla cihazınıza indirmeyi destekler:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>Kur&apos;an listesinde veya sure detay ekranında bulunan indirme simgesine dokunarak dilediğiniz sureleri Wi-Fi ile telefonunuza indirebilirsiniz.</li>
                                    <li>İndirilen ses dosyaları tamamen telefonunuzun yerel hafızasında saklanır; uçakta veya internet bağlantısı olmayan yerlerde dahi kesintisiz dinleyebilirsiniz.</li>
                                    <li>Ekranınız kapalıyken veya başka bir uygulamaya geçtiğinizde de tilavet arka planda çalmaya devam eder.</li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ 4: Restore Purchases & Pro */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-[#C6A266]/10 text-[#C6A266] mt-0.5">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Telefonumu değiştirdim veya uygulamayı yeniden yükledim, Pro üyeliğimi nasıl geri yüklerim?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    As-Salah Pro aboneliğiniz veya ömür boyu satın alımınız doğrudan Google Play veya Apple kimliğinize tanımlıdır. Asla kaybolmaz:
                                </p>
                                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>Satın alma işlemini yaptığınız Google veya Apple hesabıyla cihazınızda oturum açtığınızdan emin olunuz.</li>
                                    <li>As-Salah uygulamasını açıp <em>Ayarlar</em> veya <em>Pro</em> ekranına gidiniz.</li>
                                    <li>Sayfanın altındaki <strong>&ldquo;Satın Alımları Geri Yükle&rdquo; (Restore Purchases)</strong> butonuna dokununuz. Sistem saniyeler içinde aboneliğinizi otomatik olarak aktifleştirecektir.</li>
                                </ol>
                            </div>
                        </div>

                        {/* FAQ 5: Subscriptions & Refunds */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-0.5">
                                    <AlertCircle className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Aboneliğimi nasıl iptal edebilirim veya iade talebinde bulunabilirim?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    Tüm finansal işlemler ve abonelik yönetimi doğrudan Apple App Store ve Google Play Store altyapısı tarafından güvenle yönetilmektedir:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <strong className="text-white">Apple (iOS):</strong> iPhone&apos;unuzda <em>Ayarlar &gt; [Adınız] &gt; Abonelikler &gt; As-Salah</em> yolunu izleyerek dilediğiniz an aboneliğinizi iptal edebilirsiniz. İade talepleri için <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-[#93A5D5] underline">reportaproblem.apple.com</a> adresini kullanabilirsiniz.
                                    </li>
                                    <li>
                                        <strong className="text-white">Android (Google Play):</strong> Google Play Store uygulamasını açıp <em>Profil İkonu &gt; Ödemeler ve Abonelikler &gt; Abonelikler &gt; As-Salah</em> seçeneğinden iptal edebilirsiniz.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Direct Contact Form / Email Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0E1A14] via-[#08100C] to-[#050B08] border border-[#C6A266]/30 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A266]">Doğrudan İletişim</span>
                            <h2 className="text-2xl font-bold font-space-grotesk text-white">
                                Sorununuzu Çözemediniz mi?
                            </h2>
                            <p className="text-slate-400 text-sm max-w-xl">
                                Hata bildirimleri, sure talepleri, Türkçe meallere dair geri bildirimler veya önerileriniz için doğrudan geliştiriciyle iletişime geçebilirsiniz.
                            </p>
                        </div>
                        <a
                            href={mailtoUrl}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C6A266] text-black font-semibold text-sm hover:bg-[#d8b476] transition-all shadow-lg shadow-[#C6A266]/20 flex-shrink-0"
                        >
                            <Send className="w-4 h-4" />
                            <span>Destek E-postası Gönder</span>
                        </a>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-300">
                        <div className="font-semibold text-white flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>E-posta Gönderirken Hızlı Çözüm İçin Belirtilmesi Önerilenler:</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-slate-400">
                            <li>Kullandığınız telefon modeli ve işletim sistemi sürümü (örn: iPhone 14 Pro, iOS 18 veya Samsung Galaxy S23, Android 14)</li>
                            <li>Yaşadığınız durumun kısa açıklaması (mümkünse ekran görüntüsü ekleyebilirsiniz)</li>
                            <li>As-Salah uygulama sürüm numarası</li>
                        </ul>
                    </div>
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
                        <Link href="/as-salah/privacy-policy/tr" className="hover:text-[#C6A266] transition-colors">Gizlilik (KVKK)</Link>
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

