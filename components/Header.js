function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="bg-white shadow-sm fixed w-full top-0 z-50" data-name="header" data-file="components/Header.js">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <img 
                  src="data/img/logo_pqsa.jpg" 
                  alt="Logo Pesantren Al-Quran Shalahuddin Al-Ayyubi PQSA - Program tahfidz Kulon Progo" 
                  className="h-10 w-10 rounded-lg object-cover shadow-sm"
                />
                <div>
                  <h1 className="text-xl font-bold text-[var(--primary-color)]">PQSA</h1>
                  <p className="text-xs text-gray-500 leading-none">Shalahuddin Al-Ayyubi</p>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => navigateToSection('beranda')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  Beranda
                </button>
                <button onClick={() => navigateToSection('tentang')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  Tentang
                </button>
                <button onClick={() => navigateToSection('program')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  Program
                </button>
                <button onClick={() => navigateToSection('galeri')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  Galeri
                </button>
                <button onClick={() => navigateToSection('testimonial')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  Testimoni
                </button>
                <button onClick={() => navigateToSection('faq')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </button>
                <button onClick={() => navigateToSection('kontak')} className="text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-sm font-medium">
                  Kontak
                </button>
                <button onClick={() => navigateToSection('kontak')} className="btn-primary ml-4">
                  Daftar Sekarang
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[var(--primary-color)]">
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button onClick={() => navigateToSection('beranda')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  Beranda
                </button>
                <button onClick={() => navigateToSection('tentang')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  Tentang
                </button>
                <button onClick={() => navigateToSection('program')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  Program
                </button>
                <button onClick={() => navigateToSection('galeri')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  Galeri
                </button>
                <button onClick={() => navigateToSection('testimonial')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  Testimoni
                </button>
                <button onClick={() => navigateToSection('faq')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  FAQ
                </button>
                <button onClick={() => navigateToSection('kontak')} className="block w-full text-left text-gray-700 hover:text-[var(--primary-color)] px-3 py-2 rounded-md text-base font-medium">
                  Kontak
                </button>
                <div className="px-3 py-2">
                  <button onClick={() => navigateToSection('kontak')} className="btn-primary w-full justify-center">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}