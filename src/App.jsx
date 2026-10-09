import React, { useState } from 'react';
import HomeDashboard from './assets/pages/HomeDashboard';
import TaskViewer from './assets/pages/TaskViewer';
import './App.css';

export default function App() {
  const [currentTaskId, setCurrentTaskId] = useState(null);

  return (
    <div className="wrap">
      {/* Jika belum memilih tugas, tampilkan Dashboard Utama */}
      {currentTaskId === null ? (
        <HomeDashboard onSelectTask={(id) => setCurrentTaskId(id)} />
      ) : (
        /* Jika sudah memilih tugas, tampilkan TaskViewer dengan ID tugas tersebut */
        <TaskViewer taskId={currentTaskId} onBack={() => setCurrentTaskId(null)} />
      )}
    </div>
  );
}