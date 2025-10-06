function Hero() {
  try {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [showContent, setShowContent] = React.useState(false);

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Preload hero image with optimized loading strategy
    React.useEffect(() => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
        setTimeout(() => setShowContent(true), 100);
      };
      img.onerror = () => {
        // Fallback if image fails to load
        setImageLoaded(true);
        setTimeout(() => setShowContent(true), 100);
      };
      img.src = "data/img/wisuda_santri-1.jpg";
      
      // Preload critical images for better performance
      const criticalImages = [
        'data/img/logo_pqsa.jpg',
        'data/img/ratu_1.jpg'
      ];
      
      criticalImages.forEach(src => {
        const preloadImg = new Image();
        preloadImg.src = src;
      });
    }, []);

    return (
      <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg font-semibold">Memuat...</p>
            </div>
          </div>
        )}

        {/* Background Image with Overlay */}
        <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src="data/img/wisuda_santri-1.jpg" 
            alt="Wisuda santri Pesantren Al-Quran Shalahuddin Al-Ayyubi - Kelulusan program tahfidz di Kulon Progo Yogyakarta"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute bottom-20 right-20 w-12 h-12 border border-white/10 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full section-padding pt-32 pb-20">
          <div className="max-w-7xl mx-auto flex items-center justify-center min-h-screen">
            <div className="w-full flex items-center justify-center">
              
              {/* Main Content */}
              <div className={`max-w-4xl text-center text-white transition-all duration-700 ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Sejak 2018</span>
                </div>
                <h1 className="leading-tight mb-6">
                  <span className={`block text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-2 transition-all duration-1000 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`} style={{transitionDelay: '200ms'}}>
                    Pesantren Al-Quran
                  </span>
                  <span className={`block text-transparent bg-gradient-to-r from-[var(--light-green)] to-[var(--accent-color)] bg-clip-text text-4xl md:text-5xl lg:text-6xl font-bold font-serif transition-all duration-1000 text-glow ${
                    showContent ? 'opacity-100 translate-y-0 typing-animation' : 'opacity-0 translate-y-4'
                  }`} style={{transitionDelay: '400ms'}}>
                    Shalahuddin Al-Ayyubi
                  </span>
                </h1>

                <div className={`bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 transition-all duration-1000 ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`} style={{transitionDelay: '600ms'}}>
                  <p className="text-xl md:text-2xl font-semibold text-[var(--light-green)] mb-2 font-serif">
                    "Menjadi Pelindung dan Pelayan Al Quran"
                  </p>
                  <p className="text-lg text-white/80">
                    Wujudkan impian menghafal Al-Qur'an dengan program tahfidz berkualitas tinggi
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '800ms'}}>
                  <button 
                    onClick={() => navigateToSection('program')}
                    className={`btn-primary text-lg px-8 py-4 gap-3 hover:scale-105 transition-all duration-300 ${
                      showContent ? 'animate-pulse' : ''
                    }`}
                    style={{animationDelay: '1200ms', animationDuration: '2s', animationIterationCount: '3'}}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    <span>Lihat Program Kami</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => navigateToSection('kontak')}
                    className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-3 text-lg hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Hubungi Kami</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{transitionDelay: '1000ms'}}>
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium">Scroll untuk melihat lebih</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}