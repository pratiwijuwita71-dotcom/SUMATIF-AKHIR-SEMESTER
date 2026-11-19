import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // A. PILIHAN GANDA (18 SOAL: 9 Sistem Pencernaan + 9 Sistem Pernapasan)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Mudah',
    imageUrl: '/images/sistem-pencernaan-organ.svg',
    imageAlt: 'Diagram Sistem Pencernaan Manusia bernomor 1 sampai 8',
    imageCaption: 'Gambar: Organ-organ penyusun sistem pencernaan manusia',
    text: 'Perhatikan gambar sistem pencernaan manusia di atas! Organ yang ditunjuk oleh nomor 3 menghasilkan asam klorida (HCl) dan enzim pepsin. Fungsi utama organ nomor 3 tersebut adalah...',
    options: [
      { id: 'A', text: 'Mendorong makanan menuju saluran berikutnya melalui gerak peristaltik' },
      { id: 'B', text: 'Membunuh kuman penyakit yang masuk bersama makanan dan memecah protein menjadi pepton' },
      { id: 'C', text: 'Menyerap seluruh sari-sari makanan untuk diedarkan oleh pembuluh darah' },
      { id: 'D', text: 'Menyerap kembali air dan mineral dari sisa makanan sebelum dibuang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Organ bernomor 3 adalah lambung. Di dalam lambung terdapat getah lambung yang mengandung asam klorida (HCl) untuk membunuh kuman serta enzim pepsin untuk mengubah protein menjadi pepton.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Mudah',
    text: 'Saat Raka sarapan roti dan telur, makanan yang dikunyah akan melewati saluran pencernaan secara berurutan. Urutan jalannya makanan pada sistem pencernaan manusia dari awal hingga sisa makanan dikeluarkan adalah...',
    options: [
      { id: 'A', text: 'Mulut → Kerongkongan → Lambung → Usus Halus → Usus Besar → Anus' },
      { id: 'B', text: 'Mulut → Tenggorokan → Lambung → Usus Besar → Usus Halus → Anus' },
      { id: 'C', text: 'Mulut → Kerongkongan → Usus Halus → Lambung → Usus Besar → Anus' },
      { id: 'D', text: 'Mulut → Tenggorokan → Usus Halus → Usus Besar → Lambung → Anus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan saluran pencernaan yang dilewati makanan secara tepat adalah Rongga Mulut → Kerongkongan (esofagus) → Lambung → Usus Halus → Usus Besar → Rektum/Anus. Tenggorokan adalah saluran pernapasan, bukan pencernaan.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sedang',
    text: 'Sari mencoba mengunyah nasi putih selama kurang lebih satu menit tanpa langsung menelannya. Lama-kelamaan, nasi tersebut terasa sedikit manis di dalam mulut. Peristiwa ini membuktikan terjadinya pencernaan kimiawi di mulut oleh enzim...',
    options: [
      { id: 'A', text: 'Renin yang mengendapkan protein susu' },
      { id: 'B', text: 'Lipase yang memecah lemak menjadi asam lemak' },
      { id: 'C', text: 'Ptialin (amilase) yang mengubah zat tepung (amilum) menjadi gula sederhana' },
      { id: 'D', text: 'Tripsin yang mengubah pepton menjadi asam amino' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kelenjar ludah di rongga mulut menghasilkan enzim ptialin (amilase air liur) yang memecah karbohidrat/zat tepung (amilum) pada nasi menjadi gula sederhana (maltosa) sehingga terasa manis.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Mudah',
    imageUrl: '/images/gigi-manusia.svg',
    imageAlt: 'Diagram tiga bentuk gigi manusia bernomor 1, 2, dan 3',
    imageCaption: 'Gambar: Perbandingan bentuk mahkota gigi manusia',
    text: 'Perhatikan gambar tiga jenis gigi manusia di atas! Pasangan jenis gigi dan fungsinya yang paling tepat untuk gigi nomor 2 dan nomor 3 adalah...',
    options: [
      { id: 'A', text: 'Nomor 2 gigi seri untuk memotong makanan; nomor 3 gigi taring untuk mengoyak makanan' },
      { id: 'B', text: 'Nomor 2 gigi taring untuk merobek makanan; nomor 3 gigi geraham untuk mengunyah dan menghaluskan makanan' },
      { id: 'C', text: 'Nomor 2 gigi geraham untuk menggilas makanan; nomor 3 gigi seri untuk menggigit makanan' },
      { id: 'D', text: 'Nomor 2 gigi seri untuk mengunyah makanan; nomor 3 gigi geraham untuk memotong makanan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Nomor 1 adalah gigi seri (berbentuk pipih/pahat untuk memotong), nomor 2 adalah gigi taring (berujung runcing untuk merobek/mengoyak), dan nomor 3 adalah gigi geraham (permukaan lebar bergelombang untuk mengunyah/menggilas makanan).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Mudah',
    text: 'Meskipun seseorang menelan makanan dalam posisi tubuh berbaring atau bersandar, makanan tetap dapat bergerak turun masuk ke dalam lambung dan tidak jatuh kembali ke mulut. Hal ini disebabkan oleh adanya...',
    options: [
      { id: 'A', text: 'Dorongan gaya gravitasi bumi yang menarik makanan ke bawah' },
      { id: 'B', text: 'Gerak peristaltik berupa kontraksi meremas dan mendorong oleh otot dinding kerongkongan' },
      { id: 'C', text: 'Tekanan udara yang dihirup melalui rongga hidung ke tenggorokan' },
      { id: 'D', text: 'Aliran asam lambung yang menyedot makanan dari rongga mulut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kerongkongan (esofagus) memiliki otot polos yang melakukan gerak peristaltik, yaitu gerakan meremas dan mendorong gumpalan makanan secara bergelombang menuju lambung.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sedang',
    imageUrl: '/images/usus-halus-vili.svg',
    imageAlt: 'Penampang dinding dalam usus halus yang memiliki tonjolan vili dan kapiler darah',
    imageCaption: 'Gambar: Struktur permukaan bagian dalam usus halus manusia',
    text: 'Perhatikan gambar struktur dinding bagian dalam usus halus di atas! Permukaan dinding usus halus memiliki banyak lipatan dan tonjolan halus (vili) yang dilengkapi pembuluh kapiler darah. Tujuan utama dari struktur berlipat-lipat tersebut adalah...',
    options: [
      { id: 'A', text: 'Menghasilkan asam lambung lebih banyak untuk membunuh bakteri' },
      { id: 'B', text: 'Memperluas bidang permukaan penyerapan agar sari-sari makanan terserap maksimal ke dalam darah' },
      { id: 'C', text: 'Menampung ampas makanan padat sebelum dibuang melalui anus' },
      { id: 'D', text: 'Menyaring udara bersih dan menahan partikel debu agar tidak masuk ke paru-paru' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jonjot usus (vili) pada dinding usus halus berfungsi memperluas permukaan bidang penyerapan sehingga sari-sari makanan (glukosa, asam amino, vitamin, mineral) dapat diserap secara optimal ke dalam pembuluh kapiler darah.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Mudah',
    text: 'Di dalam usus besar manusia hidup bakteri baik Escherichia coli (E. coli). Selain membantu proses pembusukan sisa-sisa makanan menjadi feses, manfaat penting keberadaan bakteri tersebut adalah...',
    options: [
      { id: 'A', text: 'Membantu pembentukan vitamin K yang dibutuhkan untuk proses pembekuan darah' },
      { id: 'B', text: 'Mengubah karbohidrat menjadi glukosa sebelum diserap oleh vili usus' },
      { id: 'C', text: 'Memproduksi cairan empedu untuk mengemulsikan lemak' },
      { id: 'D', text: 'Menghancurkan makanan secara mekanis menjadi bubur halus (kim)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bakteri Escherichia coli di usus besar berperan membusukkan sisa makanan sekaligus membantu menyintesis vitamin K dan vitamin B12 yang bermanfaat bagi tubuh.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sedang',
    text: 'Bima jarang mengonsumsi buah dan sayur serta sering menahan keinginan buang air besar. Akibatnya, feses yang keluar terasa sangat keras dan sulit dikeluarkan. Gangguan pencernaan yang dialami Bima serta penyebab utamanya adalah...',
    options: [
      { id: 'A', text: 'Diare, karena usus besar gagal menyerap air akibat infeksi bakteri' },
      { id: 'B', text: 'Sembelit (konstipasi), karena kekurangan serat dan penyerapan air berlebih di usus besar' },
      { id: 'C', text: 'Gastritis (maag), karena meningkatnya kadar asam lambung di dalam perut' },
      { id: 'D', text: 'Apendisitis, karena penyumbatan pada umbai cacing oleh makanan pedas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sembelit (konstipasi) ditandai dengan feses keras dan sulit buang air besar. Kondisi ini dipicu kurangnya asupan serat dan air putih, serta kebiasaan menahan BAB sehingga air pada sisa makanan terlalu banyak diserap usus besar.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sukar',
    text: 'Dina sering melewatkan sarapan pagi sehingga perutnya kosong hingga siang hari. Akibat kebiasaan tersebut, ia kerap mengeluh perut bagian atas terasa perih dan mual. Penjelasan ilmiah yang paling tepat untuk kondisi Dina adalah...',
    options: [
      { id: 'A', text: 'Dinding usus besar mengalami luka akibat tidak ada sisa makanan yang membusuk' },
      { id: 'B', text: 'Asam lambung (HCl) tetap diproduksi saat perut kosong dan mengiritasi dinding lambung yang tidak terlindungi makanan' },
      { id: 'C', text: 'Enzim amilase di rongga mulut berhenti bekerja sehingga lambung tidak menerima nutrisi' },
      { id: 'D', text: 'Gerak peristaltik di kerongkongan berbalik arah mendorong empedu naik ke mulut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Saat perut dibiarkan kosong dalam waktu lama, lambung tetap memproduksi asam klorida (HCl). Tanpa makanan yang dicerna, asam lambung yang tinggi mengiritasi lapisan mukosa dinding lambung sehingga menimbulkan perih dan mual (gejala maag/gastritis).',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Mudah',
    imageUrl: '/images/sistem-pernapasan-organ.svg',
    imageAlt: 'Diagram Sistem Pernapasan Manusia bernomor 1 sampai 7',
    imageCaption: 'Gambar: Susunan organ sistem pernapasan manusia',
    text: 'Perhatikan gambar organ pernapasan manusia di atas! Bagian yang ditunjuk nomor 3 berbentuk pipa memanjang yang tersusun atas cincin-cincin tulang rawan dan dilapisi rambut getar (silia). Nama dan fungsi organ nomor 3 adalah...',
    options: [
      { id: 'A', text: 'Laring, berfungsi menghasilkan getaran pita suara saat berbicara' },
      { id: 'B', text: 'Trakea (batang tenggorokan), berfungsi menyalurkan udara menuju bronkus dan menyaring debu halus dengan silia' },
      { id: 'C', text: 'Bronkiolus, berfungsi sebagai tempat pertukaran gas oksigen dan karbon dioksida' },
      { id: 'D', text: 'Diafragma, berfungsi mengatur besar kecilnya rongga dada saat bernapas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Organ bernomor 3 adalah trakea (batang tenggorokan). Cincin tulang rawan menjaga saluran trakea tetap terbuka, sedangkan silia dan selaput lendirnya menyaring serta mendorong kotoran halus keluar agar tidak masuk ke paru-paru.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Mudah',
    text: 'Bernapas melalui hidung jauh lebih dianjurkan daripada bernapas melalui mulut. Hal ini dikarenakan di dalam rongga hidung udara yang masuk akan mengalami perlakuan berikut, KECUALI...',
    options: [
      { id: 'A', text: 'Disaring dari partikel debu dan kotoran oleh rambut-rambut hidung' },
      { id: 'B', text: 'Diatur kelembapannya oleh selaput lendir' },
      { id: 'C', text: 'Dihangatkan suhunya oleh pembuluh darah kapiler agar sesuai suhu tubuh' },
      { id: 'D', text: 'Diikat langsung oleh sel darah merah untuk diedarkan ke seluruh tubuh' },
    ],
    correctAnswer: 'D',
    explanation:
      'Di dalam rongga hidung terjadi penyaringan debu (rambut hidung), pengaturan kelembapan (selaput lendir), dan penyesuaian suhu (kapiler darah). Pengikatan oksigen oleh sel darah merah terjadi di alveolus paru-paru, bukan di hidung.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Mudah',
    text: 'Ketika seorang siswa menghirup udara bersih saat berolahraga di pagi hari, udara mengalir menuju paru-paru melalui saluran pernapasan. Urutan perjalanan udara pernapasan yang benar saat menghirup napas (inspirasi) adalah...',
    options: [
      { id: 'A', text: 'Rongga Hidung → Faring → Laring → Trakea → Bronkus → Bronkiolus → Alveolus' },
      { id: 'B', text: 'Rongga Hidung → Kerongkongan → Laring → Trakea → Bronkiolus → Bronkus → Alveolus' },
      { id: 'C', text: 'Rongga Hidung → Trakea → Faring → Bronkus → Bronkiolus → Alveolus' },
      { id: 'D', text: 'Rongga Hidung → Laring → Trakea → Faring → Alveolus → Bronkus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan saluran pernapasan saat udara masuk ke paru-paru adalah Rongga Hidung → Faring → Laring → Trakea (batang tenggorokan) → Bronkus → Bronkiolus → Alveolus.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    imageUrl: '/images/alveolus-pertukaran-gas.svg',
    imageAlt: 'Diagram pertukaran gas oksigen dan karbon dioksida di alveolus dan kapiler darah',
    imageCaption: 'Gambar: Ilustrasi pertukaran gas pada gelembung paru-paru',
    text: 'Perhatikan gambar gelembung paru-paru (alveolus) di atas! Berdasarkan arah panah gas pada gambar, peristiwa fisiologis yang berlangsung pada bagian tersebut adalah...',
    options: [
      { id: 'A', text: 'Oksigen (O₂) berdifusi dari rongga alveolus masuk ke pembuluh kapiler darah, sedangkan karbon dioksida (CO₂) berpindah dari darah ke alveolus' },
      { id: 'B', text: 'Karbon dioksida (CO₂) diserap oleh sel darah merah dari alveolus untuk diedarkan ke otak' },
      { id: 'C', text: 'Oksigen (O₂) dan uap air dikeluarkan dari kapiler darah menuju rongga hidung' },
      { id: 'D', text: 'Udara disaring oleh rambut getar agar lendir tidak menyumbat cabang bronkus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Alveolus berdinding sangat tipis dan dikelilingi kapiler darah. Oksigen (O₂) dari udara di alveolus masuk (berdifusi) ke dalam pembuluh darah, sedangkan gas sisa karbon dioksida (CO₂) dari darah dilepaskan ke alveolus untuk dihembuskan keluar.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    imageUrl: '/images/mekanisme-pernapasan-diafragma.svg',
    imageAlt: 'Perbandingan mekanisme inspirasi Gambar A dan ekspirasi Gambar B',
    imageCaption: 'Gambar: Perbandingan kondisi paru-paru dan diafragma saat bernapas',
    text: 'Perhatikan Gambar A (inspirasi/menghirup udara) pada ilustrasi di atas! Manakah pernyataan yang paling tepat menjelaskan proses masuknya udara pada Gambar A?',
    options: [
      { id: 'A', text: 'Otot diafragma relaksasi dan melengkung ke atas sehingga rongga dada menyempit' },
      { id: 'B', text: 'Otot diafragma berkontraksi menjadi mendatar, rongga dada membesar, tekanan udara dalam paru-paru mengecil sehingga udara luar masuk' },
      { id: 'C', text: 'Tulang rusuk turun ke bawah sehingga tekanan udara dalam paru-paru meningkat tajam' },
      { id: 'D', text: 'Paru-paru mengempis sehingga oksigen terdorong masuk ke pembuluh darah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada fase inspirasi (Gambar A), otot diafragma berkontraksi sehingga posisinya mendatar (dan otot antartulang rusuk mengangkat tulang rusuk). Akibatnya volume rongga dada membesar, tekanan udara di paru-paru menjadi lebih kecil daripada udara luar, sehingga udara masuk ke paru-paru.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sukar',
    imageUrl: '/images/model-paru-paru-botol.svg',
    imageAlt: 'Diagram percobaan model paru-paru dari botol plastik, sedotan Y, balon, dan membran karet',
    imageCaption: 'Gambar: Rangkaian percobaan model pernapasan manusia',
    text: 'Sebuah kelas melakukan percobaan model paru-paru sederhana seperti pada gambar. Ketika bagian nomor 4 (membran karet di dasar botol) ditarik ke bawah, peristiwa yang terjadi pada bagian nomor 2 adalah...',
    options: [
      { id: 'A', text: 'Kedua balon mengempis karena udara di dalam botol mendorong balon keluar' },
      { id: 'B', text: 'Kedua balon mengembang karena volume ruang botol membesar dan tekanan udara dalam botol turun sehingga udara luar masuk lewat sedotan' },
      { id: 'C', text: 'Balon tetap diam karena dinding botol plastik keras menghalangi udara' },
      { id: 'D', text: 'Air masuk melalui bagian dasar botol dan mengisi sedotan plastik' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membran karet bawah (nomor 4) memodelkan diafragma. Ketika ditarik ke bawah (berkontraksi), ruang di dalam botol membesar dan tekanan udaranya turun lebih rendah dari tekanan udara luar. Akibatnya udara luar masuk melalui sedotan (nomor 1) dan membuat kedua balon paru-paru (nomor 2) mengembang.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    text: 'Saat makan bersama, Ibu selalu mengingatkan agar tidak berbicara sambil mengunyah makanan supaya tidak tersedak. Secara anatomi, peristiwa tersedak terjadi akibat terbukanya katup di pangkal tenggorokan saat menelan. Nama katup tersebut adalah...',
    options: [
      { id: 'A', text: 'Katup jantung' },
      { id: 'B', text: 'Epiglotis' },
      { id: 'C', text: 'Alveolus' },
      { id: 'D', text: 'Vili usus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Epiglotis adalah katup tulang rawan elastis di pangkal tenggorokan (faring/laring) yang menutup saluran napas saat kita menelan makanan. Jika berbicara saat menelan, epiglotis dapat terbuka sehingga makanan masuk ke saluran pernapasan dan menyebabkan tersedak.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    text: 'Pak Wayan mengalami sesak napas disertai bunyi mengi setiap kali terpapar udara dingin atau debu tebal. Dokter menyatakan bahwa saluran pernapasannya mengalami penyempitan dan pembengkakan sementara akibat reaksi alergi. Gangguan pernapasan yang dialami Pak Wayan adalah...',
    options: [
      { id: 'A', text: 'Asma' },
      { id: 'B', text: 'Tuberkulosis (TBC)' },
      { id: 'C', text: 'Influenza' },
      { id: 'D', text: 'Pneumonia' },
    ],
    correctAnswer: 'A',
    explanation:
      'Asma adalah gangguan pernapasan berupa penyempitan saluran udara (bronkus/bronkiolus) akibat peradangan dan alergi (misalnya debu, bulu hewan, atau udara dingin) yang menimbulkan sesak napas dan napas berbunyi (mengi).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sukar',
    text: 'Seseorang yang terpapar asap rokok dan polusi udara berat dalam jangka panjang berisiko mengalami kerusakan pada rambut getar (silia) di trakea serta menumpuknya tar pada gelembung alveolus. Dampak paling berbahaya dari kerusakan kedua struktur tersebut bagi tubuh adalah...',
    options: [
      { id: 'A', text: 'Pencernaan lemak di usus halus terhenti karena kekurangan cairan empedu' },
      { id: 'B', text: 'Debu dan kuman mudah menumpuk di saluran napas serta efisiensi penyerapan oksigen ke darah menurun drastis' },
      { id: 'C', text: 'Gigi taring dan geraham menjadi lebih cepat rapuh karena gerak peristaltik melambat' },
      { id: 'D', text: 'Jumlah vitamin K yang dibentuk oleh bakteri usus besar meningkat tajam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jika silia trakea rusak, kotoran, debu, dan bakteri tidak lagi tersaring optimal menuju keluar. Sementara penumpukan zat beracun/tar di alveolus menghalangi difusi oksigen (O₂) ke pembuluh darah sehingga suplai oksigen ke seluruh tubuh menurun drastis.',
  },

  // =========================================================================
  // B. PILIHAN GANDA KOMPLEKS / PGK (3 SOAL — TEPAT 3 PILIHAN, >1 BENAR)
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sedang',
    imageUrl: '/images/sistem-pencernaan-organ.svg',
    imageAlt: 'Diagram Sistem Pencernaan Manusia bernomor 1 sampai 8',
    imageCaption: 'Gambar: Organ saluran dan kelenjar pencernaan manusia',
    text: 'Perhatikan gambar sistem pencernaan manusia di atas! Manakah pernyataan yang BENAR mengenai peran organ pencernaan bernomor 4 dan nomor 5 dalam membantu proses pencernaan makanan di usus halus? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Organ nomor 4 (hati) menghasilkan cairan empedu yang berfungsi mengemulsikan lemak agar mudah dicerna',
      },
      {
        id: 'B',
        text: 'Organ nomor 4 (hati) merupakan tempat terjadinya penyerapan air dan pembusukan sisa makanan menjadi feses',
      },
      {
        id: 'C',
        text: 'Organ nomor 5 (pankreas) menghasilkan enzim amilase, tripsin, dan lipase yang disalurkan ke usus dua belas jari',
      },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Organ nomor 4 adalah hati yang memproduksi cairan empedu untuk mengemulsikan lemak. Organ nomor 5 adalah pankreas yang menghasilkan getah pankreas berisi enzim amilase, tripsin, dan lipase untuk membantu pencernaan kimiawi di usus halus. Penyerapan air & pembusukan terjadi di usus besar (no. 7).',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    text: 'Kesehatan organ pernapasan perlu dijaga agar pertukaran oksigen di dalam tubuh berjalan lancar. Manakah kebiasaan yang termasuk upaya tepat dalam menjaga kesehatan sistem pernapasan manusia? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Berolahraga secara teratur di lingkungan berudara bersih untuk melatih kapasitas paru-paru',
      },
      {
        id: 'B',
        text: 'Menggunakan masker saat berada di area berdebu atau berasap serta menanam tumbuhan hijau di sekitar rumah',
      },
      {
        id: 'C',
        text: 'Membiasakan diri berada di ruangan tertutup yang penuh asap rokok agar paru-paru terbiasa menyaring asap',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Olahraga teratur melatih otot pernapasan dan kapasitas vital paru-paru, sedangkan memakai masker di area berdebu dan menanam tanaman hijau menjaga kualitas udara yang dihirup. Sebaliknya, asap rokok justru merusak silia dan alveolus paru-paru.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sukar',
    imageUrl: '/images/mekanisme-pernapasan-diafragma.svg',
    imageAlt: 'Diagram mekanisme inspirasi Gambar A dan ekspirasi Gambar B',
    imageCaption: 'Gambar: Kondisi rongga dada dan diafragma saat inspirasi dan ekspirasi',
    text: 'Amati Gambar B (fase ekspirasi / menghembuskan udara keluar) pada ilustrasi di atas! Manakah pernyataan yang BENAR menggambarkan kondisi yang terjadi saat fase Gambar B berlangsung? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Otot diafragma berkontraksi hingga posisinya menjadi mendatar',
      },
      {
        id: 'B',
        text: 'Otot diafragma berelaksasi sehingga melengkung ke atas dan volume rongga dada mengecil',
      },
      {
        id: 'C',
        text: 'Tekanan udara di dalam paru-paru menjadi lebih besar daripada tekanan udara luar sehingga udara terdorong keluar',
      },
    ],
    correctAnswer: ['B', 'C'],
    explanation:
      'Pada fase ekspirasi (Gambar B), otot diafragma berelaksasi sehingga kembali melengkung ke atas (dan tulang rusuk turun). Volume rongga dada mengecil membuat tekanan udara dalam paru-paru lebih tinggi daripada udara luar, sehingga karbon dioksida terdorong keluar.',
  },

  // =========================================================================
  // C. PGK KATEGORI BENAR / SALAH (9 SOAL — TEPAT 3 PERNYATAAN PER SOAL)
  // =========================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Mudah',
    imageUrl: '/images/sistem-pencernaan-organ.svg',
    imageAlt: 'Diagram Sistem Pencernaan Manusia bernomor 1 sampai 8',
    imageCaption: 'Gambar: Organ-organ pencernaan manusia untuk soal nomor ini',
    text: 'Perhatikan gambar sistem pencernaan manusia di atas! Tentukan apakah setiap pernyataan mengenai organ bernomor 1, 2, dan 6 berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Di dalam organ nomor 1 (rongga mulut) terjadi pencernaan mekanis oleh gigi serta pencernaan kimiawi oleh enzim ptialin pada air liur.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Organ nomor 2 (kerongkongan) berfungsi menghasilkan asam klorida untuk mengendapkan protein susu.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Organ nomor 6 (usus halus) merupakan tempat utama penyerapan sari-sari makanan ke dalam pembuluh darah.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: Mulut melakukan pencernaan mekanis (gigi & lidah) dan kimiawi (enzim ptialin).\n2. Salah: Kerongkongan hanya menyalurkan makanan ke lambung lewat gerak peristaltik; HCl & enzim pengolah protein dihasilkan lambung (no. 3).\n3. Benar: Usus halus (no. 6) adalah tempat penyerapan utama sari-sari makanan.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sedang',
    text: 'Proses pencernaan makanan di dalam tubuh manusia dibedakan menjadi pencernaan mekanis dan pencernaan kimiawi. Tentukan nilai kebenaran (Benar atau Salah) dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Mengunyah makanan dengan gigi dan gerakan meremas dinding lambung termasuk contoh pencernaan mekanis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pencernaan kimiawi selalu melibatkan bantuan enzim pencernaan untuk mengubah ukuran molekul zat makanan menjadi lebih sederhana.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pencernaan mekanis hanya terjadi di rongga mulut saja dan tidak berlangsung lagi di organ pencernaan lainnya.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Pengunyahan gigi dan peremasan otot dinding lambung mengubah bentuk/ukuran makanan secara fisik (mekanis).\n2. Benar: Pencernaan kimiawi memakai enzim untuk memecah molekul kompleks (misal karbohidrat, protein, lemak) menjadi zat sederhana.\n3. Salah: Pencernaan mekanis juga terjadi di lambung melalui gerak kontraksi otot lambung yang mengaduk makanan.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sedang',
    text: 'Setiap enzim dan cairan pencernaan memiliki peran khusus dalam mengolah karbohidrat, protein, dan lemak. Evaluasilah kebenaran dari ketiga pernyataan berikut (Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Enzim pepsin di lambung berfungsi memecah molekul lemak menjadi asam lemak dan gliserol.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Cairan empedu yang dihasilkan hati membantu memecah gumpalan lemak menjadi butiran halus (emulsi lemak) di usus halus.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Enzim lipase dari pankreas berperan mencerna lemak menjadi asam lemak dan gliserol.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Salah: Enzim pepsin di lambung berfungsi mengubah protein menjadi pepton, bukan mencerna lemak.\n2. Benar: Cairan empedu mengemulsikan lemak agar lebih mudah dipecah oleh enzim.\n3. Benar: Enzim lipase menguraikan lemak menjadi asam lemak dan gliserol.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Sistem Pencernaan Manusia',
    difficulty: 'Sukar',
    text: 'Sebuah kelompok siswa kelas 6 mendiskusikan cara mencegah dan mengenali gangguan sistem pencernaan. Tentukan apakah pernyataan-pernyataan kesimpulan diskusi mereka berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Mengonsumsi makanan berserat seperti sayur dan buah serta cukup minum air putih efektif mencegah penyakit sembelit (konstipasi).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penyakit diare disebabkan oleh usus besar yang menyerap air terlalu banyak sehingga feses mengeras.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mencuci tangan dengan sabun sebelum makan dapat mencegah masuknya bakteri penyebab diare dan tifus ke saluran pencernaan.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: Serat dan air menjaga tekstur feses tetap lunak dan memperlancar gerakan usus.\n2. Salah: Diare ditandai feses encer dan buang air besar berulang kali karena gangguan penyerapan air di usus besar (biasanya akibat infeksi kuman/makanan tercemar).\n3. Benar: Kebersihan tangan dan makanan mencegah infeksi bakteri saluran cerna.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Mudah',
    imageUrl: '/images/sistem-pernapasan-organ.svg',
    imageAlt: 'Diagram Sistem Pernapasan Manusia bernomor 1 sampai 7',
    imageCaption: 'Gambar: Organ sistem pernapasan manusia untuk soal nomor ini',
    text: 'Perhatikan kembali gambar sistem pernapasan manusia di atas! Tentukan kebenaran (Benar atau Salah) dari pernyataan mengenai bagian bernomor 1, 4, dan 7 berikut:',
    statements: [
      {
        id: 's1',
        text: 'Bagian nomor 1 adalah rongga hidung yang berfungsi menyaring debu serta menyesuaikan suhu dan kelembapan udara masuk.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bagian nomor 4 adalah alveolus yang berbentuk seperti buah anggur sebagai tempat mengikat oksigen.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Bagian nomor 7 adalah otot diafragma yang memisahkan rongga dada dengan rongga perut dan berperan pada pernapasan perut.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: Nomor 1 adalah rongga hidung tempat penyaringan, penghangatan, dan pelembapan udara.\n2. Salah: Nomor 4 menunjuk ke bronkus (percabangan trakea menuju paru-paru kanan dan kiri), sedangkan alveolus ada di ujung bronkiolus dalam paru-paru (no. 6).\n3. Benar: Nomor 7 adalah diafragma.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    imageUrl: '/images/alveolus-pertukaran-gas.svg',
    imageAlt: 'Diagram pertukaran gas di alveolus dan kapiler darah',
    imageCaption: 'Gambar: Pertukaran gas oksigen dan karbon dioksida di alveolus',
    text: 'Amati diagram pertukaran gas di alveolus pada gambar di atas! Tentukan apakah pernyataan berikut BENAR atau SALAH sesuai proses pernapasan manusia:',
    statements: [
      {
        id: 's1',
        text: 'Gas oksigen (O₂) berpindah dari rongga alveolus menuju pembuluh kapiler darah untuk diikat oleh hemoglobin sel darah merah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gas karbon dioksida (CO₂) merupakan zat sisa metabolisme sel tubuh yang diangkut darah menuju alveolus untuk dihembuskan keluar.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pertukaran gas antara alveolus dan kapiler darah berlangsung di bagian kerongkongan sebelum udara masuk ke paru-paru.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Oksigen berdifusi dari alveolus ke kapiler darah dan diikat oleh hemoglobin (Hb) dalam sel darah merah.\n2. Benar: Karbon dioksida dari darah berpindah ke alveolus lalu dibuang saat menghembuskan napas.\n3. Salah: Pertukaran gas terjadi di alveolus di dalam paru-paru, bukan di kerongkongan.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sukar',
    imageUrl: '/images/model-paru-paru-botol.svg',
    imageAlt: 'Model percobaan paru-paru sederhana dengan botol dan balon bernomor 1-4',
    imageCaption: 'Gambar: Komponen model paru-paru sederhana',
    text: 'Perhatikan gambar percobaan model paru-paru sederhana di atas! Siswa membandingkan setiap komponen alat percobaan dengan organ pernapasan manusia. Tentukan nilai kebenaran (Benar atau Salah) dari analogi berikut:',
    statements: [
      {
        id: 's1',
        text: 'Bagian nomor 1 (sedotan bercabang) menggambarkan kerongkongan dan lambung manusia.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Bagian nomor 2 (dua buah balon di dalam botol) menggambarkan paru-paru kanan dan paru-paru kiri manusia.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bagian nomor 3 (dinding botol plastik) menggambarkan rongga dada, sedangkan nomor 4 (membran karet bawah) menggambarkan otot diafragma.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Salah: Sedotan lurus yang bercabang dua (no. 1) menggambarkan trakea (batang tenggorokan) dan bronkus, bukan kerongkongan/lambung.\n2. Benar: Dua balon (no. 2) melambangkan sepasang paru-paru.\n3. Benar: Botol plastik keras (no. 3) melambangkan rongga dada dan membran karet bawah (no. 4) melambangkan diafragma.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    text: 'Berdasarkan otot utama yang bekerja, pernapasan manusia dibedakan menjadi pernapasan dada dan pernapasan perut. Tentukan BENAR atau SALAH untuk setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Pernapasan dada terjadi karena aktivitas kontraksi dan relaksasi otot antartulang rusuk.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Saat kita menarik napas pada pernapasan dada, tulang rusuk turun dan volume rongga dada mengecil.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pernapasan perut mengandalkan kontraksi dan relaksasi otot diafragma yang terletak di antara rongga dada dan rongga perut.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: Pernapasan dada digerakkan oleh otot antartulang rusuk.\n2. Salah: Saat menarik napas (inspirasi) pernapasan dada, otot antartulang rusuk berkontraksi sehingga tulang rusuk terangkat dan rongga dada membesar.\n3. Benar: Pernapasan perut digerakkan oleh otot diafragma.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Sistem Pernapasan Manusia',
    difficulty: 'Sedang',
    text: 'Berbagai kuman dan polutan udara dapat memicu gangguan pada sistem pernapasan. Tentukan apakah pernyataan mengenai penyakit pernapasan berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Tuberkulosis (TBC) adalah penyakit menular pada paru-paru yang disebabkan oleh infeksi bakteri Mycobacterium tuberculosis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Influenza (flu) disebabkan oleh kekurangan vitamin C di lambung sehingga tidak dapat menular melalui percikan batuk atau bersin.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Bronkitis merupakan peradangan pada saluran cabang tenggorokan (bronkus) yang sering ditandai batuk berdahak.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: TBC disebabkan infeksi bakteri Mycobacterium tuberculosis yang menyerang paru-paru.\n2. Salah: Influenza disebabkan oleh infeksi virus influenza dan sangat mudah menular melalui droplet (percikan bersin/batuk).\n3. Benar: Bronkitis adalah peradangan pada selaput bronkus yang menyebabkan batuk berdahak.',
  },
];
