"use client"

import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Building2,
  Target,
  Phone,
  Mail,
  Leaf,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const conferenceImages = [
    {
      src: "/iporice-presentation-2024.jpeg",
      alt: "IPORICE conference presentation with speaker and audience",
    },
    {
      src: "/iporice-press-interview-female.jpeg",
      alt: "Press interview with conference official at IPORICE backdrop",
    },
    {
      src: "/iporice-group-photo-2024.jpeg",
      alt: "Group photo of IPORICE conference participants with traditional scarves",
    },
    {
      src: "/iporice-conference-session-2024.jpeg",
      alt: "IPORICE conference session in elegant ballroom with chandeliers",
    },
    {
      src: "/iporice-press-interview-male.jpeg",
      alt: "Media interview session with conference speaker at IPORICE event",
    },
  ]

  const keynoteSpeakers = [
    {
      name: "Laksana Tri Handoko",
      role: "Kepala BRIN",
      photo: "/Kepala BRIN.jpg",
    },
    {
      name: "Sudaryono",
      role: "Wakil Menteri Pertanian",
      photo: "/wakil mentri pertanian.jpg",
    },
    {
      name: "Rachmat Pambudy",
      role: "Ketua GPPI",
      photo: "/kepala bapenas.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "program", "sponsors", "speakers", "reviews"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % conferenceImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [conferenceImages.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % conferenceImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + conferenceImages.length) % conferenceImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* Navigation */}
      <nav className="bg-green-800 fixed top-0 left-0 w-full z-[60] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
              <Leaf className="h-6 w-6 text-white" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-white hover:text-green-100 transition-colors font-medium px-3 py-2 rounded-md ${
                  activeSection === "about" ? "bg-green-900" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("program")}
                className={`text-white hover:text-green-100 transition-colors font-medium px-3 py-2 rounded-md ${
                  activeSection === "program" ? "bg-green-900" : ""
                }`}
              >
                Program
              </button>
              <button
                onClick={() => scrollToSection("sponsors")}
                className="text-white hover:text-green-100 transition-colors font-medium px-3 py-2 rounded-md"
              >
                Sponsors
              </button>
              <button
                onClick={() => scrollToSection("speakers")}
                className={`text-white hover:text-green-100 transition-colors font-medium px-3 py-2 rounded-md ${
                  activeSection === "speakers" ? "bg-green-900" : ""
                }`}
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-white hover:text-green-100 transition-colors font-medium px-3 py-2 rounded-md"
              >
                Ulasan
              </button>
              <div className="relative group">
                <button className="text-white hover:text-green-100 transition-colors font-medium px-3 py-2 rounded-md">
                  Kontak
                </button>
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 space-y-3">
                    <div className="border-b border-gray-100 pb-3">
                      <h3 className="font-semibold text-gray-800 text-sm mb-2">IPORICE Secretariat</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Pusat Riset Ekonomi Industri, Jasa, dan Perdagangan
                        <br />
                        OR TKPEKM, BRIN
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-700 text-sm font-medium">A.n. Mba Reninta</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">Tel:</span>
                        <span className="text-gray-600 text-sm">+62 856-4300-7139</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-700 text-sm font-medium">Grace</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">Tel:</span>
                        <span className="text-gray-600 text-sm">+62 851-3207-9896</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 z-[999] bg-green-900 transition-all duration-300 ease-in-out overflow-y-auto h-screen pt-20 pb-8 px-4">
              <div className="mx-auto w-full max-w-7xl space-y-4">
                <div className="space-y-1">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block w-full text-left px-3 py-2 text-white hover:text-green-100 hover:bg-green-800 rounded-md transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("program")}
                    className="block w-full text-left px-3 py-2 text-white hover:text-green-100 hover:bg-green-800 rounded-md transition-colors"
                  >
                    Program
                  </button>
                  <button
                    onClick={() => scrollToSection("sponsors")}
                    className="block w-full text-left px-3 py-2 text-white hover:text-green-100 hover:bg-green-800 rounded-md transition-colors"
                  >
                    Sponsors
                  </button>
                  <button
                    onClick={() => scrollToSection("speakers")}
                    className="block w-full text-left px-3 py-2 text-white hover:text-green-100 hover:bg-green-800 rounded-md transition-colors"
                  >
                    Speakers
                  </button>
                  <button
                    onClick={() => scrollToSection("reviews")}
                    className="block w-full text-left px-3 py-2 text-white hover:text-green-100 hover:bg-green-800 rounded-md transition-colors"
                  >
                    Ulasan
                  </button>
                </div>
                <div className="rounded-lg border border-green-700/60 bg-green-800/60 px-4 py-3 text-white">
                  <div className="text-sm font-medium mb-2">Kontak</div>
                  <div className="text-xs text-green-100 space-y-1">
                    <div>IPORICE Secretariat</div>
                    <div>Pusat Riset Ekonomi Industri, Jasa, dan Perdagangan</div>
                    <div>OR TKPEKM, BRIN</div>
                    <div className="mt-2">
                      <div>A.n. Mba Reninta</div>
                      <div>Tel: +62 856-4300-7139</div>
                    </div>
                    <div className="mt-1">
                      <div>Grace</div>
                      <div>Tel: +62 851-3207-9896</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16 lg:pt-20 w-full">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          {conferenceImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${image.src}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {conferenceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-green-800 text-white text-lg px-6 py-2">
            THE 2nd INDONESIA PALM OIL RESEARCH AND INNOVATION CONFERENCE 2025
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight">
            Indonesia Palm Oil Research & Innovation Conference and Expo
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-balance max-w-4xl mx-auto font-medium">
            "Penguatan Sinergi Sektor Perkebunan Sawit dalam Mendukung Ketahanan Energi Berbasis Inovasi Teknologi"
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-green-600" />
              <span>1-3 Oktober 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-green-600" />
              <span>Ballroom Gedung BRIN, Jakarta</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-green-600" />
              <span>250 Peserta</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Conference Overview */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <img
              src="/1.jpg"
              alt="IPORICE 2025 promotional banner"
              className="mx-auto w-full max-w-5xl rounded-xl shadow-2xl border border-green-900/10"
            />
          </div>

          {/* Conference 2025 section now comes first */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
              THE 2ND IPORICE 2025
            </h2>

            <div className="max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-center">
              <p>
                Selamat datang di Konferensi dan Expo Riset dan Inovasi Kelapa Sawit Indonesia (IPORICE) ke-2. Kami
                dengan senang hati mengumumkan bahwa Konferensi Internasional IPORICE ke-2 akan berlangsung pada tanggal
                1-3 Oktober 2025 di Kota <strong>Jakarta</strong>, Indonesia. Acara tahunan ini diselenggarakan oleh{" "}
                <strong>Badan Riset dan Inovasi Nasional (BRIN)</strong>, bekerja sama dengan GPPI.
              </p>

              <p>
                Badan Riset dan Inovasi Nasional (BRIN), sebagai lembaga terdepan di Indonesia dan salah satu organisasi
                riset paling terkemuka di Indonesia, telah lama berada di garis depan dalam memajukan riset dan inovasi
                di negara ini. Dikenal karena dedikasinya terhadap keunggulan ilmiah dan keterlibatan masyarakat, BRIN
                terus memainkan peran penting dalam mendorong inovasi dan pembangunan berkelanjutan.
              </p>

              <p>
                Konferensi IPORICE tahun ini akan berfokus pada tema:{" "}
                <strong>
                  "Penguatan Sinergi Sektor Perkebunan Sawit dalam Mendukung Ketahanan Energi Berbasis Inovasi
                  Teknologi"
                </strong>
                . Kami menantikan kehadiran para peneliti, pembuat kebijakan, dan praktisi untuk bergabung dengan kami
                dalam mengeksplorasi solusi inovatif untuk membangun masa depan yang lebih cerdas, inklusif, dan
                berkelanjutan.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Latar Belakang</h2>

            <div className="max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-left">
              <p>
                Indonesia merupakan salah satu produsen kelapa sawit terbesar di dunia. Industri sawit memainkan peran
                strategis sebagai penopang ekonomi nasional, penyedia lapangan kerja, dan sumber devisa. Namun,
                keberadaannya juga membawa tantangan serius, terutama terkait isu deforestasi, lingkungan, dan tuntutan
                pasar global untuk produk yang berkelanjutan.
              </p>

              <p>
                Dalam menghadapi tantangan ini, riset dan inovasi menjadi sangat penting. Melalui penelitian,
                pengembangan teknologi, dan kolaborasi lintas sektor, industri sawit dapat ditingkatkan daya saingnya
                sekaligus menjaga keberlanjutan lingkungan.
              </p>

              <p>
                Untuk itu, Badan Riset dan Inovasi Nasional (BRIN) bersama Gabungan Perusahaan Perkebunan Indonesia
                (GPPI) menyelenggarakan Indonesia Palm Oil Research and Innovation Conference and Expo (IPORICE).
              </p>

              <div className="bg-green-100 p-6 rounded-lg space-y-4">
                <div>
                  <p className="font-semibold text-green-900 mb-2">• IPORICE 2024 bertema:</p>
                  <p className="italic text-green-800">"Daya Juang Sawit Berkelanjutan untuk Indonesia Maju"</p>
                  <p className="text-sm text-green-700 mt-2">
                    Tema ini menekankan pentingnya daya juang seluruh pemangku kepentingan agar sawit Indonesia mampu
                    bertahan di tengah tantangan global, sekaligus menjadi motor pembangunan nasional yang
                    berkelanjutan.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-green-900 mb-2">• IPORICE 2025 bertema:</p>
                  <p className="italic text-green-800">
                    "Penguatan Sinergi Sektor Perkebunan Sawit dalam Mendukung Ketahanan Energi Berbasis Inovasi
                    Teknologi"
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    Tema ini menggarisbawahi peran sawit dalam mendukung ketahanan energi nasional melalui inovasi
                    teknologi menuju target Net Zero Emission 2060.
                  </p>
                </div>
              </div>

              <p>
                IPORICE bukan hanya forum akademik, tetapi juga ruang strategis untuk mempertemukan pemerintah,
                industri, akademisi, petani, dan masyarakat sipil dalam membangun sinergi sawit berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference and Location sections with icons */}
      <section className="py-12 bg-background">
        {" "}
        {/* reduced padding from py-20 to py-12 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl mx-auto">
            {" "}
            {/* reduced spacing from space-y-16 to space-y-8 */}
            {/* The Conference */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {" "}
                {/* reduced margin from mb-6 to mb-4 */}
                <Calendar className="h-12 w-12 text-green-800" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Konferensi</h3>{" "}
              {/* reduced margin from mb-6 to mb-4 */}
              <p className="text-muted-foreground leading-relaxed">
                Konferensi ini merupakan acara tahunan unggulan IPORICE yang didedikasikan untuk memajukan penelitian
                dan mendorong kolaborasi di seluruh Indonesia. Konferensi ini berfungsi sebagai platform untuk diskusi
                terbuka, berbagi pengetahuan, pengembangan strategi kebijakan, dan jaringan antara para akademisi dan
                pembuat kebijakan. Sejak awal berdirinya, IPORICE telah menarik audiens yang luas dari berbagai
                institusi akademik dan kebijakan di seluruh Indonesia. Selama bertahun-tahun, IPORICE telah membangun
                jaringan ekstensif akademisi dan pembuat kebijakan yang fokus pada pengembangan kelapa sawit. Jaringan
                ini telah berkembang hingga mencapai massa kritis, memungkinkan kontribusi signifikan tidak hanya untuk
                penelitian akademik dan publikasi tetapi juga untuk perumusan kebijakan pengembangan kelapa sawit
                berbasis bukti di tingkat nasional, regional, dan lokal.
              </p>
            </div>
            {/* The Location */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {" "}
                {/* reduced margin from mb-6 to mb-4 */}
                <MapPin className="h-12 w-12 text-green-800" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Lokasi</h3>{" "}
              {/* reduced margin from mb-6 to mb-4 */}
              <p className="text-muted-foreground leading-relaxed">
                Ballroom Gedung Badan Riset dan Inovasi Nasional (BRIN) Lantai 2<br />
                Jl. Jenderal Gatot Subroto No. 10, Jakarta 12710
              </p>
            </div>
            {/* The Objectives */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {" "}
                {/* reduced margin from mb-6 to mb-4 */}
                <Target className="h-12 w-12 text-green-800" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Tujuan</h3>{" "}
              {/* reduced margin from mb-6 to mb-4 */}
              <p className="text-muted-foreground leading-relaxed">
                Konferensi ini bertujuan untuk mengintegrasikan berbagai penelitian dan inovasi di sektor kelapa sawit
                untuk mengatasi tantangan terkait Industri Kelapa Sawit dalam Ketahanan Energi untuk mencapai Net Zero
                Emission, meningkatkan peluang bisnis kelapa sawit nasional yang berkelanjutan, memfasilitasi pertemuan
                kolaboratif antara pemangku kepentingan di sektor kelapa sawit, memamerkan hasil penelitian dan inovasi
                industri kelapa sawit terkini, serta melakukan sosialisasi dan promosi kepada masyarakat tentang "kelapa
                sawit yang baik".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Details */}
      <section id="program" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">Agenda Acara</h2>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                The 2nd Indonesia Palm Oil Research and Innovation Conference and Expo 2025
              </p>
              <p className="text-base text-muted-foreground mb-8">1-3 Oktober 2025</p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Konferensi dan Expo Riset dan Inovasi Kelapa Sawit Indonesia (IPORICE) ke-2 tahun 2025 akan diselenggarakan
                pada tanggal 1-3 Oktober 2025, di Ballroom Gedung Badan Riset dan Inovasi Nasional (BRIN) Lantai 2, Jl.
                Jenderal Gatot Subroto No. 10, Jakarta 12710. Acara ini akan mempertemukan 250 peserta dari
                kementerian/lembaga terkait, perusahaan kelapa sawit, asosiasi perusahaan dan petani kelapa sawit,
                akademisi, lembaga riset, Organisasi Masyarakat Sipil (OMS), profesional, dan media.
              </p>

              <div className="max-w-6xl mx-auto space-y-16">
                {/* Day 1 - October 1, 2025 */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-green-900 text-white p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">Hari Ke 1: Rabu, 1 Oktober 2025</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b-2 border-green-900">
                          <th className="px-6 py-5 text-center font-bold text-gray-900 w-1/4 text-lg">WAKTU</th>
                          <th className="px-6 py-5 text-center font-bold text-gray-900 text-lg">KEGIATAN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">08.30-09.00</td>
                          <td className="px-6 py-5">
                            <div className="space-y-1">
                              <p className="text-base leading-relaxed">• Registrasi Peserta</p>
                              <p className="text-base leading-relaxed">
                                • Pembagian Goody Bag dan Pemutaran Video Sponsor
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.00-09.16</td>
                          <td className="px-6 py-5">
                            <div className="space-y-1">
                              <p className="text-base leading-relaxed">• Pembukaan oleh MC</p>
                              <p className="text-base leading-relaxed">• Tarian Pembukaan</p>
                              <p className="text-base leading-relaxed">• Menyanyikan Lagu Indonesia Raya</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.16-09.20</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Pembacaan Doa</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.20-09.25</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Laporan Ketua Panitia</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Dr. Agus Eko Nugroho S.E., M. Appl.Econ, Kepala Organisasi Riset Tata Kelola
                                Pemerintahan, Ekonomi dan Kesejahteraan Masyarakat (OR TKPEKM BRIN)
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.25-09.35</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Sambutan Selamat Datang</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Laksana Tri Handoko, Kepala Badan Riset dan Inovasi Nasional (BRIN)
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.35-09.50</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Keynote Speech</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Eddy Abdurrahman, Direktur Utama Badan Pengelola Dana Perkebunan Kelapa Sawit
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.50-09.55</td>
                          <td className="px-6 py-5 text-base leading-relaxed">
                            Peresmian The 2nd IPORICE 2025 oleh Direktur Utama BPDP
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.55-10.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Pemberian Cenderamata</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">10.00-10.05</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Foto bersama</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">10.05-10.20</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Pembukaan dan Kunjungan Expo</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">10.20-11.20</td>
                          <td className="px-6 py-5">
                            <div className="space-y-3">
                              <div>
                                <p className="font-semibold text-base mb-1">Panel 1: Sosial Ekonomi</p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800 leading-relaxed">
                                    1. Dr. Ir. Adi Setiyanto, M.Sc., Peneliti Ahli Utama, Pusat Riset Ekonomi
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">11.20-12.00</td>
                          <td className="px-6 py-5">
                            <div className="space-y-3">
                              <div>
                                <p className="font-semibold text-base mb-1">Panel 2: Teknologi Pengolahan</p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800 leading-relaxed">
                                    1. Dr. Ir. Meika Syahbana Rusli, M.T., Peneliti Ahli Utama, Pusat Riset Teknologi
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">12.00-13.30</td>
                          <td className="px-6 py-5 text-base leading-relaxed">ISHOMA (Istirahat, Sholat, Makan)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">13.30-14.45</td>
                          <td className="px-6 py-5">
                            <div className="space-y-3">
                              <div>
                                <p className="font-semibold text-base mb-1">Panel 3: Budidaya</p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800 leading-relaxed">
                                    1. Dr. Ir. Edy Sigit Sutarta, M.S., Peneliti Ahli Utama, Pusat Riset Perkebunan
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">14.45-15.25</td>
                          <td className="px-6 py-5">
                            <div className="space-y-3">
                              <div>
                                <p className="font-semibold text-base mb-1">Panel 4: Lingkungan</p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800 leading-relaxed">
                                    1. Dr. Ir. Lilik Budi Prasetyo, M.Sc., Peneliti Ahli Utama, Pusat Riset Ekologi dan
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">15.25-15.30</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Penutupan Hari Ke-1</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">15.30-15.40</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Foto Bersama</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Day 2 - October 2, 2025 */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-green-900 text-white p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">Hari Ke 2: Kamis, 2 Oktober 2025</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b-2 border-green-900">
                          <th className="px-6 py-5 text-center font-bold text-gray-900 w-1/4 text-lg">WAKTU</th>
                          <th className="px-6 py-5 text-center font-bold text-gray-900 text-lg">KEGIATAN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">08.30-09.00</td>
                          <td className="px-6 py-5">
                            <div className="space-y-1">
                              <p className="text-base leading-relaxed">Registrasi Peserta</p>
                              <p className="text-base leading-relaxed">
                                Pembagian Goody Bag dan Pemutaran Video Sponsor
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.00-09.10</td>
                          <td className="px-6 py-5">
                            <div className="space-y-1">
                              <p className="text-base leading-relaxed">• Pembukaan oleh MC</p>
                              <p className="text-base leading-relaxed">• Menyanyikan Lagu Indonesia Raya</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.10-09.15</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Sambutan Pembuka</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Amarulla Octavian, Wakil Kepala Badan Riset dan Inovasi Nasional (BRIN)
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.15-09.30</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Keynote Speech</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Eddy Abdurrahman, Direktur Utama Badan Pengelola Dana Perkebunan Kelapa Sawit
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.45-10.45</td>
                          <td className="px-6 py-5">
                            <div className="space-y-3">
                              <div>
                                <p className="font-semibold text-base mb-1">Panel 5: Inovasi dan Teknologi Terdepan</p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800 leading-relaxed">
                                    1. Dr. Ir. Meika Syahbana Rusli, M.T., Peneliti Ahli Utama, Pusat Riset Teknologi
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">10.45-11.40</td>
                          <td className="px-6 py-5">
                            <div className="space-y-3">
                              <div>
                                <p className="font-semibold text-base mb-1">Panel 6: Kebijakan dan Regulasi</p>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800 leading-relaxed">
                                    1. Dr. Ir. Adi Setiyanto, M.Sc., Peneliti Ahli Utama, Pusat Riset Ekonomi
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">11.40-11.50</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Coffee Break</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">11.50-13.00</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Diskusi Panel dan Tanya Jawab</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Moderator: Dr. Ir. Adi Setiyanto, M.Sc., Peneliti Ahli Utama, Pusat Riset Ekonomi
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">13.00-14.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">ISHOMA (Istirahat, Sholat, Makan)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">14.00-14.30</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Kunjungan Expo</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">14.30-15.30</td>
                          <td className="px-6 py-5">
                            <div>
                              <p className="font-semibold text-base mb-1">Penutupan dan Kesimpulan</p>
                              <p className="text-sm text-gray-800 leading-relaxed">
                                Dr. Agus Eko Nugroho S.E., M. Appl.Econ, Kepala Organisasi Riset Tata Kelola
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">15.30-15.40</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Foto Bersama</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">16.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Selesai</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Day 3 - October 3, 2025 */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-green-900 text-white p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">Hari Ke 3: Jumat, 3 Oktober 2025</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b-2 border-green-900">
                          <th className="px-6 py-5 text-center font-bold text-gray-900 w-1/4 text-lg">WAKTU</th>
                          <th className="px-6 py-5 text-center font-bold text-gray-900 text-lg">KEGIATAN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">07.00-07.30</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Registrasi Peserta</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">07.30-09.30</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Kunjungan Lapangan</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.30-09.35</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Coffee Break</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.35-09.40</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Persiapan Presentasi</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.40-09.45</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Pembukaan Sesi Lapangan</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">09.45-10.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Presentasi Hasil Kunjungan</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">10.00-10.15</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Diskusi dan Tanya Jawab</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">10.15-11.45</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Penutupan dan Evaluasi</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">11.45-12.30</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Shalat Jumat</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">12.30-13.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">Makan Siang</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">13.00-15.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">
                            Lanjutan Kunjungan/ Praktek Lapangan dan Menikmati Hidangan Sore
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-5 font-bold text-green-900 text-base">15.00-17.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed">
                            Perjalanan kembali menuju Kantor Pusat Kementerian Pertanian RI, Jakarta
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-5 font-bold text-green-900 text-base">17.00</td>
                          <td className="px-6 py-5 text-base leading-relaxed font-medium">
                            Acara The 2nd IPORICE 2025 selesai
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/brin-building-jakarta.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <p className="text-lg mb-4">
              THE 2ND IPORICE 2025 will be held at :
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hotel/Venue Name */}
            <div className="text-center lg:text-left text-white">
              <p className="text-xl mb-2">Ballroom Gedung</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-4">BRIN</h2>
              <p className="text-xl">JAKARTA</p>
            </div>

            {/* Contact Information Box */}
            <div className="bg-green-800 text-white p-8 rounded-lg shadow-2xl max-w-md w-full">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-white" />
                <h3 className="text-xl font-bold text-white">VENUE INFORMATION</h3>
              </div>

              <div className="space-y-4 text-sm text-white">
                <div>
                  <p className="font-semibold mb-1 text-white">Address:</p>
                  <div className="text-center text-white">
                    <p>Ballroom Gedung Badan Riset dan</p>
                    <p>Inovasi Nasional (BRIN) Lantai 2</p>
                    <p>Jl. Jenderal Gatot Subroto No. 10</p>
                    <p>Jakarta 12710</p>
                    <p>Central Jakarta, Indonesia</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-1 text-white">Phone:</p>
                  <p className="text-white">+62 21 5251542</p>
                </div>

                <div>
                  <p className="font-semibold mb-1 text-white">Email:</p>
                  <p className="text-white">preijp@brin.go.id</p>
                </div>

                <div className="pt-4">
                  <button className="bg-white text-green-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors w-full border border-green-600">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Researcher Quotes Section */}
      <section id="reviews" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Kata Ulasan</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              IPORICE menjadi ruang bagi para peneliti untuk menyuarakan pandangannya:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quote 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-800">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-800 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Strategi peningkatan produktivitas sawit adalah kunci pencapaian energi berkelanjutan."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-green-800">Dr. Abdul Roni Angkat</p>
                <p className="text-sm text-gray-600">Kementerian Pertanian</p>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-800">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-800 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Implementasi bioenergi dan ISPO sangat penting untuk transisi energi."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-green-800">Prof. Eniya Listiani Dewi</p>
                <p className="text-sm text-gray-600">Kementerian ESDM</p>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-800">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-800 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Transformasi industri sawit ramah lingkungan adalah kunci ekonomi hijau."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-green-800">Izzana Salleh</p>
                <p className="text-sm text-gray-600">CPOPC</p>
              </div>
            </div>

            {/* Quote 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-800">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-800 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Generasi Z memiliki peran penting dalam masa depan SDM sawit."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-green-800">Ir. St. Nugroho Kristono</p>
                <p className="text-sm text-gray-600">Peneliti Sawit</p>
              </div>
            </div>

            {/* Quote 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-800">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-800 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Petani rakyat adalah pilar kekuatan industri sawit berkelanjutan."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-green-800">Dr. Lila Juniyanti</p>
                <p className="text-sm text-gray-600">BRIN</p>
              </div>
            </div>

            {/* Quote 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-800">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-800 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Ekonomi sirkuler sawit membuka peluang ekonomi baru sekaligus menjaga lingkungan."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-green-800">Prof. Erliza Hambali</p>
                <p className="text-sm text-gray-600">IPB</p>
              </div>
            </div>

            {/* Quote 7 - Forum Statement */}
            <div className="bg-green-800 text-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-3">
              <div className="text-center">
                <Quote className="h-10 w-10 text-white mb-4 mx-auto" />
                <p className="text-xl leading-relaxed mb-6">
                  "Suara peneliti harus menjadi dasar kebijakan sawit berkelanjutan."
                </p>
                <div className="border-t border-green-600 pt-4">
                  <p className="font-semibold text-lg">Forum Peneliti IPORICE 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Speakers */}
      <section id="speakers" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Daftar Pembicara</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Para narasumber utama dan panelis IPORICE 2025 yang akan berbagi wawasan strategis seputar inovasi
              kelapa sawit dan ketahanan energi nasional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {keynoteSpeakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-green-600"
              >
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-green-100 mb-4"
                />
                <Badge className="mb-3 bg-green-700 text-white">Keynote Speaker</Badge>
                <h3 className="text-xl font-semibold text-foreground">{speaker.name}</h3>
                <p className="text-muted-foreground mt-2">{speaker.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Hosts, Sponsors & Partners */}
      <section id="sponsors" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">HOSTS, SPONSORS & PARTNERS</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
              <div className="flex items-center justify-center h-24">
                <img
                  src="/brin-logo-new.png"
                  alt="BRIN - Badan Riset dan Inovasi Nasional"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24">
                <img
                  src="/gppi-logo-new.png"
                  alt="GPPI - Gabungan Perusahaan Perkebunan Indonesia"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-12 mt-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-items-center">
              <div className="flex flex-col items-center gap-6 sm:gap-8 lg:pr-8">
                <img
                  src="/pupuk indonesia.jpg"
                  alt="Pupuk Indonesia"
                  className="max-h-32 w-full max-w-xs object-contain"
                />
                <img
                  src="/cpoc.jpg"
                  alt="CPOPC"
                  className="max-h-28 w-full max-w-xs object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-6 sm:gap-8 lg:border-x lg:border-green-100 lg:px-8">
                <img
                  src="/BPDP.jpg"
                  alt="BPDP"
                  className="max-h-32 w-full max-w-xs object-contain"
                />
                <img
                  src="/Pertamina_Logo.svg.png"
                  alt="Pertamina"
                  className="max-h-20 w-full max-w-xs object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-6 sm:gap-8 lg:pl-8">
                <img
                  src="/nusantara.png"
                  alt="Perkebunan Nusantara"
                  className="max-h-28 w-full max-w-xs object-contain"
                />
                <img
                  src="/Logo-triputra-agro-persada.png"
                  alt="Triputra Agro Persada"
                  className="max-h-20 w-full max-w-xs object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      {/* Footer */}

      <footer className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Removed IPORICE 2025 section */}

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#home" className="text-background/80 hover:text-green-400 transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-background/80 hover:text-green-400 transition-colors">
                    Tentang Konferensi
                  </a>
                </li>
                <li>
                  <a href="#program" className="text-background/80 hover:text-green-400 transition-colors">
                    Program & Agenda
                  </a>
                </li>
                <li>
                  <a href="#registration" className="text-background/80 hover:text-green-400 transition-colors">
                    Pendaftaran
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-background/80 hover:text-green-400 transition-colors">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontak</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-background/80">081110646807</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-background/80">preijp@brin.go.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-background/80">
                      Gedung Widya Graha, Lantai 9<br />
                      Jl. Jenderal Gatot Subroto No. 10
                      <br />
                      Jakarta 12710
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed Penyelenggara (organizers) section */}

          {/* Copyright */}
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            
              &copy; 2025 IPORICE - Indonesia Palm Oil Research and Innovation Conference Expo. All rights reserved.
            
          </div>
        </div>
      </footer>
    </div>
  )
}





