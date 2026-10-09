import React from 'react';
import Tugas1DigitalKreatif from '../tasks/Tugas1DigitalKreatif';
import Tugas1Kelompok from '../tasks/Tugas1Kelompok';

export default function TaskViewer({ taskId, onBack }) {
  // Fungsi untuk merender komponen tugas berdasarkan ID yang dipilih
  const renderSelectedTask = () => {
    switch (taskId) {
      case 'tugas-1':
        return <Tugas1DigitalKreatif onBack={onBack} />; // <-- TAMBAHKAN onBack={onBack} DI SINI!
      
      // Contoh jika nanti ada tugas kedua:
      case 'tugas-2':
         return <Tugas1Kelompok onBack={onBack} />;

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