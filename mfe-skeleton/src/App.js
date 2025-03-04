// src/App.js
import React, { useState, Suspense } from 'react';
import Catalogue from './components/Catalogue';

//const Catalogue = React.lazy(() => import('catalogue/Catalogue'));
//const Catalogue = React.lazy(() => import('catalogue/Catalogue'));

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Barre de navigation */}
      <header className="bg-black p-6 text-center">
        <h1 className="text-4xl font-bold">EfreiFlix</h1>
      </header>
      <Suspense fallback={<div>Chargement du catalogue...</div>}>
        <Catalogue />
      {/* Affichage du catalogue de films */}
      </Suspense>
    </div>
  );
}

export default App;
