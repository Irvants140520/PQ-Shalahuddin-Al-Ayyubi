function Contact() {
  try {
    return (
      <section id="kontak" className="section-padding bg-white" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Siap bergabung dengan PQSA? Hubungi kami untuk informasi lebih lanjut atau daftar program tahfidz
            </p>
            <a 
              href="https://wa.me/6287787150007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.8 5.7A10 10 0 005.7 16.8c-.2.4-.3.8-.4 1.3l-.3 2.2a1 1 0 001.2 1.1l2.2-.3c.5-.1.9-.2 1.3-.4A10 10 0 0016.8 5.7zM10 15a5 5 0 110-10 5 5 0 010 10z" />
              </svg>
              <span>Chat WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Telepon</h3>
                    <p className="text-gray-600">+62 877-8715-0007</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">pq.shalahuddin.alayyubi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)] flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Alamat</h3>
                    <p className="text-gray-600 leading-relaxed">
                      54HQ+83W, Jl. Dusun Kamal, RT.65/RW.29, Kamal, Karangsari, 
                      Kec. Pengasih, Kabupaten Kulon Progo, 
                      Daerah Istimewa Yogyakarta 55674
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/X46QpoNX6UiS5M3A6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium mt-2 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      <span>Lihat di Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/pq.shalahuddin.alayyubi" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.246.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.631 2.186 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.631-.167 5.65-2.186 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.773 2.246 17.754.227 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.123 2.687-1.389 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.976-1.416-4.099-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338.3a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com/@PQSA_Media" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                  <a href="mailto:pq.shalahuddin.alayyubi@gmail.com" 
                     className="w-12 h-12 rounded-lg bg-[var(--primary-color)] flex items-center justify-center hover:bg-[var(--dark-green)] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.699062085905!2d110.1340707!3d-7.8216431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae5191a4cec0f%3A0xd3bb23973c4d5d0d!2sPesantren%20Al%20Quran%20Shalahuddin%20Al%20Ayyubi!5e0!3m2!1sid!2sid!4v1759667671402!5m2!1sid!2sid" 
                  width="100%" 
                  height="450" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PQSA - Kulon Progo, Yogyakarta">
                </iframe>
                
                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">PQSA Location</h4>
                      <p className="text-xs text-gray-600">Kulon Progo, Yogyakarta</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a 
                  href="https://maps.app.goo.gl/X46QpoNX6UiS5M3A6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[var(--primary-color)] text-white px-4 py-3 rounded-xl font-medium hover:bg-[var(--dark-green)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  <span>Petunjuk Arah</span>
                </a>
                <a 
                  href="https://wa.me/6287787150007?text=Assalamu'alaikum, saya ingin bertanya tentang lokasi PQSA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <span>Tanya Lokasi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}