
    const questionPool = [
  { q: "Apa ibu kota Indonesia?", a: "Jakarta", b: "Bandung", c: "Surabaya", kunci: "a" },
  { q: "Planet ke-3 dari Matahari adalah?", a: "Mars", b: "Bumi", c: "Venus", kunci: "b" },
  { q: "Siapa presiden pertama Indonesia?", a: "Soekarno", b: "Soeharto", c: "BJ Habibie", kunci: "a" },
  { q: "2 + 2 = ?", a: "3", b: "4", c: "5", kunci: "b" },
  { q: "Hewan tercepat di darat?", a: "Kuda", b: "Singa", c: "Cheetah", kunci: "c" },
  { q: "Gas yang kita hirup?", a: "Oksigen", b: "Hidrogen", c: "Karbon dioksida", kunci: "a" },
  { q: "Lambang kimia air?", a: "H2O", b: "CO2", c: "NaCl", kunci: "a" },
  { q: "Gunung tertinggi di dunia?", a: "Kilimanjaro", b: "Everest", c: "Fuji", kunci: "b" },
  { q: "Mamalia terbesar?", a: "Paus biru", b: "Gajah", c: "Jerapah", kunci: "a" },
  { q: "Tokoh teori relativitas?", a: "Newton", b: "Einstein", c: "Galileo", kunci: "b" },
  { q: "Apa ibu kota Indonesia?", a: "Jakarta", b: "Bandung", c: "Surabaya", kunci: "a" },
  { q: "Planet ke-3 dari Matahari adalah?", a: "Mars", b: "Bumi", c: "Venus", kunci: "b" },
  { q: "Siapa presiden pertama Indonesia?", a: "Soekarno", b: "Soeharto", c: "BJ Habibie", kunci: "a" },
  { q: "2 + 2 = ?", a: "3", b: "4", c: "5", kunci: "b" },
  { q: "Hewan tercepat di darat?", a: "Kuda", b: "Singa", c: "Cheetah", kunci: "c" },
  { q: "Gas yang kita hirup?", a: "Oksigen", b: "Hidrogen", c: "Karbon dioksida", kunci: "a" },
  { q: "Lambang kimia air?", a: "H2O", b: "CO2", c: "NaCl", kunci: "a" },
  { q: "Gunung tertinggi di dunia?", a: "Kilimanjaro", b: "Everest", c: "Fuji", kunci: "b" },
  { q: "Mamalia terbesar?", a: "Paus biru", b: "Gajah", c: "Jerapah", kunci: "a" },
  { q: "Tokoh teori relativitas?", a: "Newton", b: "Einstein", c: "Galileo", kunci: "b" },
  { q: "Apa mata uang Jepang?", a: "Yen", b: "Won", c: "Rupiah", kunci: "a" },
  { q: "Negara dengan populasi terbesar?", a: "India", b: "Cina", c: "Amerika Serikat", kunci: "b" },
  { q: "Benua terbesar?", a: "Afrika", b: "Asia", c: "Eropa", kunci: "b" },
  { q: "Warna primer adalah?", a: "Merah, Biru, Kuning", b: "Hijau, Merah, Kuning", c: "Hitam, Putih, Abu-abu", kunci: "a" },
  { q: "Bahasa resmi Brasil?", a: "Spanyol", b: "Portugis", c: "Inggris", kunci: "b" },
  { q: "Siapa penulis \"Harry Potter\"?", a: "J.K. Rowling", b: "Stephen King", c: "Agatha Christie", kunci: "a" },
  { q: "Apa nama lautan terbesar?", a: "Atlantik", b: "Pasifik", c: "Hindia", kunci: "b" },
  { q: "Apa ibukota Perancis?", a: "Paris", b: "Lyon", c: "Marseille", kunci: "a" },
  { q: "Siapa penemu lampu pijar?", a: "Nikola Tesla", b: "Thomas Edison", c: "Alexander Graham Bell", kunci: "b" },
  { q: "Bulan apa yang paling panjang?", a: "Februari", b: "Juli", c: "Agustus", kunci: "b" },
  { q: "Suhu titik beku air?", a: "0°C", b: "100°C", c: "50°C", kunci: "a" },
  { q: "Apa simbol kimia emas?", a: "Au", b: "Ag", c: "Fe", kunci: "a" },
  { q: "Pulau terbesar di dunia?", a: "Madagaskar", b: "Greenland", c: "Sumatera", kunci: "b" },
  { q: "Siapa penemu telepon?", a: "Alexander Graham Bell", b: "Isaac Newton", c: "Albert Einstein", kunci: "a" },
  { q: "Jumlah sisi segitiga?", a: "3", b: "4", c: "5", kunci: "a" },
  { q: "Planet yang dikenal sebagai Planet Merah?", a: "Mars", b: "Jupiter", c: "Venus", kunci: "a" },
  { q: "Apa warna campuran merah dan biru?", a: "Ungu", b: "Hijau", c: "Oranye", kunci: "a" },
  { q: "Bahasa resmi Inggris?", a: "Inggris", b: "Spanyol", c: "Portugis", kunci: "a" },
  { q: "Nama benua tempat Mesir berada?", a: "Afrika", b: "Asia", c: "Eropa", kunci: "a" },
  { q: "Siapa penulis \"Laskar Pelangi\"?", a: "Andrea Hirata", b: "Tere Liye", c: "Pramoedya Ananta Toer", kunci: "a" },
  { q: "Apa lambang kimia garam meja?", a: "NaCl", b: "H2O", c: "CO2", kunci: "a" },
  { q: "Negara mana yang terkenal dengan menara Eiffel?", a: "Perancis", b: "Italia", c: "Spanyol", kunci: "a" },
  { q: "Sungai terpanjang di dunia?", a: "Amazon", b: "Nil", c: "Mississippi", kunci: "b" },
  { q: "Apa nama ibukota Australia?", a: "Sydney", b: "Canberra", c: "Melbourne", kunci: "b" },
  { q: "Apa alat musik petik?", a: "Gitar", b: "Drum", c: "Piano", kunci: "a" },
  { q: "Siapa pelukis Mona Lisa?", a: "Leonardo da Vinci", b: "Vincent Van Gogh", c: "Pablo Picasso", kunci: "a" },
  { q: "Apa nama benua terkecil?", a: "Australia", b: "Eropa", c: "Antartika", kunci: "a" },
  { q: "Apa nama virus yang menyebabkan COVID-19?", a: "SARS-CoV-2", b: "H1N1", c: "Ebola", kunci: "a" },
  { q: "Berapa jumlah warna dalam pelangi?", a: "7", b: "6", c: "8", kunci: "a" },
  { q: "Benda yang tidak hidup disebut?", a: "Organisme", b: "Anorganik", c: "Mikroba", kunci: "b" },
  { q: "Apa alat pernapasan ikan?", a: "Insang", b: "Paru-paru", c: "Kulit", kunci: "a" },
  { q: "Apa ibukota Amerika Serikat?", a: "New York", b: "Los Angeles", c: "Washington D.C.", kunci: "c" },
  { q: "Apa nama organ terbesar pada manusia?", a: "Hati", b: "Kulit", c: "Jantung", kunci: "b" },
  { q: "Siapa penemu teori gravitasi?", a: "Isaac Newton", b: "Galileo Galilei", c: "Albert Einstein", kunci: "a" },
  { q: "Berapa sisi pada persegi?", a: "3", b: "4", c: "5", kunci: "b" },
  { q: "Apa alat untuk melihat bintang?", a: "Teleskop", b: "Mikroskop", c: "Kamera", kunci: "a" },
  { q: "Negara dengan piramida terkenal?", a: "Mesir", b: "Yunani", c: "Italia", kunci: "a" },
  { q: "Siapa penulis \"Romeo and Juliet\"?", a: "William Shakespeare", b: "Charles Dickens", c: "Jane Austen", kunci: "a" },
  { q: "Apa jenis daun pada tumbuhan padi?", a: "Daun tunggal", b: "Daun majemuk", c: "Daun jarum", kunci: "a" },
  { q: "Apa bahasa resmi negara Kanada?", a: "Inggris dan Prancis", b: "Inggris dan Spanyol", c: "Prancis dan Jerman", kunci: "a" },
  { q: "Suhu normal tubuh manusia?", a: "37°C", b: "40°C", c: "35°C", kunci: "a" },
  { q: "Negara dengan jumlah penduduk terbanyak di dunia?", a: "Cina", b: "India", c: "Amerika Serikat", kunci: "a" },
  { q: "Apa nama mata uang Amerika Serikat?", a: "Dollar", b: "Euro", c: "Yen", kunci: "a" },
 
  { q: "Siapa penemu bola lampu pijar?", a: "Alexander Graham Bell", b: "Thomas Alva Edison", c: "Nikola Tesla", kunci: "b" },
  { q: "Apa nama ibukota dari Kerajaan Majapahit?", a: "Pajajaran", b: "Tarumanegara", c: "Trowulan", kunci: "c" },
  { q: "Berapa hasil dari 12 x 8?", a: "96", b: "84", c: "108", kunci: "a" },
  { q: "Planet terbesar di tata surya adalah?", a: "Bumi", b: "Saturnus", c: "Jupiter", kunci: "c" },
  { q: "Siapa pencipta lagu Indonesia Raya?", a: "Ismail Marzuki", b: "W.R. Supratman", c: "H. Mutahar", kunci: "b" },
  { q: "Zat yang membuat daun berwarna hijau adalah?", a: "Klorofil", b: "Karoten", c: "Zat besi", kunci: "a" },
  { q: "Kata 'merah padam' merupakan bentuk majas?", a: "Simile", b: "Hiperbola", c: "Metafora", kunci: "b" },
  { q: "Negara mana yang menjajah Indonesia selama 350 tahun?", a: "Spanyol", b: "Belanda", c: "Inggris", kunci: "b" },
  { q: "Apa fungsi utama paru-paru?", a: "Memompa darah", b: "Menyalurkan makanan", c: "Pertukaran gas", kunci: "c" },
  { q: "Berapa jumlah provinsi di Indonesia per 2024?", a: "34", b: "37", c: "38", kunci: "c" },
  { q: "Singkatan dari ASEAN adalah?", a: "Asian Economic Nation", b: "Association of Southeast Asian Nations", c: "Alliance of South East Asia Nation", kunci: "b" },
  { q: "Nama ilmiah dari air adalah?", a: "H2O", b: "CO2", c: "NaCl", kunci: "a" },
  { q: "Apa sinonim dari kata 'cerdas'?", a: "Malas", b: "Bodoh", c: "Pintar", kunci: "c" },
  { q: "Sumpah Pemuda diperingati setiap tanggal?", a: "28 Oktober", b: "17 Agustus", c: "1 Juni", kunci: "a" },
  { q: "Hewan pemakan daging disebut?", a: "Herbivora", b: "Omnivora", c: "Karnivora", kunci: "c" },
  { q: "Apa ibu kota negara Thailand?", a: "Bangkok", b: "Hanoi", c: "Manila", kunci: "a" },
  { q: "Benda yang dapat menarik besi disebut?", a: "Isolator", b: "Magnet", c: "Konduktor", kunci: "b" },
  { q: "Konflik Perang Dunia II berakhir pada tahun?", a: "1945", b: "1939", c: "1942", kunci: "a" },
  { q: "Bahasa resmi PBB adalah?", a: "Latin", b: "Prancis", c: "Inggris", kunci: "c" },
  { q: "Pancasila disahkan sebagai dasar negara pada tahun?", a: "1945", b: "1950", c: "1949", kunci: "a" },
  { q: "Apa fungsi jantung dalam tubuh manusia?", a: "Mencerna makanan", b: "Menyaring darah", c: "Memompa darah", kunci: "c" },
  { q: "Siapa presiden ke-3 Indonesia?", a: "BJ Habibie", b: "Megawati", c: "Gus Dur", kunci: "a" },
  { q: "Ibukota dari negara Australia adalah?", a: "Sydney", b: "Melbourne", c: "Canberra", kunci: "c" },
  { q: "Gunung tertinggi di dunia adalah?", a: "Gunung Kilimanjaro", b: "Gunung Everest", c: "Gunung Elbrus", kunci: "b" },
  { q: "Hewan yang hidup di dua alam disebut?", a: "Amfibi", b: "Reptil", c: "Mamalia", kunci: "a" },
  { q: "Berapa jumlah pemain dalam satu tim sepak bola?", a: "11", b: "9", c: "10", kunci: "a" },
  { q: "Kapan proklamasi kemerdekaan Indonesia dibacakan?", a: "1 Juni 1945", b: "17 Agustus 1945", c: "10 November 1945", kunci: "b" },
  { q: "Apa satuan untuk mengukur arus listrik?", a: "Volt", b: "Ohm", c: "Ampere", kunci: "c" },
  { q: "Planet apa yang dijuluki 'Planet Merah'?", a: "Venus", b: "Mars", c: "Uranus", kunci: "b" },
  { q: "Apa simbol kimia untuk emas?", a: "Ag", b: "Au", c: "Fe", kunci: "b" },

  { q: "Siapa penulis naskah proklamasi?", a: "Soekarno", b: "Moh. Hatta", c: "Sayuti Melik", kunci: "a" },
  { q: "Apa nama sungai terpanjang di dunia?", a: "Amazon", b: "Nil", c: "Yangtze", kunci: "b" },
  { q: "Organisme yang membuat makanan sendiri disebut?", a: "Heterotrof", b: "Autotrof", c: "Parasit", kunci: "b" },
  { q: "Apa nama zat yang digunakan untuk membunuh kuman?", a: "Enzim", b: "Disinfektan", c: "Mineral", kunci: "b" },
  { q: "Berapa sisi segitiga sama sisi?", a: "2", b: "3", c: "4", kunci: "b" },
  { q: "Bahasa internasional yang umum digunakan?", a: "Mandarin", b: "Inggris", c: "Arab", kunci: "b" },
  { q: "Apa nama alat untuk mengukur suhu?", a: "Hidrometer", b: "Termometer", c: "Barometer", kunci: "b" },
  { q: "Siapa pencipta teori evolusi?", a: "Einstein", b: "Charles Darwin", c: "Isaac Newton", kunci: "b" },
  { q: "Negara manakah yang dijuluki Negeri Matahari Terbit?", a: "Korea Selatan", b: "Tiongkok", c: "Jepang", kunci: "c" },
  { q: "Benda langit yang mengelilingi planet disebut?", a: "Meteor", b: "Satelit", c: "Komet", kunci: "b" },

  { q: "Hewan langka asli Indonesia adalah?", a: "Panda", b: "Komodo", c: "Harimau Bengal", kunci: "b" },
  { q: "Siapa tokoh utama dalam novel 'Laskar Pelangi'?", a: "Ikal", b: "Lintang", c: "Mahar", kunci: "a" },
  { q: "Apa nama alat musik khas Jawa?", a: "Angklung", b: "Gamelan", c: "Sasando", kunci: "b" },
  { q: "Lambang sila kedua Pancasila adalah?", a: "Rantai", b: "Pohon beringin", c: "Bintang", kunci: "a" },
  { q: "Apa nama sistem pemerintahan Indonesia?", a: "Monarki", b: "Republik", c: "Federasi", kunci: "b" },
  { q: "Waktu yang dibutuhkan Bumi mengelilingi Matahari?", a: "12 bulan", b: "6 bulan", c: "24 bulan", kunci: "a" },
  { q: "Apa bentuk jamak dari kata 'child' dalam Bahasa Inggris?", a: "Childs", b: "Children", c: "Childes", kunci: "b" },
  { q: "Sumber energi utama di Bumi adalah?", a: "Air", b: "Matahari", c: "Udara", kunci: "b" },
  { q: "Binatang berkaki delapan disebut?", a: "Serangga", b: "Reptil", c: "Laba-laba", kunci: "c" },
  { q: "Perjanjian Renville terjadi pada tahun?", a: "1947", b: "1948", c: "1949", kunci: "b" },
  { q: "Nama mata uang Jepang adalah?", a: "Yen", b: "Won", c: "Dollar", kunci: "a" },
  
  { q: "Apa nama benda angkasa yang mengelilingi Matahari dan memiliki ekor terang?", a: "Meteor", b: "Asteroid", c: "Komet", kunci: "c" },
  { q: "Apa ibukota negara Thailand?", a: "Bangkok", b: "Hanoi", c: "Manila", kunci: "a" },
  { q: "Penemu bola lampu pijar adalah?", a: "Thomas Alva Edison", b: "Nikola Tesla", c: "Alexander Graham Bell", kunci: "a" },
  { q: "Siapa Bapak Koperasi Indonesia?", a: "Ki Hajar Dewantara", b: "Sutan Sjahrir", c: "Moh. Hatta", kunci: "c" },
  { q: "Berapa jumlah pulau besar utama di Indonesia?", a: "3", b: "5", c: "7", kunci: "b" },
  { q: "Apa nama hewan tercepat di darat?", a: "Singa", b: "Cheetah", c: "Kuda", kunci: "b" },
  { q: "Jenis tanah paling subur di Indonesia adalah?", a: "Laterit", b: "Gambut", c: "Vulkanik", kunci: "c" },
  { q: "Apa nama senyawa yang menyebabkan karat pada besi?", a: "Karbon dioksida", b: "Oksigen", c: "Ferric oxide", kunci: "c" },
  { q: "Apa nama senyawa kimia air?", a: "CO2", b: "H2O", c: "NaCl", kunci: "b" },
  { q: "Benua terkecil di dunia adalah?", a: "Australia", b: "Eropa", c: "Antartika", kunci: "a" },

  { q: "Sungai terbesar di Indonesia adalah?", a: "Sungai Musi", b: "Sungai Mahakam", c: "Sungai Kapuas", kunci: "c" },
  { q: "Kata baku dari 'resiko' adalah?", a: "Risiko", b: "Resiko", c: "Risko", kunci: "a" },
  { q: "Apa ibu kota negara Vietnam?", a: "Bangkok", b: "Hanoi", c: "Ho Chi Minh", kunci: "b" },
  { q: "Apa alat musik tradisional dari Sunda?", a: "Gamelan", b: "Angklung", c: "Kolintang", kunci: "b" },
  { q: "Apa nama zat pewarna alami pada daun?", a: "Chlorophyll", b: "Melanin", c: "Karoten", kunci: "a" },
  { q: "Apa lambang dari sila keempat Pancasila?", a: "Kepala banteng", b: "Rantai emas", c: "Pohon beringin", kunci: "a" },
  { q: "Apa nama sistem koordinat di peta?", a: "Garis miring", b: "Garis bujur dan lintang", c: "Garis tegak lurus", kunci: "b" },
  { q: "Benda cair akan mengalir dari tempat yang?", a: "Dingin ke panas", b: "Tinggi ke rendah", c: "Kecil ke besar", kunci: "b" },
  { q: "Nama zat gizi utama dalam nasi adalah?", a: "Protein", b: "Vitamin", c: "Karbohidrat", kunci: "c" },
  { q: "Apa singkatan dari ASEAN?", a: "Association of South East Asian Nations", b: "Asia East Nations", c: "Alliance of Southeast Asian", kunci: "a" },

  { q: "Sumber daya alam yang tidak dapat diperbarui adalah?", a: "Air", b: "Hutan", c: "Minyak bumi", kunci: "c" },
  { q: "Siapa tokoh Indonesia yang dikenal sebagai Bapak Pendidikan?", a: "R.A. Kartini", b: "Ki Hajar Dewantara", c: "Moh. Yamin", kunci: "b" },
  { q: "Negara yang dikenal sebagai Negeri Seribu Pagoda adalah?", a: "Myanmar", b: "Thailand", c: "Laos", kunci: "a" },
  { q: "Apa alat untuk mengukur tekanan udara?", a: "Termometer", b: "Anemometer", c: "Barometer", kunci: "c" },
  { q: "Siapa yang memproklamasikan kemerdekaan Indonesia?", a: "Sukarno-Hatta", b: "Soedirman", c: "Tan Malaka", kunci: "a" },
  { q: "Apa nama senyawa kimia garam dapur?", a: "NaCl", b: "KCl", c: "MgCl", kunci: "a" },
  { q: "Tokoh dunia yang memimpin Perang Dunia II dari Jerman?", a: "Hitler", b: "Churchill", c: "Stalin", kunci: "a" },
  { q: "Apa nama organ utama sistem pernapasan manusia?", a: "Paru-paru", b: "Hati", c: "Jantung", kunci: "a" },
  { q: "Pancasila disahkan pada tanggal?", a: "17 Agustus 1945", b: "1 Juni 1945", c: "20 Mei 1945", kunci: "b" },
  { q: "Alat musik tiup dari Maluku adalah?", a: "Sasando", b: "Tifa", c: "Fu", kunci: "c" },

  { q: "Sistem pemerintahan Indonesia berdasarkan?", a: "Undang-Undang Dasar", b: "Perjanjian", c: "Surat Keputusan", kunci: "a" },
  { q: "Apa nama alat pembesar benda kecil?", a: "Kaca pembesar", b: "Mikroskop", c: "Teleskop", kunci: "b" },
  { q: "Binatang yang bisa terbang dan menyusui adalah?", a: "Burung", b: "Kelelawar", c: "Ayam", kunci: "b" },
  { q: "Apa nama senyawa kimia yang kita hirup untuk bernapas?", a: "Karbon dioksida", b: "Oksigen", c: "Hidrogen", kunci: "b" },
  { q: "Apa arti dari kata demokrasi?", a: "Rakyat berkuasa", b: "Pemerintah kuat", c: "Penguasa tunggal", kunci: "a" },
  { q: "Negara manakah yang pertama kali mendaratkan manusia di bulan?", a: "Rusia", b: "Amerika Serikat", c: "Cina", kunci: "b" },
  { q: "Apa nama samudra terbesar di dunia?", a: "Atlantik", b: "Pasifik", c: "Hindia", kunci: "b" },
  { q: "Sumber energi yang paling ramah lingkungan?", a: "Batu bara", b: "Matahari", c: "Minyak bumi", kunci: "b" },
  { q: "Apa sebutan untuk hewan pemakan tumbuhan?", a: "Karnivora", b: "Omnivora", c: "Herbivora", kunci: "c" },
  { q: "Organ tubuh yang menyaring racun dalam darah adalah?", a: "Ginjal", b: "Hati", c: "Paru-paru", kunci: "b" },

  { q: "Hari Pendidikan Nasional diperingati setiap tanggal?", a: "2 Mei", b: "1 Juni", c: "20 Mei", kunci: "a" },
  { q: "Apa nama lapisan pelindung Bumi dari sinar UV?", a: "Atmosfer", b: "Ozon", c: "Magnetosfer", kunci: "b" },
  { q: "Siapa penemu telepon?", a: "Thomas Edison", b: "Alexander Graham Bell", c: "Nikola Tesla", kunci: "b" },
  { q: "Ibukota negara Arab Saudi adalah?", a: "Dubai", b: "Abu Dhabi", c: "Riyadh", kunci: "c" },
  { q: "Apa nama zat pembawa informasi genetik?", a: "Enzim", b: "DNA", c: "RNA", kunci: "b" },
  { q: "Nama presiden pertama Amerika Serikat adalah?", a: "Abraham Lincoln", b: "George Washington", c: "John Adams", kunci: "b" },
  { q: "Apa nama alat untuk melihat bintang di langit?", a: "Kamera", b: "Teleskop", c: "Mikroskop", kunci: "b" },
  { q: "Negara manakah yang terkenal dengan Menara Eiffel?", a: "Italia", b: "Perancis", c: "Spanyol", kunci: "b" },
  { q: "Lagu kebangsaan Indonesia adalah?", a: "Indonesia Pusaka", b: "Rayuan Pulau Kelapa", c: "Indonesia Raya", kunci: "c" },
  { q: "Tumbuhan yang hidup di daerah kering disebut?", a: "Xerofit", b: "Hidrofit", c: "Higrofit", kunci: "a" },
  
  { q: "Planet terdekat dengan Matahari adalah?", a: "Venus", b: "Merkurius", c: "Mars", kunci: "b" },
  { q: "Apa nama perang besar yang terjadi antara 1914–1918?", a: "Perang Dunia I", b: "Perang Dunia II", c: "Perang Dingin", kunci: "a" },
  { q: "Siapa penulis buku 'Harry Potter'?", a: "J.K. Rowling", b: "Stephen King", c: "Agatha Christie", kunci: "a" },
  { q: "Apa ibukota negara Jepang?", a: "Seoul", b: "Tokyo", c: "Osaka", kunci: "b" },
  { q: "Zat apa yang membuat daun berwarna hijau?", a: "Karoten", b: "Klorofil", c: "Xantofil", kunci: "b" },
  { q: "Salah satu hasil bumi utama Indonesia adalah?", a: "Minyak bumi", b: "Beras", c: "Karet", kunci: "c" },
  { q: "Siapa pemimpin Revolusi Prancis?", a: "Napoleon Bonaparte", b: "Maximilien Robespierre", c: "Louis XVI", kunci: "b" },
  { q: "Apa nama benua terbesar di dunia?", a: "Asia", b: "Afrika", c: "Eropa", kunci: "a" },
  { q: "Apa bahasa resmi di Brasil?", a: "Spanyol", b: "Portugis", c: "Perancis", kunci: "b" },
  { q: "Apa nama alat untuk mengukur suhu tubuh?", a: "Barometer", b: "Termometer", c: "Higrometer", kunci: "b" },

  { q: "Negara mana yang terkenal dengan piramida?", a: "Mesir", b: "Yunani", c: "Meksiko", kunci: "a" },
  { q: "Sungai terpanjang di dunia adalah?", a: "Amazon", b: "Nil", c: "Yangtze", kunci: "b" },
  { q: "Siapa tokoh wanita yang memperjuangkan hak perempuan di Indonesia?", a: "R.A. Kartini", b: "Siti Nurbaya", c: "Cut Nyak Dhien", kunci: "a" },
  { q: "Apa nama planet yang dikenal dengan 'Planet Merah'?", a: "Mars", b: "Jupiter", c: "Saturnus", kunci: "a" },
  { q: "Apa nama benua yang terletak di sebelah selatan Benua Afrika?", a: "Antartika", b: "Australia", c: "Asia", kunci: "a" },
  { q: "Apa nama zat yang memberi rasa manis pada gula?", a: "Sukrosa", b: "Glukosa", c: "Fruktosa", kunci: "a" },
  { q: "Apa nama alat yang digunakan untuk melihat mikroorganisme?", a: "Mikroskop", b: "Teleskop", c: "Spektrometer", kunci: "a" },
  { q: "Siapa Presiden Indonesia ke-2?", a: "Soeharto", b: "BJ Habibie", c: "Megawati", kunci: "a" },
  { q: "Apa lambang sila ketiga Pancasila?", a: "Pohon beringin", b: "Bintang", c: "Rantai emas", kunci: "b" },
  { q: "Apa nama planet terbesar di tata surya kita?", a: "Jupiter", b: "Saturnus", c: "Neptunus", kunci: "a" },

  { q: "Di negara mana Menara Pisa berada?", a: "Italia", b: "Prancis", c: "Spanyol", kunci: "a" },
  { q: "Apa nama bahan bakar fosil yang paling umum digunakan?", a: "Batu bara", b: "Gas alam", c: "Minyak bumi", kunci: "c" },
  { q: "Apa nama lautan terbesar di dunia?", a: "Samudra Pasifik", b: "Samudra Atlantik", c: "Samudra Hindia", kunci: "a" },
  { q: "Apa nama alat yang digunakan untuk mengukur kecepatan angin?", a: "Barometer", b: "Anemometer", c: "Termometer", kunci: "b" },
  { q: "Apa singkatan dari PBB?", a: "Perserikatan Bangsa-Bangsa", b: "Perhimpunan Bangsa-Bangsa", c: "Persatuan Bangsa-Bangsa", kunci: "a" },
  { q: "Apa nama tumbuhan yang menghasilkan biji kopi?", a: "Kopi arabika", b: "Kopi robusta", c: "Kopi liberika", kunci: "a" },
  { q: "Siapa penemu lampu pijar?", a: "Nikola Tesla", b: "Thomas Edison", c: "Benjamin Franklin", kunci: "b" },
  { q: "Apa nama organ tubuh yang berfungsi memompa darah?", a: "Jantung", b: "Paru-paru", c: "Hati", kunci: "a" },
  { q: "Apa nama alat musik tradisional khas Jawa Barat?", a: "Angklung", b: "Gamelan", c: "Kolintang", kunci: "a" },
  { q: "Siapa penulis buku 'Laskar Pelangi'?", a: "Andrea Hirata", b: "Tere Liye", c: "Habiburrahman El Shirazy", kunci: "a" },

  { q: "Apa ibu kota negara Kanada?", a: "Toronto", b: "Ottawa", c: "Vancouver", kunci: "b" },
  { q: "Apa nama zat yang memberikan warna merah pada darah?", a: "Hemoglobin", b: "Melanin", c: "Keratin", kunci: "a" },
  { q: "Berapa jumlah provinsi di Indonesia?", a: "34", b: "33", c: "35", kunci: "a" },
  { q: "Apa nama senyawa kimia yang digunakan sebagai bahan bakar roket?", a: "Hidrogen cair", b: "Metana", c: "Etanol", kunci: "a" },
  { q: "Apa nama sungai terpanjang di Asia?", a: "Sungai Yangtze", b: "Sungai Mekong", c: "Sungai Ganges", kunci: "a" },
  { q: "Apa nama sistem pemerintahan Indonesia?", a: "Republik", b: "Monarki", c: "Kekaisaran", kunci: "a" },
  { q: "Apa nama gunung tertinggi di dunia?", a: "Gunung Kilimanjaro", b: "Gunung Everest", c: "Gunung Fuji", kunci: "b" },
  { q: "Apa nama senyawa yang membuat air berasa asam?", a: "Asam sulfat", b: "Asam karbonat", c: "Asam asetat", kunci: "b" },
  { q: "Siapa yang menulis proklamasi kemerdekaan Indonesia?", a: "Sukarno-Hatta", b: "Sutan Sjahrir", c: "Tan Malaka", kunci: "a" },
  { q: "Apa nama sistem yang mengatur tumbuhan agar tetap berdiri tegak?", a: "Sistem akar", b: "Sistem vaskular", c: "Sistem rangka", kunci: "b" },

  { q: "Siapa penemu telepon?", a: "Alexander Graham Bell", b: "Thomas Edison", c: "Nikola Tesla", kunci: "a" },
  { q: "Planet yang memiliki cincin paling jelas adalah?", a: "Saturnus", b: "Jupiter", c: "Uranus", kunci: "a" },
  { q: "Apa nama senyawa kimia yang membuat air laut asin?", a: "Garam Natrium", b: "Magnesium", c: "Kalium", kunci: "a" },
  { q: "Sungai terpanjang di Indonesia adalah?", a: "Sungai Kapuas", b: "Sungai Mahakam", c: "Sungai Barito", kunci: "a" },
  { q: "Siapa tokoh kemerdekaan Indonesia yang dijuluki 'Bapak Proklamator'?", a: "Soekarno", b: "Mohammad Hatta", c: "Sutan Sjahrir", kunci: "a" },
  { q: "Apa ibukota negara Australia?", a: "Sydney", b: "Melbourne", c: "Canberra", kunci: "c" },
  { q: "Apa nama teknologi yang digunakan untuk mengukur jarak dengan gelombang suara?", a: "Sonar", b: "Radar", c: "GPS", kunci: "a" },
  { q: "Benda langit yang menghasilkan cahaya sendiri disebut?", a: "Planet", b: "Bintang", c: "Meteor", kunci: "b" },
  { q: "Apa nama gas yang dibutuhkan manusia untuk bernapas?", a: "Karbon dioksida", b: "Nitrogen", c: "Oksigen", kunci: "c" },
  { q: "Apa nama gunung berapi aktif yang ada di Indonesia?", a: "Gunung Merapi", b: "Gunung Rinjani", c: "Gunung Bromo", kunci: "a" },

  { q: "Siapa penulis novel 'The Hobbit'?", a: "J.R.R. Tolkien", b: "C.S. Lewis", c: "George Orwell", kunci: "a" },
  { q: "Apa nama benua yang disebut juga 'Benua Hitam'?", a: "Afrika", b: "Asia", c: "Australia", kunci: "a" },
  { q: "Apa fungsi akar pada tumbuhan?", a: "Menyerap air dan mineral", b: "Fotosintesis", c: "Menangkap serangga", kunci: "a" },
  { q: "Berapa jumlah pulau di Indonesia?", a: "17.000 lebih", b: "13.000 lebih", c: "10.000 lebih", kunci: "a" },
  { q: "Apa nama ibu kota negara Malaysia?", a: "Kuala Lumpur", b: "Jakarta", c: "Bangkok", kunci: "a" },
  { q: "Apa nama alat musik tiup tradisional dari Jawa?", a: "Suling", b: "Gong", c: "Kendang", kunci: "a" },
  { q: "Siapa penemu teori relativitas?", a: "Isaac Newton", b: "Albert Einstein", c: "Galileo Galilei", kunci: "b" },
  { q: "Apa nama senyawa yang merupakan sumber energi utama bagi tubuh manusia?", a: "Glukosa", b: "Protein", c: "Lemak", kunci: "a" },
  { q: "Apa fungsi utama klorofil pada tumbuhan?", a: "Menghasilkan oksigen", b: "Menangkap sinar matahari", c: "Membuat akar", kunci: "b" },
  { q: "Siapa presiden pertama Amerika Serikat?", a: "George Washington", b: "Abraham Lincoln", c: "Thomas Jefferson", kunci: "a" },

  { q: "Apa nama organisasi dunia yang bertujuan menjaga perdamaian?", a: "PBB", b: "NATO", c: "ASEAN", kunci: "a" },
  { q: "Apa nama senyawa yang membuat air berasa asam?", a: "Asam karbonat", b: "Asam sulfat", c: "Asam asetat", kunci: "a" },
  { q: "Siapa penulis karya 'Romeo dan Juliet'?", a: "William Shakespeare", b: "Charles Dickens", c: "Mark Twain", kunci: "a" },
  { q: "Apa nama sistem tubuh manusia yang mengedarkan darah?", a: "Sistem pernapasan", b: "Sistem peredaran darah", c: "Sistem pencernaan", kunci: "b" },
  { q: "Apa nama planet yang dikenal sebagai planet biru?", a: "Bumi", b: "Neptunus", c: "Uranus", kunci: "a" },
  { q: "Apa nama benua terkecil di dunia?", a: "Australia", b: "Eropa", c: "Antartika", kunci: "a" },
  { q: "Siapa tokoh Indonesia yang dikenal sebagai pahlawan nasional wanita?", a: "Cut Nyak Dhien", b: "R.A. Kartini", c: "Siti Nurbaya", kunci: "b" },
  { q: "Apa nama alat untuk mengukur tekanan udara?", a: "Barometer", b: "Anemometer", c: "Termometer", kunci: "a" },
  { q: "Apa ibu kota negara Perancis?", a: "Paris", b: "Lyon", c: "Marseille", kunci: "a" },
  { q: "Apa nama zat yang membuat darah berwarna merah?", a: "Hemoglobin", b: "Melanin", c: "Klorofil", kunci: "a" }

];

    let selected = [];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function startQuiz() {
      document.getElementById('startScreen').classList.add('hidden');
      document.getElementById('quizScreen').classList.remove('hidden');
      selected = shuffle([...questionPool]).slice(0, 10);

      const form = document.getElementById('quizForm');
      form.innerHTML = '';

      selected.forEach((q, i) => {
        const html = `
          <div class="question">
            <h3>${i + 1}. ${q.q}</h3>
            <div class="options">
              <label><input type="radio" name="q${i}" value="a"> A. ${q.a}</label>
              <label><input type="radio" name="q${i}" value="b"> B. ${q.b}</label>
              <label><input type="radio" name="q${i}" value="c"> C. ${q.c}</label>
            </div>
          </div>`;
        form.innerHTML += html;
      });
    }

    function submitQuiz() {
  let score = 0;
  let feedback = '';

  selected.forEach((q, i) => {
    const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (userAnswer && userAnswer.value === q.kunci) {
      score++;
    } else {
      // Kalau salah, kasih info soal + jawaban benar dan jawaban user (kalau ada)
      const jawabanUser = userAnswer ? userAnswer.value.toUpperCase() : 'Tidak menjawab';
      const jawabanBenar = q.kunci.toUpperCase();

      feedback += `<div style="margin-bottom:12px;">
        <strong>Soal ${i + 1}:</strong> ${q.q}<br>
        Jawaban kamu: <span style="color:red;">${jawabanUser}</span><br>
        Jawaban benar: <span style="color:green;">${jawabanBenar}</span>
      </div>`;
    }
  });

  let pesan = `<p>Skor kamu: <strong>${score}</strong> dari 10 pertanyaan.<br>Selamat ${score >= 8 ? 'kamu luar biasa!' : score >= 5 ? 'kamu cukup baik!' : 'tetap semangat belajar!'}</p>`;

  if (feedback) {
    pesan += `<h3>Review Jawaban Salah:</h3>` + feedback;
  }

  document.getElementById('resultText').innerHTML = pesan;
}

function ulangiKuis() {
  // Reset form jawaban
  document.getElementById('quizForm').reset();

  // Sembunyikan hasil skor
  document.getElementById('hasilSkor').textContent = '';

  // Kembali ke halaman awal
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('startScreen').classList.remove('hidden');
}


