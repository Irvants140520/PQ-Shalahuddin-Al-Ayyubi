// Menggunakan React dan ReactDOM dari CDN
const { useState, useEffect, Component } = React;
const { createRoot } = ReactDOM;

// Icon components sebagai SVG sederhana
const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Info = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const Target = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const CreditCard = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const Folder = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
  </svg>
);

const Clipboard = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
  </svg>
);

const Megaphone = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h3.763l7.79 3.894A1 1 0 0018 15V3zM3.485 14.485a.5.5 0 00-.707.707A7.965 7.965 0 004 17a.5.5 0 000-1 6.965 6.965 0 01-1.015-1.515z" clipRule="evenodd" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
  </svg>
);

const BookOpen = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);

const ClipboardCheck = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6h-3a3 3 0 00-3 3v3H6a2 2 0 01-2-2V5zm9 10a1 1 0 102 0v-3a1 1 0 10-2 0v3zm2-1a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

const File = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
  </svg>
);

const Award = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.856.048l-1.85-3.7-1.85 3.7a1 1 0 01-1.856-.048L4.146 12.8.793 10.866a1 1 0 010-1.732L4.146 7.2l1.179-4.456A1 1 0 016.292 2H12z" clipRule="evenodd" />
  </svg>
);

const Navigation = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
  </svg>
);

