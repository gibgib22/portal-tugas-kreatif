import React from 'react';
import Tugas1DigitalKreatif from '../tasks/Tugas1DigitalKreatif';
// Import tugas-tugas lain di sini jika nanti sudah ada
// import Tugas2Berikutnya from '../tasks/Tugas2Berikutnya';

export default function TaskViewer({ taskId, onBack }) {
  // Fungsi untuk merender komponen tugas berdasarkan ID yang dipilih
  const renderSelectedTask = () => {
    switch (taskId) {
      case 'tugas-1':
        return <Tugas1DigitalKreatif onBack={onBack} />; // <-- TAMBAHKAN onBack={onBack} DI SINI!
      
      // Contoh jika nanti ada tugas kedua:
      // case 'tugas-2':
      //   return <Tugas2Berikutnya onBack={onBack} />;

      default:
        return (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Maaf, konten tugas tidak ditemukan.</p>
          </div>
        );
    }
  };

  return (
    <div className="task-viewer-container">
      {/* Memuat komponen tugas yang sesuai */}
      {renderSelectedTask()}
    </div>
  );
}