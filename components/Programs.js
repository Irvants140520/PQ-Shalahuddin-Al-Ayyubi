function Programs() {
  try {
    const programs = [
      {
        id: 'tahfidz-3-bulan',
        title: 'Program Tahfidz 3 Bulan',
        duration: '3 Bulan',
        target: 'Hafal 5 Juz',
        description: 'Program singkat untuk menghafal 5 juz dengan fokus pada kualitas hafalan.',
        features: ['Hafal 5 Juz Al-Qur\'an', 'Metode Cepat & Tepat', 'Bimbingan Personal', 'Fleksibel'],
        price: 'Hubungi Kami',
        color: 'var(--accent-color)'
      },
      {
        id: 'tahfidz-1-bulan',
        title: 'Program Tahfidz 1 Bulan',
        duration: '1 Bulan',
        target: 'Hafal 1-2 Juz',
        description: 'Program percobaan untuk mengenal metode tahfidz dan menghafal 1-2 juz.',
        features: ['Hafal 1-2 Juz Al-Qur\'an', 'Pengenalan Metode', 'Bimbingan Dasar', 'Program Persiapan'],
        price: 'Hubungi Kami',
        color: 'var(--dark-green)'
      },
      {
        id: 'ramadhan-camp',
        title: 'Ramadhan Camp',
        duration: 'Coming Soon',
        target: 'Program Khusus',
        description: 'Program khusus bulan Ramadhan dengan fokus spiritual dan peningkatan kualitas ibadah.',
        features: ['Tahfidz Intensif', 'Kajian Ramadhan', 'Tarawih Bersama', 'Kultum Harian'],
        price: 'Hubungi Kami',
        color: '#f59e0b'
      }
    ];

    return (
      <section id="program" className="section-padding bg-white" data-name="programs" data-file="components/Programs.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Tahfidz Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih program tahfidz yang sesuai dengan kemampuan dan target Anda. 
              Semua program dirancang dengan metode pembelajaran yang efektif dan teruji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <div key={program.id} className="card-shadow p-6 border-t-4 hover:scale-105 transition-transform duration-300" 
                   style={{borderTopColor: program.color}}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl"
                       style={{backgroundColor: program.color}}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full text-white"
                        style={{backgroundColor: program.color}}>
                    {program.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="mb-4">
                  <div className="text-lg font-semibold mb-2" style={{color: program.color}}>
                    Target: {program.target}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Yang Akan Didapat:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" style={{color: program.color}}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">{program.price}</div>
                  {program.id === 'ramadhan-camp' ? (
                    <button 
                      className="px-4 py-2 rounded-lg text-white font-medium bg-gray-400 cursor-not-allowed"
                      disabled>
                      Coming Soon
                    </button>
                  ) : (
                    <a href={`${program.id}.html`} 
                       className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                       style={{backgroundColor: program.color}}>
                      Selengkapnya
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Butuh konsultasi untuk memilih program yang tepat? Hubungi kami sekarang!
            </p>
            <button onClick={() => document.getElementById('kontak').scrollIntoView({behavior: 'smooth'})} 
                    className="btn-primary flex items-center gap-2 mx-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Programs component error:', error);
    return null;
  }
}
