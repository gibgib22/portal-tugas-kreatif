import React, { useState } from 'react';

export default function Tugas1DigitalKreatif({ onBack }) {
    const [activeSection, setActiveSection] = useState('s1');

    const menuItems = [
        { id: 's1', label: '1. Perbedaan Digital Kreatif & Digitalisasi' },
        { id: 's2', label: '2. Kreativitas & Nilai Ekonomi' },
        { id: 's3', label: '3. Ciri-Ciri Bisnis Digital' },
        { id: 's4', label: '4. Peran AI dalam Proses Kreatif' },
        { id: 's5', label: '5. Risiko AI & Pemeriksaan Publikasi' },
        { id: 'ref', label: 'Referensi & Pernyataan AI' },
    ];

    return (
        <div className="portal-container">

            {/* Card Utama */}
            <div className="task-card">

                {/* Tombol Kembali di dalam Card */}
                {onBack && (
                    <button onClick={onBack} className="btn-back">
                        <span>&larr;</span> Kembali ke Daftar Tugas
                    </button>
                )}

                {/* Header Tugas */}
                <div>
                    <span className="task-badge">Individu &bull; Digital Kreatif</span>
                    <h1 className="task-title">Tugas 1: Digital Kreatif</h1>
                    <p className="task-desc">
                        Analisis konsep digital kreatif, nilai ekonomi kreativitas, bisnis digital, serta peran dan risiko AI.
                    </p>
                </div>

                {/* Identitas Mahasiswa */}
                <div className="identity-grid">
                    <div className="identity-item">
                        <span>Nama Lengkap</span>
                        <span>DIVANA ANGGITA PUTRI</span>
                    </div>
                    <div className="identity-item">
                        <span>NIM</span>
                        <span>19231205</span>
                    </div>
                    <div className="identity-item">
                        <span>Mata Kuliah</span>
                        <span>Digital Kreatif</span>
                    </div>
                    <div className="identity-item">
                        <span>Tanggal</span>
                        <span>6 Oktober 2026</span>
                    </div>
                </div>

                {/* Navigasi Pertanyaan */}
                <div>
                    <div className="nav-title">📑 Navigasi Pertanyaan</div>
                    <div className="nav-buttons">
                        {menuItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`nav-btn ${isActive ? 'active' : ''}`}
                                >
                                    <span>{item.label}</span>
                                    <span style={{ fontSize: '12px', opacity: isActive ? 1 : 0.6 }}>
                                        {isActive ? 'Sedang Dibaca ➔' : 'Lihat ➔'}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Bagian Konten Interaktif */}
                <div className="content-section">
                    {activeSection === 's1' && (
                        <div>
                            <h3>1. Apa perbedaan digital kreatif dan sekadar digitalisasi?</h3>
                            <div className="content-box">
                                <p><strong>Digitalisasi</strong> adalah proses memindahkan atau mengubah data, dokumen, dan proses kerja dari bentuk analog ke bentuk digital tanpa mengubah cara kerja dasarnya. Tujuannya utamanya efisiensi, kecepatan, dan kemudahan penyimpanan.</p>
                                <p style={{ marginTop: '12px' }}><strong>Digital kreatif</strong> adalah pemanfaatan teknologi digital untuk menciptakan nilai baru melalui ide, konten, pengalaman, atau model layanan yang sebelumnya tidak ada.</p>

                                {/* Tabel Perbandingan */}
                                <div className="table-container" style={{ marginTop: '20px', overflowX: 'auto' }}>
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th>Aspek</th>
                                                <th>Digitalisasi</th>
                                                <th>Digital Kreatif</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Fokus</strong></td>
                                                <td>Efisiensi dan konversi format</td>
                                                <td>Inovasi dan penciptaan nilai baru</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Peran teknologi</strong></td>
                                                <td>Alat pengganti proses manual</td>
                                                <td>Alat berkarya dan bereksperimen</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Hasil</strong></td>
                                                <td>Proses yang sama, lebih cepat & rapi</td>
                                                <td>Produk, pengalaman, atau layanan baru</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Peran manusia</strong></td>
                                                <td>Operator proses</td>
                                                <td>Pencipta ide dan pengarah kreatif</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Contoh</strong></td>
                                                <td>Kwitansi kertas menjadi e-kwitansi</td>
                                                <td>Brand membuat konten interaktif berbasis cerita</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p style={{ marginTop: '16px' }}><strong>Kesimpulan:</strong> digitalisasi menjawab pertanyaan "bagaimana melakukan hal yang sama dengan lebih efisien", sedangkan digital kreatif menjawab "bagaimana menciptakan hal baru yang bernilai".</p>
                            </div>
                        </div>
                    )}

                    {activeSection === 's2' && (
                        <div>
                            <h3>2. Mengapa kreativitas dapat menjadi sumber nilai ekonomi?</h3>
                            <div className="content-box">
                                <p>Kreativitas mengubah ide menjadi sesuatu yang dihargai pasar. Dalam konsep ekonomi kreatif, ide dan pengetahuan menjadi input utama produksi, bukan hanya bahan baku atau tenaga kerja (Howkins, 2001). Beberapa alasannya:</p>
                                <ul>
                                    <li><b>1. Diferensiasi.</b> Produk yang fungsinya sama dapat dihargai berbeda karena desain, cerita, dan pengalaman yang menyertainya.</li>
                                    <li><b>2. Nilai tambah.</b> Ide mengubah bahan atau layanan biasa menjadi lebih bernilai, misalnya kopi biasa menjadi pengalaman kafe bertema.</li>
                                    <li><b>3. Hak kekayaan intelektual.</b> Karya kreatif dapat dilindungi dan dilisensikan (hak cipta, merek, desain industri) sehingga menghasilkan pendapatan berulang.</li>
                                    <li><b>4. Pasar baru.</b> Kreativitas melihat kebutuhan yang belum terlayani dan membuka segmen baru, seperti konten kreator, game, dan musik digital.</li>
                                    <li><b>5. Skalabilitas digital.</b> Satu karya digital dapat didistribusikan ke banyak orang dengan biaya tambahan yang sangat kecil.</li>
                                    <li><b>6. Lapangan kerja.</b> Muncul profesi baru seperti desainer UI/UX, animator, editor video, dan pengembang konten.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeSection === 's3' && (
                        <div>
                            <h3>3. Apa yang membuat sebuah solusi dapat disebut bisnis digital?</h3>
                            <div className="content-box">
                                <p>Sebuah solusi layak disebut bisnis digital bila memenuhi ciri-ciri berikut:</p>
                                <ol>
                                    <li><b>Teknologi digital sebagai inti.</b> Proses utama penciptaan dan penyampaian nilai berjalan melalui platform digital, bukan sekadar pelengkap.</li>
                                    <li><b>Model bisnis yang jelas.</b> Ada proposisi nilai, segmen pelanggan, dan sumber pendapatan (langganan, iklan, komisi, penjualan produk digital).</li>
                                    <li><b>Berbasis data.</b> Keputusan, personalisasi, dan perbaikan layanan memanfaatkan data pengguna.</li>
                                    <li><b>Dapat diskalakan.</b> Pertumbuhan pengguna tidak menuntut penambahan biaya yang sebanding.</li>
                                    <li><b>Akses dan transaksi daring.</b> Pelanggan menemukan, memesan, dan membayar secara digital.</li>
                                    <li><b>Interaksi berkelanjutan.</b> Ada umpan balik dan pembaruan produk yang terus-menerus.</li>
                                </ol>
                                <p><b>Contoh:</b> marketplace, aplikasi transportasi daring, dan platform kursus online. Sebaliknya, toko fisik yang hanya memajang foto produk di media sosial belum sepenuhnya bisnis digital, karena inti nilainya masih berada di luar platform digital.</p>
                            </div>
                        </div>
                    )}

                    {activeSection === 's4' && (
                        <div>
                            <h3>4. Tiga peran AI dalam proses kreatif</h3>
                            <div className="content-box">
                                <figure>
                                    <svg viewBox="0 0 760 170" role="img" aria-label="Diagram tiga peran AI dalam proses kreatif">
                                        <defs>
                                            <marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                                                <path d="M0,0 L10,5 L0,10 z" fill="#2f5bea" />
                                            </marker>
                                        </defs>
                                        <rect x="10" y="30" width="210" height="100" rx="12" fill="#e8edff" stroke="#2f5bea" />
                                        <text x="115" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#1d2433">1. Pemicu Ide</text>
                                        <text x="115" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#1d2433">Brainstorming, konsep,</text>
                                        <text x="115" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#1d2433">sudut pandang baru</text>

                                        <rect x="275" y="30" width="210" height="100" rx="12" fill="#e8edff" stroke="#2f5bea" />
                                        <text x="380" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#1d2433">2. Asisten Produksi</text>
                                        <text x="380" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#1d2433">Draf teks, gambar, musik,</text>
                                        <text x="380" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#1d2433">video, kode, penyuntingan</text>

                                        <rect x="540" y="30" width="210" height="100" rx="12" fill="#e8edff" stroke="#2f5bea" />
                                        <text x="645" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#1d2433">3. Analis &amp; Optimizer</text>
                                        <text x="645" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#1d2433">Analisis audiens, tren,</text>
                                        <text x="645" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#1d2433">performa, personalisasi</text>

                                        <line x1="222" y1="80" x2="272" y2="80" stroke="#2f5bea" stroke-width="2.5" marker-end="url(#ar)" />
                                        <line x1="487" y1="80" x2="537" y2="80" stroke="#2f5bea" stroke-width="2.5" marker-end="url(#ar)" />
                                        <text x="380" y="160" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" fill="#5b6475">Manusia tetap mengarahkan, menyeleksi, dan memutuskan di setiap tahap</text>
                                    </svg>
                                    <figcaption>Gambar 1. Tiga peran AI dalam alur proses kreatif</figcaption>
                                </figure>

                                <h3>a. AI sebagai pemicu ide (ideation partner)</h3>
                                <p>Pada tahap awal, AI membantu brainstorming konsep, judul, tagline, alur cerita, dan variasi sudut pandang. Manfaatnya mempercepat eksplorasi dan membantu mengatasi kebuntuan ide. Keterbatasannya, AI cenderung menghasilkan ide yang umum atau mirip satu sama lain, sehingga manusia perlu memilih, menggabungkan, dan memberi arah kreatif agar hasilnya khas.</p>

                                <h3>b. AI sebagai asisten produksi (content generator / co-creator)</h3>
                                <p>AI dapat menghasilkan draf teks, gambar, musik, video, atau kode, serta membantu penyuntingan, penerjemahan, dan pembuatan banyak variasi desain. Manfaatnya penghematan waktu dan biaya produksi. Peran manusia adalah menyusun perintah (prompt) yang tepat, menyunting hasil, dan menambahkan sentuhan orisinal serta konteks lokal supaya karya memiliki karakter.</p>

                                <h3>c. AI sebagai analis dan pengoptimal (analyst / optimizer)</h3>
                                <p>AI menganalisis data audiens, tren pasar, dan performa konten untuk memberi rekomendasi, misalnya waktu unggah terbaik, personalisasi konten, atau pengujian A/B. Manfaatnya keputusan kreatif menjadi lebih terarah. Manusia tetap perlu menafsirkan hasil agar proses kreatif tidak terjebak pada angka semata dan tidak kehilangan visi.</p>
                            </div>
                        </div>
                    )}

                    {activeSection === 's5' && (
                        <div>
                            <h3>5. Risiko AI yang harus diperiksa sebelum karya dipublikasikan</h3>
                            <div className="content-box">
                                <figure>
                                    <svg viewBox="0 0 760 120" role="img" aria-label="Alur pemeriksaan sebelum publikasi">
                                        <defs>
                                            <marker id="ar2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                                                <path d="M0,0 L10,5 L0,10 z" fill="#2e9e57" />
                                            </marker>
                                        </defs>
                                        <g font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#1d2433" text-anchor="middle">
                                            <rect x="5" y="35" width="135" height="50" rx="10" fill="#eefaf1" stroke="#2e9e57" /><text x="72" y="65">Karya dari AI</text>
                                            <rect x="170" y="35" width="135" height="50" rx="10" fill="#eefaf1" stroke="#2e9e57" /><text x="237" y="65">Cek fakta</text>
                                            <rect x="335" y="35" width="135" height="50" rx="10" fill="#eefaf1" stroke="#2e9e57" /><text x="402" y="65">Cek hak cipta</text>
                                            <rect x="500" y="35" width="135" height="50" rx="10" fill="#eefaf1" stroke="#2e9e57" /><text x="567" y="65">Cek bias &amp; etika</text>
                                            <rect x="665" y="35" width="90" height="50" rx="10" fill="#2e9e57" /><text x="710" y="65" fill="#fff">Publikasi</text>
                                        </g>
                                        <line x1="142" y1="60" x2="168" y2="60" stroke="#2e9e57" stroke-width="2.5" marker-end="url(#ar2)" />
                                        <line x1="307" y1="60" x2="333" y2="60" stroke="#2e9e57" stroke-width="2.5" marker-end="url(#ar2)" />
                                        <line x1="472" y1="60" x2="498" y2="60" stroke="#2e9e57" stroke-width="2.5" marker-end="url(#ar2)" />
                                        <line x1="637" y1="60" x2="663" y2="60" stroke="#2e9e57" stroke-width="2.5" marker-end="url(#ar2)" />
                                    </svg>
                                    <figcaption>Gambar 2. Alur pemeriksaan sebelum karya berbantuan AI dipublikasikan</figcaption>
                                </figure>

                                <div className="table-container" style={{ overflowX: 'auto' }}>
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '22%' }}>Risiko</th>
                                                <th style={{ width: '38%' }}>Penjelasan</th>
                                                <th style={{ width: '40%' }}>Yang diperiksa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Akurasi &amp; Halusinasi</strong></td>
                                                <td>AI dapat menghasilkan fakta, angka, kutipan, atau referensi yang keliru bahkan fiktif.</td>
                                                <td>Verifikasi ke sumber tepercaya; pastikan setiap referensi benar-benar ada.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Hak Cipta &amp; Orisinalitas</strong></td>
                                                <td>Hasil AI dapat menyerupai karya yang sudah ada; status hak cipta karya AI dan lisensi alat bervariasi.</td>
                                                <td>Cek plagiarisme, ketentuan lisensi alat, dan sumber aset visual/audio.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Bias &amp; Stereotip</strong></td>
                                                <td>Keluaran dapat mencerminkan bias dari data latih.</td>
                                                <td>Tinjau konten agar tidak diskriminatif atau merugikan kelompok tertentu.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Privasi &amp; Kerahasiaan</strong></td>
                                                <td>Data pribadi atau rahasia yang dimasukkan ke alat AI berisiko bocor atau disalahgunakan.</td>
                                                <td>Jangan mengunggah data sensitif; pastikan hasil tidak memuat data pribadi orang lain.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Etika &amp; Transparansi</strong></td>
                                                <td>Konten dapat menyesatkan (misalnya deepfake) atau penggunaan AI tidak diungkapkan.</td>
                                                <td>Ungkapkan penggunaan AI sesuai aturan kampus/platform; hindari manipulasi.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Kesesuaian Konteks</strong></td>
                                                <td>Nada, bahasa, dan budaya hasil AI belum tentu cocok dengan audiens.</td>
                                                <td>Sunting agar sesuai audiens dan konteks lokal.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Ketergantungan Berlebihan</strong></td>
                                                <td>Karya yang terlalu bergantung pada AI kehilangan pemikiran dan suara penulisnya.</td>
                                                <td>Pastikan analisis, opini, dan keputusan akhir berasal dari diri sendiri.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'ref' && (
                        <div>
                            <h3>Referensi &amp; Pernyataan AI</h3>
                            {/* Daftar Referensi */}
                            <ol className="refs-list">
                                <li>Howkins, J. (2001). <em>The Creative Economy: How People Make Money from Ideas</em>. Penguin Books.</li>
                                <li>Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata dan Ekonomi Kreatif (Kemenparekraf/Baparekraf). Data dan publikasi ekonomi kreatif. <em>kemenparekraf.go.id</em>.</li>
                                <li>Laudon, K. C., &amp; Traver, C. G. <em>E-Commerce: Business, Technology, Society</em>. Pearson.</li>
                                <li>UNESCO (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>.</li>
                                <li>Republik Indonesia. Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta.</li>
                                <li>Republik Indonesia. Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.</li>
                            </ol>
                            <br></br>

                            {/* Callout Box untuk Pernyataan AI */}
                            <div className="ai-statement-box">
                                <div className="ai-statement-title">
                                    <span>💡</span> Pernyataan Penggunaan AI
                                </div>
                                <p>
                                    Sebagian draf jawaban ini dibantu oleh kecerdasan buatan (AI) dan telah ditinjau, dilengkapi, serta diperkuat secara mendalam dengan analisis dan pemikiran penulis sendiri.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* Footer */}
            <footer className="portal-footer">
                &copy; 2026 Portal Tugas Kuliah &bull; Framework React &amp; CSS Modern
            </footer>

        </div>
    );
}