const Edit3 = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function ProgramDetail() {
  try {
    const [programData, setProgramData] = useState(null);

    useEffect(() => {
      const pathname = window.location.pathname;
      const filename = pathname.split('/').pop().replace('.html', '');
      
      const programs = {
        'tahfidz-3-bulan': {
          title: 'Program Tahfidz 3 Bulan',
          duration: '3 Bulan',
          target: 'Hafal 3 Juz Al-Qur\'an',
          description: 'Program intensif tahfidz selama 3 bulan untuk menghafal 3 juz Al-Qur\'an dengan metode Q yang terbukti efektif, dilengkapi kelas tahsin, bahasa Arab, dan tadabbur Al-Qur\'an.',
          requirements: [
            'Usia setara SMA hingga maksimal 40 tahun',
            'Orang tua mendukung dan mendoakan',
            'Siap taat pada peraturan pesantren',
            'Komitmen menyelesaikan program 3 bulan'
          ],
          benefits: [
            'Hafal 3 Juz Al-Qur\'an dengan mutqin',
            'Perbaikan bacaan melalui kelas tahsin',
            'Penguasaan bahasa Arab metode QAI',
            'Pemahaman Al-Qur\'an melalui tadabbur',
            'Bimbingan ustadz/ustadzah berpengalaman',
            'Sertifikat penyelesaian program'
          ],
          schedule: [
            '06:00 - 07:00: Sholat Subuh & Muroja\'ah',
            '07:00 - 09:00: Menghafal halaman baru',
            '09:00 - 10:00: Sarapan & istirahat',
            '10:00 - 12:00: Setoran hafalan kepada ustadz',
            '12:00 - 13:30: Sholat Dzuhur & makan siang',
            '13:30 - 15:00: Kelas tahsin dan bahasa Arab',
            '15:00 - 17:00: Muroja\'ah hafalan mandiri',
            '17:00 - 18:30: Sholat Ashar & kajian tadabbur'
          ],
          timeline: {
            pendaftaran: '06 Oktober - 18 Oktober 2024 (Gelombang 1)',
            extended: '19 Oktober - 23 Oktober 2024 (Extended)',
            berkas: '06 Oktober - 23 Oktober 2024',
            tes: '19 Oktober - 23 Oktober 2024 (Cek tahsin & wawancara)',
            pengumuman: '23 Oktober 2024',
            kedatangan: '25 Oktober 2024',
            praProgram: '26 Oktober 2024',
            mulaiKBM: '27 Oktober 2024 - 30 Januari 2025'
          },
          infaqPendaftaran: 'Rp 100.000',
          infaqPendidikan: 'Rp 600.000 - Rp 800.000 per bulan (dapat dikonsultasikan)',
          dokumen: [
            'Fotokopi ijazah terakhir',
            'Pas foto 3x4',
            'Essay "Who am I?" (minimal 1000 kata)',
            'Essay motivasi menghafal Al-Qur\'an',
            'Surat izin orang tua/wali'
          ],
          alurPendaftaran: [
            'Menghubungi admin via WhatsApp',
            'Mengisi formulir Google Form',
            'Mengumpulkan berkas persyaratan via email',
            'Tes tahsin, tahfidz, dan wawancara',
            'Pengumuman hasil penerimaan',
            'Mengikuti pra-KBM dan mulai program'
          ],
          color: '#14b8a6'
        },
        'tahfidz-1-bulan': {
          title: 'Program Tahfidz 1 Bulan',
          duration: '1 Bulan',
          target: 'Hafal 1 Juz Al-Qur\'an',
          description: 'Program intensif tahfidz selama 1 bulan untuk menghafal 1 juz Al-Qur\'an dengan metode Q, dilengkapi kelas tahsin, bahasa Arab, dan pemahaman Al-Qur\'an sebagai fondasi program lanjutan.',
          requirements: [
            'Usia setara SMA hingga maksimal 40 tahun',
            'Orang tua mendukung dan mendoakan',
            'Siap taat pada peraturan pesantren',
            'Komitmen menyelesaikan program 1 bulan'
          ],
          benefits: [
            'Hafal 1 Juz Al-Qur\'an dengan mutqin',
            'Perbaikan bacaan melalui kelas tahsin',
            'Pengenalan bahasa Arab metode QAI',
            'Pemahaman dasar tadabbur Al-Qur\'an',
            'Bimbingan ustadz/ustadzah berpengalaman',
            'Sertifikat penyelesaian program'
          ],
          schedule: [
            '06:30 - 07:30: Sholat Subuh & Muroja\'ah',
            '07:30 - 09:30: Menghafal halaman baru',
            '09:30 - 10:30: Sarapan & istirahat',
            '10:30 - 12:30: Setoran hafalan kepada ustadz',
            '12:30 - 14:00: Sholat Dzuhur & makan siang',
            '14:00 - 16:00: Kelas tahsin dan bahasa Arab',
            '16:00 - 17:30: Muroja\'ah hafalan mandiri',
            '17:30 - 19:00: Sholat Maghrib & kajian tadabbur'
          ],
          timeline: {
            pendaftaran: '06 Oktober - 18 Oktober 2024 (Gelombang 1)',
            extended: '19 Oktober - 23 Oktober 2024 (Extended)',
            berkas: '06 Oktober - 23 Oktober 2024',
            tes: '19 Oktober - 23 Oktober 2024 (Cek tahsin & wawancara)',
            pengumuman: '23 Oktober 2024',
            kedatangan: '25 Oktober 2024',
            praProgram: '26 Oktober 2024',
            mulaiKBM: '27 Oktober 2024 - 30 November 2024'
          },
          infaqPendaftaran: 'Rp 100.000',
          infaqPendidikan: 'Rp 600.000 - Rp 800.000 per bulan (dapat dikonsultasikan)',
          dokumen: [
            'Fotokopi ijazah terakhir',
            'Pas foto 3x4',
            'Essay "Who am I?" (minimal 1000 kata)',
            'Essay motivasi menghafal Al-Qur\'an',
            'Surat izin orang tua/wali'
          ],
          alurPendaftaran: [
            'Menghubungi admin via WhatsApp',
            'Mengisi formulir Google Form',
            'Mengumpulkan berkas persyaratan via email',
            'Tes tahsin, tahfidz, dan wawancara',
            'Pengumuman hasil penerimaan',
            'Mengikuti pra-KBM dan mulai program'
          ],
          color: '#0d9488'
        },
        'ramadhan-camp': {
          title: 'Ramadhan Camp',
          duration: 'Coming Soon',
          target: 'Program Khusus',
          description: 'Program khusus bulan Ramadhan akan segera hadir. Mohon ditunggu informasi lebih lanjut.',
          requirements: ['Coming Soon'],
          benefits: ['Coming Soon'],
          schedule: ['Coming Soon'],
          color: '#f59e0b'
        }
      };

      setProgramData(programs[filename] || programs['tahfidz-3-bulan']);
    }, []);

    if (!programData) return <div>Loading...</div>;

    return (
      <div className="min-h-screen" data-name="program-detail">
        <Header />
        <main className="pt-16">
          {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{programData.title}</h1>
            <p className="text-xl mb-8 text-teal-50">{programData.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">{programData.duration}</div>
                <div className="text-sm">Durasi Program</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">{programData.target.split(' ')[1]}</div>
                <div className="text-sm">{programData.target}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Informasi Program - Card Interaktif */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover-lift">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Info className="mr-3 h-8 w-8 text-teal-600" />
            Informasi Program
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-teal-500">
                <Clock className="h-6 w-6 text-teal-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-700">Durasi Program</h3>
                  <p className="text-gray-600 text-lg font-medium">{programData.duration}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-green-500">
                <Target className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-700">Target Hafalan</h3>
                  <p className="text-gray-600 text-lg font-medium">{programData.target}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-700">Biaya Pendaftaran</h3>
                  <p className="text-gray-600 text-lg font-medium">{programData.infaqPendaftaran}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-500">
                <CreditCard className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-700">Biaya Pendidikan/Bulan</h3>
                  <p className="text-gray-600 text-lg font-medium">{programData.infaqPendidikan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deskripsi Program */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FileText className="mr-3 h-8 w-8 text-blue-600" />
            Deskripsi Program
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">{programData.description}</p>
        </div>

        {/* Timeline Pendaftaran - Timeline Interaktif */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Calendar className="mr-3 h-8 w-8 text-blue-600" />
            Timeline Pendaftaran
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {[
              { step: 'Pendaftaran', date: programData.timeline.pendaftaran, icon: Edit3 },
              { step: 'Extended', date: programData.timeline.extended, icon: Clock },
              { step: 'Berkas', date: programData.timeline.berkas, icon: Folder },
              { step: 'Tes', date: programData.timeline.tes, icon: Clipboard },
              { step: 'Pengumuman', date: programData.timeline.pengumuman, icon: Megaphone },
              { step: 'Kedatangan', date: programData.timeline.kedatangan, icon: MapPin },
              { step: 'Pra-Program', date: programData.timeline.praProgram, icon: Users },
              { step: 'Mulai KBM', date: programData.timeline.mulaiKBM, icon: BookOpen }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center mb-6 relative">
                  <div className="absolute left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white z-10">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="ml-16 flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg">{item.step}</h3>
                    <p className="text-gray-600">{item.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Persyaratan - Accordion Style */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <ClipboardCheck className="mr-3 h-8 w-8 text-green-600" />
            Persyaratan Pendaftaran
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programData.requirements.map((req, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dokumen yang Diperlukan */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 mb-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Folder className="mr-3 h-8 w-8 text-purple-600" />
            Dokumen yang Diperlukan
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {programData.dokumen.map((doc, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-purple-500">
                <File className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Keuntungan - Card Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Award className="mr-3 h-8 w-8 text-yellow-600" />
            Keuntungan Mengikuti Program
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programData.benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Jadwal Harian - Timeline Vertical */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 mb-8 border border-orange-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Clock className="mr-3 h-8 w-8 text-orange-600" />
            Jadwal Harian
          </h2>
          <div className="space-y-4">
            {programData.schedule.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500 hover:bg-orange-50 transition-colors duration-200">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <span className="font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <span className="text-gray-700">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alur Pendaftaran - Step Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Navigation className="mr-3 h-8 w-8 text-indigo-600" />
            Alur Pendaftaran
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            {programData.alurPendaftaran.map((step, index) => (
              <div key={index} className="flex items-center mb-8 relative">
                <div className="absolute left-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white z-10">
                  {index + 1}
                </div>
                <div className="ml-16 flex-1">
                  <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                    <h3 className="font-semibold text-gray-800">Langkah {index + 1}</h3>
                    <p className="text-gray-600">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Modern */}
        <div className="text-center mt-16 mb-12">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Siap Memulai Perjalanan Tahfidz?</h2>
            <p className="text-teal-100 mb-8 text-xl max-w-2xl mx-auto">
              Bergabunglah dengan keluarga besar Pesantren Al-Qur'an Shalahuddin Al-Ayyubi 
              dan raih kemuliaan menjadi penghafal Al-Qur'an
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281228888817"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-hover-effect"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300"
              >
                📥 Download Brosur
              </a>
            </div>
            <p className="text-teal-200 mt-6 text-sm">
              Admin kami siap membantu Anda 24/7
            </p>
          </div>
        </div>

                  </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProgramDetail component error:', error);
    return null;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ProgramDetail />
  </ErrorBoundary>
);