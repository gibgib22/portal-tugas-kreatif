import React, { useState } from 'react';
import { TASKS_DATA } from '../data/tasksList';

export default function HomeDashboard({ onSelectTask }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = TASKS_DATA.filter((task) => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8 antialiased">
      <div className="max-w-[1000px] mx-auto pb-16">
        
        {/* Header Dashboard dengan Aksen Elegan */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3 tracking-wide uppercase shadow-xs">
            ✨ Portal Akademik Interaktif
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Portal Tugas Digital
          </h1>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Pilih dan akses daftar penugasan mata kuliah Digital Kreatif dengan mudah dan cepat.
          </p>
        </header>

        {/* Card Utama Pembungkus Tabel */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-[24px] shadow-xl shadow-slate-200/50 overflow-hidden p-6 sm:p-8 transition-all">
          
          {/* Toolbar Atas: Info & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Daftar Penugasan</h2>
              <p className="text-xs text-slate-500 mt-0.5">Menampilkan seluruh modul tugas aktif</p>
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                🔍
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari judul tugas..."
                className="w-full sm:w-80 pl-11 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Tabel Modern */}
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-slate-600 uppercase font-bold text-[11px] tracking-wider border-b border-slate-200/60">
                  <th className="py-4 px-5 text-center w-16">No</th>
                  <th className="py-4 px-5">Judul Tugas</th>
                  <th className="py-4 px-5 text-center w-28">Pertemuan</th>
                  <th className="py-4 px-5 text-center w-40">Tipe Tugas</th>
                  <th className="py-4 px-5 text-center w-36">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task, index) => {
                    const isGroup = task.type?.toLowerCase().includes('kelompok');
                    
                    return (
                      <tr 
                        key={task.id} 
                        className="group hover:bg-blue-50/40 transition-colors duration-150"
                      >
                        {/* Kolom No */}
                        <td className="py-4 px-5 text-center font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </td>

                        {/* Kolom Judul & Deskripsi */}
                        <td className="py-4 px-5">
                          <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-0.5">
                            {task.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {task.description}
                          </div>
                        </td>

                        {/* Kolom Pertemuan */}
                        <td className="py-4 px-5 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs border border-blue-100">
                            {index + 1}
                          </span>
                        </td>

                        {/* Kolom Mark Tipe Tugas */}
                        <td className="py-4 px-5 text-center">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs ${
                            isGroup 
                              ? 'bg-amber-50 text-amber-700 border border-amber-200/80' 
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${isGroup ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                            {task.type || 'Individu'}
                          </span>
                        </td>

                        {/* Kolom Tombol Aksi */}
                        <td className="py-4 px-5 text-center">
                          <button
                            onClick={() => onSelectTask(task.id)}
                            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer active:scale-95"
                          >
                            <span>Buka Tugas</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="py-12 text-center text-slate-400 text-sm">
                      Tidak ada tugas yang cocok dengan pencarian Anda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Tabel Info */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 px-1">
            <span>Menampilkan {filteredTasks.length} dari {filteredTasks.length} penugasan aktif</span>
            <span className="font-semibold text-slate-600">Digital Kreatif &bull; SMT 7</span>
          </div>

        </div>
      </div>
    </div>
  );
}