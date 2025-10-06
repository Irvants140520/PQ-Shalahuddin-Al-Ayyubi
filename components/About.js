function About() {
  try {
    const [showBiography, setShowBiography] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);
    const [visibleItems, setVisibleItems] = React.useState(new Set());

    // Intersection Observer for scroll animations
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, entry.target.dataset.item]));
            }
          });
        },
        { threshold: 0.3 }
      );

      // Observe timeline items
      document.querySelectorAll('[data-item]').forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, []);

    // Biography preview (first 2 paragraphs)
    const biographyPreview = `Ustadzah Ratu Kusumawati, S.Si., M.A. adalah pendiri sekaligus pengasuh Pondok Pesantren Al Quran Shalahuddin Al Ayyubi (PQSA) yang berlokasi di Karangsari, Pengasih, Kulon Progo, Daerah Istimewa Yogyakarta. Beliau dikenal sebagai sosok pendidik, peneliti, dan da'iyah yang mendedikasikan seluruh kehidupannya untuk menghidupkan nilai-nilai Al Quran dalam kehidupan masyarakat.

Perjalanan intelektual beliau bermula dari dunia sains. Ustadzah Ratu merupakan lulusan Program Studi Fisika, Konsentrasi Nuklir Partikel, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Indonesia...`;

    const openBiographyPage = () => {
      // Create a new page with full biography
      const biographyWindow = window.open('', '_blank');
      biographyWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Biografi Ustadzah Ratu Kusumawati - PQSA</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { font-family: 'Inter', sans-serif; line-height: 1.7; }
            .gradient-text { background: linear-gradient(135deg, #0d9488, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          </style>
        </head>
        <body class="bg-gray-50">
          <div class="max-w-4xl mx-auto py-12 px-6">
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div class="bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-white text-center">
                <img src="data/img/ratu_1.jpg" alt="Ustadzah Ratu Kusumawati" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover">
                <h1 class="text-3xl font-bold mb-2">Ustadzah Ratu Kusumawati, S.Si., M.A.</h1>
                <p class="text-teal-100">Pendiri & Pengasuh PQSA</p>
              </div>
              <div class="p-8">
                <div class="prose prose-lg max-w-none">
                  <h2 class="gradient-text text-2xl font-bold mb-4">Profil Pendiri dan Pengasuh</h2>
                  <p class="mb-4">Ustadzah Ratu Kusumawati, S.Si., M.A. adalah pendiri sekaligus pengasuh Pondok Pesantren Al Quran Shalahuddin Al Ayyubi (PQSA) yang berlokasi di Karangsari, Pengasih, Kulon Progo, Daerah Istimewa Yogyakarta. Beliau dikenal sebagai sosok pendidik, peneliti, dan da'iyah yang mendedikasikan seluruh kehidupannya untuk menghidupkan nilai-nilai Al Quran dalam kehidupan masyarakat.</p>
                  
                  <h3 class="gradient-text text-xl font-bold mb-3 mt-6">Perjalanan Intelektual</h3>
                  <p class="mb-4">Perjalanan intelektual beliau bermula dari dunia sains. Ustadzah Ratu merupakan lulusan Program Studi Fisika, Konsentrasi Nuklir Partikel, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Indonesia. Meski berlatar belakang sains eksakta, beliau kemudian menempuh pendidikan magister di Program Studi Psikologi Pendidikan Islam, Fakultas Interdisciplinary Islamic Studies, UIN Sunan Kalijaga Yogyakarta, untuk memperdalam integrasi antara nilai-nilai Al Quran dan pengembangan potensi manusia.</p>
                  
                  <h3 class="gradient-text text-xl font-bold mb-3 mt-6">Titik Balik Spiritual</h3>
                  <p class="mb-4">Perjalanan spiritual beliau mengalami titik balik penting setelah kecelakaan berat pada Februari 2016 yang menyebabkan amnesia parsial dan cacat mata permanen (diplopia binokuler myogenik). Dalam masa pemulihan yang panjang, beliau justru menemukan kekuatan luar biasa melalui interaksi dengan Al Quran. Dengan izin Allah, hanya dalam waktu kurang dari dua tahun, tepatnya tahun 2018, beliau mampu menyelesaikan hafalan Al Quran 30 juz di tengah keterbatasan fisik dan daya ingat. Pengalaman ini menjadi tonggak spiritual yang mengantarkannya pada jalan dakwah dan pendidikan Al Quran.</p>
                  
                  <h3 class="gradient-text text-xl font-bold mb-3 mt-6">Pendirian PQSA</h3>
                  <p class="mb-4">Bersamaan dengan selesainya program takhassus, pada Agustus 2018, beliau mendirikan Pondok Pesantren Al Quran Shalahuddin Al Ayyubi (PQSA) sebagai wujud rasa syukur dan ikhtiar untuk melahirkan generasi penjaga Al Quran yang berilmu, berakhlak, dan beramal. Pesantren ini didirikan atas amanah masyarakat dan tokoh setempat, serta disahkan secara legal melalui Akta Notaris (24 Oktober 2017) dan SK Kemenkumham RI (8 November 2017).</p>
                  
                  <h3 class="gradient-text text-xl font-bold mb-3 mt-6">Metode Q</h3>
                  <p class="mb-4">Dari pengalaman pribadinya berinteraksi dengan Al Quran, beliau kemudian mengembangkan Metode Q, yaitu sebuah sistem pembelajaran dan pembentukan diri berbasis Al Quran yang memadukan aspek spiritual, psikologis, dan aplikatif. Metode ini telah diterapkan secara resmi di PQSA sejak 2018 dan dipatenkan pada tahun 2019. Seiring perkembangan riset, Metode Q dikembangkan sebagai intervensi terapi gangguan kecemasan dan depresi (2022), serta dijadikan kajian akademik dalam penelitian tesis (2023).</p>
                  
                  <h3 class="gradient-text text-xl font-bold mb-3 mt-6">Karya dan Kontribusi</h3>
                  <p class="mb-4">Selain sebagai pengasuh pesantren, Ustadzah Ratu juga aktif menulis karya ilmiah dan populer yang diterbitkan di berbagai media nasional dan jurnal akademik. Beliau juga menulis beberapa buku, di antaranya "Indahnya Ikhtiar Menjadi Keluarga Allah" (2017) dan "Bersama Al Quran" (2021).</p>
                  
                  <h3 class="gradient-text text-xl font-bold mb-3 mt-6">Visi Masa Depan</h3>
                  <p class="mb-4">Sebagai seorang akademisi dan peneliti, Ustadzah Ratu berencana melanjutkan studi doktoral bidang Studi Al Quran dan Hadits di UIN Sunan Kalijaga pada tahun 2025. Melalui kepemimpinan beliau, PP Al Quran Shalahuddin Al Ayyubi tumbuh menjadi pesantren yang tidak hanya berorientasi pada hafalan, tetapi juga pembentukan akhlak, kemandirian, dan kontribusi sosial.</p>
                </div>
                <div class="mt-8 text-center">
                  <button onclick="window.close()" class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300">
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
    };

    return (
      <section id="tentang" className="section-padding bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden" data-name="about" data-file="components/About.js">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[var(--primary-color)] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[var(--accent-color)] rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[var(--secondary-color)] rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[var(--primary-color)]/10 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
              <span className="text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">Tentang Kami</span>
            </div>
            
            {/* Logo Section */}
            <div className="mb-8">
              <img 
                src="data/img/logo_pqsa.jpg" 
                alt="Logo resmi Pesantren Al-Quran Shalahuddin Al-Ayyubi PQSA - Lembaga tahfidz Quran di Yogyakarta" 
                className="w-24 h-24 mx-auto rounded-2xl object-cover shadow-xl border-4 border-white"
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Pesantren Al Qur'an</span><br/>
              <span className="text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text">
                Shalahuddin Al-Ayyubi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Perjalanan kami dimulai sejak 2018, berdedikasi mencetak generasi Qur'ani yang berakhlak mulia dan bermanfaat bagi umat
            </p>
          </div>
        </div>

          {/* Timeline Story Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h3>
              <p className="text-lg text-gray-600">Dari mimpi sederhana hingga menjadi rumah bagi para penghafal Al-Qur'an</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Story Content */}
              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div 
                  className={`flex gap-6 transition-all duration-700 ${
                    visibleItems.has('timeline-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  data-item="timeline-1"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center transition-all duration-500 ${
                      visibleItems.has('timeline-1') ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">Agustus 2018</h4>
                      <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium">Awal Mula</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-[var(--primary-color)]">Dari kecelakaan menuju keajaiban.</span> Setelah mengalami kecelakaan berat pada 2016 yang menyebabkan amnesia parsial, 
                      Ustadzah Ratu justru menemukan kekuatan luar biasa melalui Al-Qur'an dan mendirikan PQSA sebagai wujud syukur.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div 
                  className={`flex gap-6 transition-all duration-700 delay-200 ${
                    visibleItems.has('timeline-2') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  data-item="timeline-2"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center transition-all duration-500 delay-200 ${
                      visibleItems.has('timeline-2') ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">Metode Q</h4>
                      <span className="bg-[var(--accent-color)]/10 text-[var(--accent-color)] px-3 py-1 rounded-full text-sm font-medium">Inovasi</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-[var(--accent-color)]">Terobosan pembelajaran Al-Qur'an.</span> Mengembangkan Metode Q yang memadukan aspek spiritual, psikologis, dan aplikatif - 
                      bahkan dipatenkan dan digunakan sebagai terapi kecemasan dan depresi.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div 
                  className={`flex gap-6 transition-all duration-700 delay-500 ${
                    visibleItems.has('timeline-3') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  data-item="timeline-3"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--light-green)] rounded-full flex items-center justify-center transition-all duration-500 delay-500 ${
                      visibleItems.has('timeline-3') ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">Hari Ini</h4>
                      <span className="bg-[var(--secondary-color)]/10 text-[var(--secondary-color)] px-3 py-1 rounded-full text-sm font-medium">Prestasi</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-[var(--secondary-color)]">Dampak nyata untuk umat.</span> Dengan slogan "Menjadi Pelindung dan Pelayan Al Quran", PQSA telah meluluskan 500+ santri 
                      yang tersebar sebagai da'i, peneliti, dan pemimpin yang membawa perubahan positif.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Image with Interactive Biography */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-3xl p-8 relative overflow-hidden">
                  {/* Main Image Container */}
                  <div 
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <img 
                      src="data/img/ratu_1.jpg" 
                      alt="Ustadzah Ratu Kusumawati - Pendiri dan Pengasuh Pesantren Al-Quran Shalahuddin Al-Ayyubi PQSA Kulon Progo"
                      className={`w-full h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 ${
                        isHovering ? 'scale-105 brightness-75' : 'scale-100 brightness-100'
                      }`}
                    />
                    
                    {/* Hover Overlay with Biography Preview */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 rounded-2xl transition-all duration-500 ${
                      isHovering ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                        <div className={`transform transition-all duration-500 ${isHovering ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                          <div className="mb-4">
                            <h4 className="text-xl font-bold mb-2 text-[var(--light-green)]">Kisah Inspiratif</h4>
                            <p className="text-sm leading-relaxed line-clamp-4 mb-4">
                              {biographyPreview.substring(0, 200)}...
                            </p>
                          </div>
                          
                          <div className="flex gap-3">
                            <button
                              onClick={openBiographyPage}
                              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                              aria-label="Baca biografi lengkap Ustadzah Ratu Kusumawati"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                              </svg>
                              <span>Baca Biografi Lengkap</span>
                            </button>
                            <button
                              onClick={() => setShowBiography(!showBiography)}
                              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                              aria-label="Preview biografi singkat"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              <span>Preview</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Instruction */}
                    <div className={`absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                      isHovering ? 'opacity-0' : 'opacity-70'
                    }`}>
                      Klik untuk melihat biografi
                    </div>
                  </div>
                  
                  {/* Info Card */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 z-10">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Ustadzah Ratu Kusumawati</h4>
                      <p className="text-[var(--primary-color)] font-semibold text-sm mb-2">Pendiri & Pengasuh PQSA</p>
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>Sejak Agustus 2018</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-xs">
                        <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full animate-pulse"></div>
                        <span className="text-[var(--primary-color)] font-medium">S.Si., M.A.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Biography Preview Modal */}
                {showBiography && (
                  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowBiography(false)}>
                    <div className="bg-white rounded-3xl max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => setShowBiography(false)}
                        className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      <div className="text-center mb-6">
                        <img 
                          src="data/img/ratu_1.jpg" 
                          alt="Ustadzah Ratu Kusumawati"
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[var(--primary-color)]"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ustadzah Ratu Kusumawati, S.Si., M.A.</h3>
                        <p className="text-[var(--primary-color)] font-semibold">Pendiri & Pengasuh PQSA</p>
                      </div>
                      
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-4">{biographyPreview}</p>
                        <div className="text-center mt-6">
                          <button
                            onClick={openBiographyPage}
                            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            <span>Baca Perjalanan Hidup Lengkap</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Visi Misi Section */}
          <div className="bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi Kami</h3>
              <p className="text-lg text-gray-600">Landasan filosofis yang mengarahkan setiap langkah perjalanan PQSA</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Visi */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary-color)]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">Visi</h4>
                        <p className="text-sm text-gray-500">Cita-cita Mulia</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-xl p-6 mb-4">
                      <p className="text-xl md:text-2xl font-bold text-[var(--primary-color)] text-center leading-relaxed">
                        "Menjadi Penjaga dan Pelayan Al Quran"
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Komitmen kami untuk menjadi garda terdepan dalam menjaga kemurnian dan menyebarkan ajaran Al-Qur'an kepada generasi mendatang.
                    </p>
                  </div>
                </div>
              </div>

              {/* Misi */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--accent-color)]/10 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">Misi</h4>
                        <p className="text-sm text-gray-500">Langkah Nyata</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent rounded-xl">
                        <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Menjadi Mulia</h5>
                          <p className="text-gray-600 text-sm">Membentuk akhlak dan ketaqwaan dengan menanamkan nilai-nilai Al-Quran dan sunnah</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[var(--secondary-color)]/5 to-transparent rounded-xl">
                        <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Menuju Mandiri</h5>
                          <p className="text-gray-600 text-sm">Mengembangkan kemandirian santri melalui sunnah belajar dan praktek bisnis</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[var(--accent-color)]/5 to-transparent rounded-xl">
                        <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Memberikan Manfaat</h5>
                          <p className="text-gray-600 text-sm">Mensyiarkan da'wah Al Quran yang menyeluruh untuk perbaikan kondisi masyarakat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Video Embed Section */}
          <div className="col-span-full mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Video Profil PQSA</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Saksikan semangat dan kegiatan kami di Pondok Pesantren Al Quran Shalahuddin Al Ayyubi
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl relative" style={{ paddingTop: '56.25%' }}>
              <iframe 
                src="https://www.youtube.com/embed/sEich_9N8U4?si=M5l84_yoG1zPKWkv" 
                title="SEMARAK WAKAF PQSA - YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}