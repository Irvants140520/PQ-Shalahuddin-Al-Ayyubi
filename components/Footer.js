function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="data/img/logo_pqsa.jpg" 
                  alt="Logo PQSA" 
                  className="w-16 h-16 rounded-xl object-cover shadow-lg border-2 border-gray-700"
                />
                <div>
                  <h3 className="text-2xl font-bold text-[var(--light-green)] mb-1">PQSA</h3>
                  <p className="text-gray-400 text-sm">Pesantren Al Qur'an Shalahuddin Al-Ayyubi</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Berkomitmen mencetak generasi penghafal Al-Qur'an yang berkualitas dengan metode pembelajaran yang efektif dan teruji sejak 2018.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/pqsa_official" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.246.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.631 2.186 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.631-.167 5.65-2.186 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.773 2.246 17.754.227 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.040 0 2.672-.01 2.988-.057 4.042-.123 2.687-1.389 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.976-1.416-4.099-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338.3a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                  </svg>
                </a>
                <a href="https://youtube.com/@pqsa_official" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
                <a href="mailto:info@pqsa.ac.id" 
                   className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center hover:bg-[var(--dark-green)] transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => document.getElementById('beranda').scrollIntoView({behavior: 'smooth'})} 
                          className="text-gray-300 hover:text-[var(--light-green)] transition-colors">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('tentang').scrollIntoView({behavior: 'smooth'})} 
                          className="text-gray-300 hover:text-[var(--light-green)] transition-colors">
                    Tentang
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('program').scrollIntoView({behavior: 'smooth'})} 
                          className="text-gray-300 hover:text-[var(--light-green)] transition-colors">
                    Program
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('galeri').scrollIntoView({behavior: 'smooth'})} 
                          className="text-gray-300 hover:text-[var(--light-green)] transition-colors">
                    Galeri
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('testimonial').scrollIntoView({behavior: 'smooth'})} 
                          className="text-gray-300 hover:text-[var(--light-green)] transition-colors">
                    Testimoni
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('faq').scrollIntoView({behavior: 'smooth'})} 
                          className="text-gray-300 hover:text-[var(--light-green)] transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-300">
                <p>+62 812-3456-7890</p>
                <p>info@pqsa.ac.id</p>
                <p className="text-sm">Jl. Dusun Kamal, RT.65/RW.29<br/>Kamal, Karangsari, Kec. Pengasih<br/>Kulon Progo, DIY 55674</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Pesantren Al Qur'an Shalahuddin Al-Ayyubi. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}