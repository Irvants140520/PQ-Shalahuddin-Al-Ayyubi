function Testimonial() {
  try {
    // Function to check if image exists, if not use fallback
    const getImageSrc = (imagePath) => {
      // You can implement actual image existence check here if needed
      // For now, we'll use the provided path and let the browser handle missing images
      // with proper fallback UI
      return imagePath;
    };

    // Testimonial data - semua santri dan alumni perempuan
    const testimonials = [
      // Alumni (2 testimoni)
      {
        id: 1,
        name: "Siti Aisyah",
        role: "Alumni Angkatan II - Program 3 Bulan",
        category: "Alumni",
        image: "", // Tidak menggunakan foto, langsung siluet
        fallbackImage: true,
        testimonial: "PQSA bukan hanya mengajarkan hafalan, tapi juga akhlak dan kemandirian. Sekarang saya menjadi ustadzah di pesantren lain dan menerapkan ilmu yang saya dapat dari PQSA. Metode pembelajaran di PQSA sangat cocok untuk perempuan.",
        achievement: "Hafidz 30 Juz"
      },
      {
        id: 2,
        name: "Fatimah Az-Zahra",
        role: "Alumni Angkatan III - Program 1 Bulan",
        category: "Alumni",
        image: "",
        fallbackImage: true,
        testimonial: "Alhamdulillah, meski hanya mengikuti program 1 bulan, saya berhasil menghafal 3 juz dengan baik. Lingkungan yang kondusif dan ustadzah yang sabar membuat proses belajar sangat menyenangkan.",
        achievement: "Hafidz 3 Juz"
      },
      
      // Santri Aktif (2 testimoni)
      {
        id: 3,
        name: "Aisyah Nurul",
        role: "Santri Aktif - Program 3 Bulan",
        category: "Santri",
        image: "",
        fallbackImage: true,
        testimonial: "Suasana belajar di PQSA sangat menyenangkan dan nyaman untuk perempuan. Para ustadzah sangat memahami kebutuhan kami. Target hafalan 10 juz Insya Allah tercapai.",
        achievement: "Target 10 Juz"
      },
      {
        id: 4,
        name: "Zahra Putri",
        role: "Santri Aktif - Program 1 Bulan",
        category: "Santri",
        image: "",
        fallbackImage: true,
        testimonial: "Metode muraja'ah di PQSA sangat efektif untuk pemula seperti saya. Dalam 1 bulan sudah bisa menghafal 2 juz dengan tartil. Sangat recommended untuk muslimah!",
        achievement: "Hafidz 2 Juz"
      },
      
      // Orangtua (2 testimoni)
      {
        id: 5,
        name: "Ibu Sari Dewi",
        role: "Wali Santri Program 3 Bulan",
        category: "Orangtua",
        image: "",
        fallbackImage: true,
        testimonial: "Sebagai orangtua, saya sangat puas dengan perkembangan anak saya di PQSA. Tidak hanya hafalan yang bertambah, akhlaknya juga semakin baik. Yang paling saya hargai adalah lingkungan yang aman dan nyaman untuk putri saya.",
        achievement: "Kepuasan Orangtua"
      },
      {
        id: 6,
        name: "Ibu Rahayu",
        role: "Wali Santri Program 1 Bulan",
        category: "Orangtua",
        image: "",
        fallbackImage: true,
        testimonial: "Komunikasi dengan pihak pesantren sangat baik. Kami selalu mendapat laporan perkembangan anak secara rutin. Fasilitas dan pelayanan PQSA sangat memuaskan, khususnya untuk program short course 1 bulan.",
        achievement: "Komunikasi Excellent"
      }
    ];

    const [activeCategory, setActiveCategory] = React.useState('Semua');
    const [currentSlide, setCurrentSlide] = React.useState(0);

    // Get unique categories
    const categories = ['Semua', ...new Set(testimonials.map(t => t.category))];

    // Filter testimonials by category
    const filteredTestimonials = activeCategory === 'Semua' 
      ? testimonials 
      : testimonials.filter(t => t.category === activeCategory);

    // Auto slide functionality with optimized interval
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
      }, 8000); // Increased from 5s to 8s for better performance
      return () => clearInterval(interval);
    }, [filteredTestimonials.length]);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    };

    return (
      <section id="testimonial" className="section-padding bg-gradient-to-br from-[var(--primary-color)]/5 via-white to-[var(--secondary-color)]/5 relative overflow-hidden" data-name="testimonial" data-file="components/Testimonial.js">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-32 h-32 border border-[var(--primary-color)] rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-[var(--accent-color)] rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-[var(--secondary-color)] rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--primary-color)]/10 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
              <span className="text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">Testimoni</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Apa Kata</span><br/>
              <span className="text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text">
                Mereka Tentang PQSA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dengarkan pengalaman inspiratif dari alumni, santri aktif, dan orangtua santri PQSA
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Profile Silhouette */}
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="relative mb-4">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-white overflow-hidden bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 flex items-center justify-center">
                              {/* Silhouette Icon */}
                              <svg className="w-16 h-16 md:w-20 md:h-20 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-[var(--primary-color)] rounded-full p-2">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                              </svg>
                            </div>
                          </div>
                          {/* Name Display */}
                          <h4 className="text-lg font-bold text-gray-900 text-center">{testimonial.name}</h4>
                          <p className="text-sm text-[var(--primary-color)] font-semibold text-center">{testimonial.role}</p>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          <div className="mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              testimonial.category === 'Alumni' ? 'bg-green-100 text-green-800' :
                              testimonial.category === 'Santri' ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {testimonial.category}
                            </span>
                          </div>
                          
                          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                            "{testimonial.testimonial}"
                          </blockquote>
                          
                          <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                              <svg className="w-4 h-4 text-[var(--accent-color)]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                              </svg>
                              <span className="text-sm text-gray-600">{testimonial.achievement}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredTestimonials.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {filteredTestimonials.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[var(--primary-color)] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Bergabunglah dengan Keluarga Besar PQSA
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Raih kesempatan emas untuk menghafal Al-Qur'an dengan metode terbaik dan bimbingan ustadz berpengalaman
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('program').scrollIntoView({behavior: 'smooth'})}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  <span>Lihat Program</span>
                </button>
                <button 
                  onClick={() => document.getElementById('kontak').scrollIntoView({behavior: 'smooth'})}
                  className="inline-flex items-center gap-3 bg-white border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hubungi Kami</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonial component error:', error);
    return null;
  }
}
