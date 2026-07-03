import React, { useState } from 'react';
import { Navbar } from './components/Navbar';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="min-h-screen bg-background">
      <Navbar search={search} setSearch={setSearch} onOpenAddModal={() => alert('open modal')} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white">Welcome to CineTrack</h1>
      </main>
    </div>
  );
}

export default App;
