function FAQ() {
  try {
    // FAQ data - mudah untuk di-maintain, tambah/edit/hapus FAQ di sini
    const faqData = [
      {
        id: 1,
        question: "Apa saja program tahfidz yang tersedia di PQSA?",
        answer: "PQSA menyediakan berbagai program tahfidz mulai dari 1 bulan, 3 bulan, 6 bulan, hingga 1-5 tahun. Setiap program disesuaikan dengan kemampuan dan target hafalan santri."
      },
      {
        id: 2,
        question: "Bagaimana metode pembelajaran tahfidz di PQSA?",
        answer: "Kami menggunakan metode pembelajaran yang sistematis dan teruji, dengan bimbingan ustadz berpengalaman. Metode ini terbukti efektif dalam membantu santri menghafal Al-Qur'an dengan baik dan benar."
      },
      {
        id: 3,
        question: "Apakah ada persyaratan khusus untuk mendaftar?",
        answer: "Persyaratan umum meliputi: mampu membaca Al-Qur'an dengan baik, berusia minimal 12 tahun, sehat jasmani dan rohani, serta memiliki komitmen untuk menyelesaikan program yang dipilih."
      },
      {
        id: 4,
        question: "Berapa biaya program tahfidz di PQSA?",
        answer: "Biaya program bervariasi tergantung durasi dan jenis program yang dipilih. Silakan hubungi kami untuk informasi detail mengenai biaya dan fasilitas yang didapatkan."
      },
      {
        id: 5,
        question: "Apakah tersedia fasilitas asrama?",
        answer: "Ya, PQSA menyediakan fasilitas asrama yang nyaman dan kondusif untuk pembelajaran. Fasilitas meliputi kamar tidur, ruang belajar, masjid, dan area rekreasi."
      },
      {
        id: 6,
        question: "Bagaimana cara mendaftar di PQSA?",
        answer: "Pendaftaran dapat dilakukan dengan menghubungi kami melalui telepon, WhatsApp, atau datang langsung ke pesantren. Tim kami akan membantu proses pendaftaran dan memberikan informasi lengkap."
      },
      {
        id: 7,
        question: "Apakah ada program khusus untuk dewasa?",
        answer: "Ya, kami memiliki program khusus untuk santri dewasa dengan jadwal dan metode pembelajaran yang disesuaikan dengan kebutuhan dan kesibukan mereka."
      },
      {
        id: 8,
        question: "Bagaimana sistem evaluasi di PQSA?",
        answer: "Sistem evaluasi dilakukan secara berkala melalui ujian hafalan, evaluasi tajwid, dan penilaian akhlak. Setiap santri akan mendapat laporan perkembangan secara rutin."
      }
    ];

    const [openFAQ, setOpenFAQ] = React.useState(null);

    const toggleFAQ = (id) => {
      setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
      <section id="faq" className="section-padding bg-white relative overflow-hidden" data-name="faq" data-file="components/FAQ.js">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[var(--primary-color)] rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-[var(--secondary-color)] rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-[var(--accent-color)] rotate-45"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--primary-color)]/10 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
              <span className="text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Pertanyaan yang</span><br/>
              <span className="text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text">
                Sering Diajukan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Temukan jawaban atas pertanyaan-pertanyaan umum seputar program tahfidz dan kehidupan di PQSA
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div 
                key={faq.id}
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Masih Ada Pertanyaan Lain?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Tim kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami kapan saja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/6287787150007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.8 5.7A10 10 0 005.7 16.8c-.2.4-.3.8-.4 1.3l-.3 2.2a1 1 0 001.2 1.1l2.2-.3c.5-.1.9-.2 1.3-.4A10 10 0 0016.8 5.7zM10 15a5 5 0 110-10 5 5 0 010 10z" />
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
                <a 
                  href="tel:+6287787150007"
                  className="inline-flex items-center gap-3 bg-white border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Telepon Kami</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FAQ component error:', error);
    return null;
  }
}
