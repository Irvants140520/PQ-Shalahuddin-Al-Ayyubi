function Gallery() {
  try {
    // Gallery data - mudah untuk di-maintain, tambah/edit/hapus foto di sini
    const galleryImages = [
      {
        id: 1,
        src: 'data/img/wisuda_santri-1.jpg',
        alt: 'Wisuda santri PQSA',
        title: 'Wisuda Santri Angkatan III & IV',
        description: 'Momen kebanggaan wisuda santri yang telah menyelesaikan program tahfidz',
        category: 'Wisuda'
      },
      {
        id: 2,
        src: 'data/img/wisuda-santri-3.JPG',
        alt: 'Wisuda santri PQSA',
        title: 'Wisuda Santri Angkatan I',
        description: 'Momen kebanggaan wisuda santri yang telah menyelesaikan program tahfidz',
        category: 'Wisuda'
      },
      {
        id: 3,
        src: 'data/img/ratu_1.jpg',
        alt: 'Ustadzah Ratu Kusumawati',
        title: 'Pendiri PQSA',
        description: 'Ustadzah Ratu Kusumawati, pendiri dan pengasuh PQSA',
        category: 'Pengasuh'
      },
      {
        id: 4,
        src: 'data/img/kelas.JPG',
        alt: 'Kegiatan mengaji bersama',
        title: 'Kegiatan Mengaji',
        description: 'Suasana pembelajaran Al-Qur\'an dengan metode yang sistematis',
        category: 'Pembelajaran'
      },
      {
        id: 5,
        src: 'data/img/ahadpon.jpg',
        alt: 'Pengajian Ahad PON',
        title: 'Pengajian Ahad PON',
        description: 'Pengajian bersama warga sekitar',
        category: 'Kegiatan'
      },
      {
        id: 6,
        src: 'data/img/kelas-2.jpg',
        alt: 'Kegiatan diskusi agama',
        title: 'Diskusi Keagamaan',
        description: 'Forum diskusi untuk memperdalam pemahaman agama Islam',
        category: 'Kegiatan'
      },
      {
        id: 7,
        src: 'data/img/kegiatan-1.JPG',
        alt: 'Kegiatan santri PQSA',
        title: 'Kegiatan Santri',
        description: 'Berbagai aktivitas positif santri di lingkungan pesantren',
        category: 'Kegiatan'
      },
      {
        id: 8,
        src: 'data/img/kegiatan-2.JPG',
        alt: 'Kegiatan pembelajaran',
        title: 'Kegiatan Pembelajaran',
        description: 'Suasana pembelajaran yang aktif dan interaktif',
        category: 'Pembelajaran'
      },
      {
        id: 9,
        src: 'data/img/makan-bareng-1.JPG',
        alt: 'Makan bersama santri',
        title: 'Makan Bersama',
        description: 'Kegiatan makan bersama yang mempererat ukhuwah islamiyah',
        category: 'Kegiatan'
      },
      {
        id: 10,
        src: 'data/img/ratu_withsantri.jpg',
        alt: 'Ustadzah Ratu bersama santri',
        title: 'Ustadzah Ratu & Santri',
        description: 'Ustadzah Ratu Kusumawati bersama para santri PQSA',
        category: 'Pengasuh'
      },
      {
        id: 11,
        src: 'data/img/wisuda-santri-2.jpg',
        alt: 'Wisuda santri PQSA',
        title: 'Wisuda Santri Angkatan II',
        description: 'Momen kebanggaan wisuda santri angkatan kedua',
        category: 'Wisuda'
      }
    ];

    const [selectedImage, setSelectedImage] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = React.useState('Semua');
    const [showAll, setShowAll] = React.useState(false);
    const [loadedImages, setLoadedImages] = React.useState(new Set());

    // Get unique categories
    const categories = ['Semua', ...new Set(galleryImages.map(img => img.category))];

    // Filter images by category
    const filteredImages = selectedCategory === 'Semua' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);

    // Limit display to 6 images (2 rows x 3 columns) unless showAll is true
    const displayImages = showAll ? filteredImages : filteredImages.slice(0, 6);
    const hasMoreImages = filteredImages.length > 6;

    // Handle image load with Intersection Observer for lazy loading
    const handleImageLoad = (imageId) => {
      setLoadedImages(prev => new Set([...prev, imageId]));
    };

    // Lazy loading with Intersection Observer
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = img.getAttribute('data-src');
              if (src) {
                img.src = src;
                img.removeAttribute('data-src');
              }
              observer.unobserve(img);
            }
          });
        },
        {
          rootMargin: '200px',
          threshold: 0.1
        }
      );

      const imageElements = document.querySelectorAll('.gallery-image[data-src]');
      imageElements.forEach((img) => observer.observe(img));

      return () => observer.disconnect();
    }, [displayImages]);

    // Reset loaded images when category changes
    React.useEffect(() => {
      setLoadedImages(new Set());
      setShowAll(false);
    }, [selectedCategory]);

    // Handle keyboard events and prevent body scroll
    React.useEffect(() => {
      const handleKeyDown = (e) => {
        if (!selectedImage) return;

        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const currentIndex = displayImages.findIndex(img => img.id === selectedImage.id);
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : displayImages.length - 1;
          setSelectedImage(displayImages[prevIndex]);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          const currentIndex = displayImages.findIndex(img => img.id === selectedImage.id);
          const nextIndex = currentIndex < displayImages.length - 1 ? currentIndex + 1 : 0;
          setSelectedImage(displayImages[nextIndex]);
        }
      };

      if (selectedImage) {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);
      } else {
        // Restore body scroll when modal is closed
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }, [selectedImage, displayImages]);

    return (
      <section id="galeri" className="section-padding bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden" data-name="gallery" data-file="components/Gallery.js">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-20 w-40 h-40 border border-[var(--primary-color)] rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-[var(--accent-color)] rounded-lg rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--primary-color)]/10 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
              <span className="text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">Galeri Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Galeri</span>
              <span className="text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text"> Kegiatan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Saksikan momen-momen berharga dan berbagai kegiatan inspiratif di Pesantren Al Qur'an Shalahuddin Al-Ayyubi
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                  {/* Loading placeholder */}
                  {!loadedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-gray-300 border-t-[var(--primary-color)] rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img 
                    data-src={image.src}
                    alt={image.alt}
                    className={`gallery-image w-full h-64 object-cover transition-all duration-500 group-hover:scale-105 ${
                      loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => {
                      console.warn(`Failed to load image: ${image.src}`);
                      handleImageLoad(image.id); // Still mark as "loaded" to remove spinner
                    }}
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    style={{
                      imageRendering: 'auto',
                      willChange: 'transform'
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[var(--accent-color)] text-xs font-semibold px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreImages && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                {showAll ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span>{showAll ? `Tampilkan Lebih Sedikit` : `Lihat Semua Foto (${filteredImages.length - 6} lainnya)`}</span>
                {showAll ? (
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          )}

          {/* Modal for enlarged image */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-hidden"
              onClick={() => setSelectedImage(null)}
              style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}
            >
              <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {/* Close button - lebih prominent */}
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-16 right-0 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/30"
                  title="Tutup (ESC)"
                >
                  <svg className="w-6 h-6 font-bold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Close instruction */}
                <div className="absolute -top-16 left-0 text-white/70 text-sm">
                  Klik di luar foto atau tekan ESC untuk menutup
                </div>
                
                {/* Loading state for modal image */}
                {!loadedImages.has(`modal-${selectedImage.id}`) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-sm">Memuat gambar...</p>
                    </div>
                  </div>
                )}
                
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  onLoad={() => handleImageLoad(`modal-${selectedImage.id}`)}
                  className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                    loadedImages.has(`modal-${selectedImage.id}`) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    maxWidth: '90vw',
                    maxHeight: '80vh',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
                
                {/* Navigation arrows */}
                {displayImages.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = displayImages.findIndex(img => img.id === selectedImage.id);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : displayImages.length - 1;
                        setSelectedImage(displayImages[prevIndex]);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      title="Foto sebelumnya"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = displayImages.findIndex(img => img.id === selectedImage.id);
                        const nextIndex = currentIndex < displayImages.length - 1 ? currentIndex + 1 : 0;
                        setSelectedImage(displayImages[nextIndex]);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      title="Foto selanjutnya"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <div className="text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-[var(--accent-color)] text-xs font-semibold px-3 py-1 rounded-full">
                        {selectedImage.category}
                      </span>
                      <span className="text-xs text-white/70">
                        {displayImages.findIndex(img => img.id === selectedImage.id) + 1} / {displayImages.length}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    return null;
  }
}