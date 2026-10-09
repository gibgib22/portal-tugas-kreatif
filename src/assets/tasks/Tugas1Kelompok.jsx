import React, { useState } from 'react';

export default function Tugas1Kelompok({ onBack }) {
    const [activeSection, setActiveSection] = useState('s1');

    const menuItems = [
        { id: 's1', label: '1. AI & Efisiensi Workflow Kreatif' },
        { id: 's2', label: '2. Generative AI & Profesi Desainer' },
        { id: 's3', label: '3. Konten Audio-Visual & Personalisasi' },
        { id: 's4', label: '4. Etika, Hak Cipta, & Deepfake' },
        { id: 's5', label: '5. Strategi Kreator di Era AI' },
        { id: 's6', label: '6. Studi Kasus: Skenario & Copywriting' },
        { id: 'ref', label: 'Referensi' },
    ];

    return (
        <div className="portal-container">

            {/* Card Utama */}
            <div className="task-card">

                {/* Tombol Kembali */}
                {onBack && (
                    <button onClick={onBack} className="btn-back">
                        <span>&larr;</span> Kembali ke Daftar Tugas
                    </button>
                )}

                {/* Header Tugas */}
                <div>
                    <span className="task-badge">Kelompok &bull; Digital Kreatif</span>
                    <h1 className="task-title">Tugas 2: Digital Kreatif</h1>
                    <p className="task-desc">
                        AI dalam workflow kreatif, desain grafis, konten audio-visual, etika dan hak cipta, strategi kreator, serta penulisan skenario dan copywriting.
                    </p>
                </div>

                {/* Identitas Mahasiswa */}
                <div className="identity-grid">
                    <div className="identity-item">
                        <span>Mata Kuliah</span>
                        <span>Digital Kreatif</span>
                    </div>
                    <div className="identity-item" style={{ gridColumn: 'span 2' }}>
                        <span>Anggota Kelompok</span>
                        <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '13px', lineHeight: '1.6' }}>
                            <li>1. DIVANA ANGGITA PUTRI – 19231205</li>
                            <li>2. GUNTUR PRAKOSO K.P – 19231554</li>
                            <li>3. Siti Zahra Salsabila Ashari – 19231398</li>
                            <li>4. Zamzam Nursubchan – 19231106</li>
                            <li>5. Reynata Anggraeny – 19230013</li>
                        </ul>
                    </div>
                    <div className="identity-item">
                        <span>Tanggal</span>
                        <span>6 Oktober 2026</span>
                    </div>
                </div>

                {/* Navigasi Pertanyaan */}
                <div>
                    <div className="nav-title">📑 Daftar Isi Navigasi</div>
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

                    {/* Section 1 */}
                    {activeSection === 's1' && (
                        <div>
                            <h3>1. AI dan efisiensi alur kerja industri kreatif digital</h3>
                            <p className="soal">Jelaskan bagaimana penerapan AI dapat mempercepat dan meningkatkan efisiensi workflow di industri kreatif digital. Berikan minimal dua contoh konkret pada tahap praproduksi atau produksi.</p>

                            <div className="content-box">
                                <p>Alur kerja kreatif umumnya terdiri dari praproduksi (riset, ide, perencanaan), produksi (pembuatan aset), dan pascaproduksi (penyuntingan, distribusi). Banyak pekerjaan di tiap tahap bersifat repetitif dan memakan waktu. AI mempercepat alur ini melalui tiga mekanisme utama:</p>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li><strong>Otomasi tugas repetitif</strong> seperti pemotongan latar, transkripsi, penamaan aset, dan pengubahan ukuran desain.</li>
                                    <li><strong>Percepatan iterasi</strong>: puluhan variasi konsep dapat dihasilkan dalam hitungan menit, sehingga tim bisa memilih dan menyempurnakan lebih cepat.</li>
                                    <li><strong>Penurunan hambatan teknis</strong>: pekerjaan yang dulu menuntut keahlian khusus dapat dikerjakan lebih luas.</li>
                                </ul>

                                <h4 style={{ marginTop: '20px' }}>Contoh konkret 1 (praproduksi): riset, ide, dan storyboard</h4>
                                <p>Studio animasi atau tim konten memakai model bahasa untuk meriset tren, merumuskan puluhan alternatif premis, dan menyusun kerangka cerita. Generator gambar kemudian dipakai untuk membuat moodboard dan storyboard kasar.</p>

                                <h4 style={{ marginTop: '16px' }}>Contoh konkret 2 (produksi): aset visual dan penyuntingan otomatis</h4>
                                <p>Desainer dan editor memakai fitur AI seperti penghapusan latar otomatis, generative fill, pelacakan objek untuk rotoscoping, serta pembuatan subtitle otomatis.</p>

                                <div className="ai-statement-box" style={{ marginTop: '20px' }}>
                                    <div className="ai-statement-title"><span>💡</span> Catatan Kritis</div>
                                    <p>Efisiensi tidak otomatis berarti kualitas. Hasil AI tetap perlu ditinjau (kurasi, pengecekan fakta, konsistensi gaya).</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section 2 */}
                    {activeSection === 's2' && (
                        <div>
                            <h3>2. Generative AI dan profesi desainer grafis</h3>
                            <p className="soal">Analisislah dampak Generative AI (Midjourney, DALL-E, Adobe Firefly) terhadap profesi desainer grafis. Apakah AI menggantikan desainer atau menjadi alat bantu?</p>

                            <div className="content-box">
                                <p><strong>Posisi argumen:</strong> AI cenderung <strong>menggantikan sebagian tugas</strong>, bukan seluruh profesi. Desainer yang memadukan strategi dan penguasaan AI justru semakin bernilai.</p>

                                <div className="table-container" style={{ marginTop: '20px', overflowX: 'auto' }}>
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th>Yang dapat dikerjakan AI</th>
                                                <th>Yang tetap membutuhkan desainer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Membuat banyak variasi visual</td>
                                                <td>Memahami brief, audiens, dan tujuan bisnis</td>
                                            </tr>
                                            <tr>
                                                <td>Retouch, hapus latar, perluas gambar</td>
                                                <td>Menentukan identitas dan konsistensi merek</td>
                                            </tr>
                                            <tr>
                                                <td>Menghasilkan draf komposisi</td>
                                                <td>Memilih, mengkurasi, dan menyempurnakan hasil</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section 3 */}
                    {activeSection === 's3' && (
                        <div>
                            <h3>3. Konten audio-visual dan personalisasi</h3>
                            <p className="soal">a. Bagaimana teknologi AI mengubah cara kreator memproduksi konten audio-visual? b. Jelaskan konsep &quot;Personalisasi Konten&quot;.</p>

                            <div className="content-box">
                                <h4 style={{ marginTop: '0' }}>a. Perubahan Cara Produksi Audio-Visual</h4>
                                <div className="table-container" style={{ marginTop: '12px', overflowX: 'auto' }}>
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th>Teknologi</th>
                                                <th>Cara Lama</th>
                                                <th>Dengan AI</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Rotoscoping</strong></td>
                                                <td>Manual frame demi frame</td>
                                                <td>Segmentasi &amp; pelacakan objek otomatis</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Lip-sync &amp; Dubbing</strong></td>
                                                <td>Rekam ulang manual</td>
                                                <td>Disesuaikan otomatis ke banyak bahasa</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 style={{ marginTop: '20px' }}>b. Konsep Personalisasi Konten</h4>
                                <p>Penyesuaian pesan, visual, penawaran, dan waktu penyampaian untuk setiap individu atau segmen kecil berdasarkan data perilaku, minat, dan riwayat interaksi secara real-time.</p>
                            </div>
                        </div>
                    )}

                    {/* Section 4 */}
                    {activeSection === 's4' && (
                        <div>
                            <h3>4. Etika, hak cipta, dan deepfake</h3>
                            <p className="soal">a. Jelaskan dilema hak cipta antara kreator asli dan pengembang AI. b. Bagaimana rancangan regulasi dan etika kerja disusun?</p>

                            <div className="content-box">
                                <h4 style={{ marginTop: '0' }}>a. Dilema Hak Cipta</h4>
                                <div className="table-container" style={{ marginTop: '12px', overflowX: 'auto' }}>
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                <th>Sudut Pandang Kreator Asli</th>
                                                <th>Sudut Pandang Pengembang AI</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Karya dipakai melatih model tanpa izin/kompensasi.</td>
                                                <td>Pelatihan adalah pemakaian transformatif/wajar.</td>
                                            </tr>
                                            <tr>
                                                <td>Model dapat meniru gaya seniman tertentu.</td>
                                                <td>Gaya (style) umumnya bukan objek hak cipta.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 style={{ marginTop: '20px' }}>b. Rancangan Regulasi Berkelanjutan</h4>
                                <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li>Transparansi dataset pelatihan AI.</li>
                                    <li>Mekanisme izin, opt-out, dan kompensasi yang adil.</li>
                                    <li>Pelabelan konten AI (watermark/provenance).</li>
                                    <li>Perlindungan tegas terhadap penyalahgunaan deepfake.</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {/* Section 5 */}
                    {activeSection === 's5' && (
                        <div>
                            <h3>5. Strategi kreator di era AI</h3>
                            <p className="soal">Susun strategi persiapan pelaku industri kreatif dan skill yang perlu dikembangkan selain prompt AI.</p>

                            <div className="content-box">
                                <h4 style={{ marginTop: '0' }}>Strategi 5 Langkah Utama</h4>
                                <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li><strong>Petakan pekerjaan sendiri:</strong> Pisahkan tugas repetitif dari tugas bernilai tinggi.</li>
                                    <li><strong>Bangun toolkit AI:</strong> Kuasai alat-alat terpilih untuk teks, gambar, dan video.</li>
                                    <li><strong>Kembangkan suara khas:</strong> Tonjolkan ciri khas pribadi yang tidak bisa ditiru AI.</li>
                                    <li><strong>Praktik bertanggung jawab:</strong> Verifikasi fakta dan jujur ungkapkan penggunaan AI.</li>
                                    <li><strong>Eksperimen berkelanjutan:</strong> Rutin mencoba teknik dan alat baru.</li>
                                </ol>

                                <h4 style={{ marginTop: '20px' }}>Skill Penting Selain Prompt AI</h4>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li>Berpikir kritis dan kurasi konten</li>
                                    <li>Storytelling dan pengembangan konsep orisinal</li>
                                    <li>Art direction dan selera estetika</li>
                                    <li>Literasi data dan pemahaman bisnis pemasaran</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Section 6 */}
                    {activeSection === 's6' && (
                        <div>
                            <h3>6. Studi kasus: penulisan skenario dan copywriting</h3>
                            <p className="soal">Perbedaan proses penulisan manual vs AI, serta keterbatasan AI dalam konteks budaya lokal dan emosi manusia.</p>

                            <div className="content-box">
                                <h4 style={{ marginTop: '0' }}>Keterbatasan AI pada Budaya Lokal &amp; Emosi</h4>
                                <p>AI sering kali gagal menangkap nuansa bahasa daerah, idiom, humor lokal, norma tabu/SARA, serta kedalaman emosi otentik yang hanya lahir dari pengalaman hidup manusia nyata.</p>
                                <p><strong>Rekomendasi:</strong> Gunakan AI sebagai mitra draf awal, lalu lakukan penyuntingan mendalam, libatkan kurator/penutur lokal, dan pastikan keputusan akhir berada di tangan manusia.</p>
                            </div>
                        </div>
                    )}

                    {/* Section Referensi */}
                    {activeSection === 'ref' && (
                        <div>
                            <h3>Referensi</h3>
                            <div className="content-box">
                                <ol className="refs-list">
                                    <li>Howkins, J. (2001). <em>The Creative Economy: How People Make Money from Ideas</em>. Penguin Books.</li>
                                    <li>Kementerian Pariwisata dan Ekonomi Kreatif. Data dan publikasi ekonomi kreatif. <em>kemenparekraf.go.id</em>.</li>
                                    <li>Republik Indonesia. Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta.</li>
                                    <li>Republik Indonesia. Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.</li>
                                    <li>Kementerian Komunikasi dan Informatika RI (2023). Surat Edaran Menteri Kominfo No. 9 Tahun 2023 tentang Etika AI.</li>
                                    <li>UNESCO (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>.</li>
                                </ol>

                                <div className="ai-statement-box" style={{ marginTop: '20px' }}>
                                    <div className="ai-statement-title"><span>💡</span> Pernyataan Penggunaan AI</div>
                                    <p>
                                        Sebagian draf jawaban ini dibantu oleh kecerdasan buatan (AI) dan telah ditinjau, dilengkapi, serta diperkuat secara mendalam dengan analisis dan pemikiran penulis sendiri.
                                    </p>
                                </div>
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