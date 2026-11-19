import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran IPAS
 * Lingkup Materi: Sistem Pencernaan Manusia & Sistem Pernapasan Manusia
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi organ-organ sistem pencernaan manusia beserta fungsinya.',
    indikatorSoal:
      'Disajikan gambar sistem pencernaan manusia bernomor 1–8, peserta didik dapat menentukan fungsi utama organ lambung (nomor 3) yang menghasilkan HCl dan enzim pepsin.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengurutkan saluran pencernaan makanan pada tubuh manusia dari mulut hingga anus.',
    indikatorSoal:
      'Disajikan ilustrasi kegiatan makan, peserta didik dapat mengurutkan jalannya makanan melewati organ-organ saluran pencernaan secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis proses pencernaan kimiawi di dalam rongga mulut.',
    indikatorSoal:
      'Disajikan fenomena rasa manis setelah mengunyah nasi cukup lama, peserta didik dapat mengidentifikasi peran enzim ptialin (amilase) di rongga mulut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis-jenis gigi manusia berdasarkan bentuk dan fungsinya.',
    indikatorSoal:
      'Disajikan gambar tiga bentuk gigi manusia bernomor 1–3, peserta didik dapat memasangkan bentuk gigi taring dan gigi geraham beserta fungsinya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan mekanisme perpindahan makanan di kerongkongan menuju lambung.',
    indikatorSoal:
      'Disajikan peristiwa menelan makanan saat berbaring, peserta didik dapat menjelaskan peran gerak peristaltik otot dinding kerongkongan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan struktur jonjot usus (vili) pada usus halus dengan fungsi penyerapan nutrisi.',
    indikatorSoal:
      'Disajikan gambar penampang dinding usus halus (vili) dan kapiler darah, peserta didik dapat menjelaskan fungsi lipatan vili dalam memperluas bidang penyerapan sari makanan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi usus besar dan peran bakteri simbiosis di dalamnya.',
    indikatorSoal:
      'Disajikan informasi tentang bakteri Escherichia coli di usus besar, peserta didik dapat menentukan manfaatnya dalam pembentukan vitamin K.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penyebab dan gejala gangguan pada sistem pencernaan manusia.',
    indikatorSoal:
      'Disajikan kasus siswa yang jarang makan sayur/buah serta sering menahan BAB, peserta didik dapat mengidentifikasi gangguan sembelit (konstipasi) dan penyebabnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan pola makan tidak teratur terhadap timbulnya penyakit maag (gastritis).',
    indikatorSoal:
      'Disajikan studi kasus siswa yang sering melewatkan sarapan hingga perut perih, peserta didik dapat menganalisis dampak produksi asam lambung (HCl) terhadap dinding lambung.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi organ-organ sistem pernapasan manusia beserta fungsinya.',
    indikatorSoal:
      'Disajikan gambar organ sistem pernapasan manusia bernomor 1–7, peserta didik dapat mengidentifikasi nama dan fungsi organ trakea (nomor 3).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi rongga hidung dalam menyaring, menghangatkan, dan melembapkan udara.',
    indikatorSoal:
      'Disajikan pernyataan perbandingan bernapas lewat hidung dan mulut, peserta didik dapat menentukan proses yang bukan merupakan fungsi rongga hidung.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengurutkan alur jalannya udara pernapasan dari luar tubuh hingga ke alveolus.',
    indikatorSoal:
      'Disajikan konteks aktivitas olahraga pagi, peserta didik dapat mengurutkan saluran pernapasan yang dilalui udara saat proses inspirasi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan proses pertukaran gas oksigen (O₂) dan karbon dioksida (CO₂) di alveolus.',
    indikatorSoal:
      'Disajikan gambar diagram alveolus dengan arah panah O₂ dan CO₂, peserta didik dapat menjelaskan proses difusi gas antara alveolus dan kapiler darah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis mekanisme inspirasi dan ekspirasi pada pernapasan manusia.',
    indikatorSoal:
      'Disajikan ilustrasi perbandingan mekanisme inspirasi (Gambar A) dan ekspirasi (Gambar B), peserta didik dapat menganalisis kerja diafragma dan tekanan udara saat inspirasi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan volume ruang dan tekanan udara melalui percobaan model paru-paru sederhana.',
    indikatorSoal:
      'Disajikan gambar rangkaian model paru-paru dari botol plastik dan balon, peserta didik dapat memprediksi dan menjelaskan kondisi balon saat membran karet bawah ditarik ke bawah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi katup epiglotis dalam mencegah tersedak saat menelan makanan.',
    indikatorSoal:
      'Disajikan nasihat agar tidak berbicara sambil makan, peserta didik dapat mengidentifikasi katup epiglotis di pangkal tenggorokan sebagai pengatur jalur makanan dan udara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi jenis gangguan sistem pernapasan berdasarkan gejala klinisnya.',
    indikatorSoal:
      'Disajikan gejala sesak napas disertai bunyi mengi akibat paparan debu/udara dingin, peserta didik dapat menentukan jenis penyakit asma.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak pencemaran udara dan asap rokok terhadap struktur alat pernapasan.',
    indikatorSoal:
      'Disajikan kasus paparan asap rokok jangka panjang, peserta didik dapat menganalisis bahaya kerusakan silia trakea dan penumpukan zat berbahaya di alveolus.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran kelenjar pencernaan (hati dan pankreas) dalam membantu pencernaan kimiawi.',
    indikatorSoal:
      'Disajikan gambar sistem pencernaan manusia dan tiga opsi pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang peran organ hati (no. 4) dan pankreas (no. 5).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebiasaan sehari-hari untuk menjaga kesehatan organ pernapasan.',
    indikatorSoal:
      'Disajikan tiga deskripsi kebiasaan hidup, peserta didik dapat memilih seluruh kebiasaan tepat untuk menjaga kesehatan sistem pernapasan manusia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perubahan otot diafragma, volume rongga dada, dan tekanan udara pada fase ekspirasi.',
    indikatorSoal:
      'Disajikan gambar mekanisme pernapasan dan tiga pernyataan, peserta didik dapat memilih seluruh kondisi yang benar pada fase ekspirasi (Gambar B).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kesesuaian organ saluran pencernaan dengan proses pencernaan yang terjadi di dalamnya.',
    indikatorSoal:
      'Disajikan gambar sistem pencernaan bernomor 1–8 dan 3 pernyataan tentang mulut (no. 1), kerongkongan (no. 2), serta usus halus (no. 6), peserta didik dapat menentukan kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karakteristik pencernaan mekanis dan pencernaan kimiawi pada manusia.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai contoh dan lokasi pencernaan mekanis serta kimiawi, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan fungsi enzim pencernaan (pepsin, lipase) dan cairan empedu.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai peran pepsin, cairan empedu, dan enzim lipase, peserta didik dapat menilai kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Sistem Pencernaan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pencegahan dan mekanisme terjadinya gangguan pencernaan (sembelit, diare).',
    indikatorSoal:
      'Disajikan hasil diskusi kelompok siswa dengan 3 pernyataan tentang sembelit, diare, dan kebersihan tangan, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bagian dan fungsi organ sistem pernapasan pada diagram anatomi.',
    indikatorSoal:
      'Disajikan gambar sistem pernapasan bernomor 1–7 dan 3 pernyataan tentang rongga hidung (no. 1), bronkus (no. 4), dan diafragma (no. 7), peserta didik dapat menentukan kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis arah perpindahan gas O₂ dan CO₂ di alveolus serta perannya bagi tubuh.',
    indikatorSoal:
      'Disajikan gambar pertukaran gas di alveolus dan 3 pernyataan fisiologis, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan bagian-bagian alat percobaan model paru-paru dengan organ pernapasan manusia.',
    indikatorSoal:
      'Disajikan gambar percobaan model paru-paru botol & balon bernomor 1–4 beserta 3 pernyataan analogi organ, peserta didik dapat menentukan kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan mekanisme kerja otot pada pernapasan dada dan pernapasan perut.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang kerja otot antartulang rusuk dan otot diafragma saat bernapas, peserta didik dapat menilai kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Sistem Pernapasan Manusia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi penyebab dan gejala penyakit menular serta peradangan pada sistem pernapasan.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang penyakit TBC, influenza, dan bronkitis, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('pernapasan') || t.includes('paru') || t.includes('alveolus') || t.includes('diafragma')) {
    return 'Sistem Pernapasan Manusia';
  }
  return 'Sistem Pencernaan Manusia';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
