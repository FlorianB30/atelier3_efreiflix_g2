import React, { useState } from 'react';
// import FightClub from '../images/Fightclub.webp';
// import Inception from '../images/Inception.webp';
// import Interstellar from '../images/Interstellar.webp';
// import TheDarkKnight from '../images/TheDarkKnight.webp';

const movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Science-Fiction', image: '/images/Inception.webp' },
  { id: 2, title: 'Interstellar', year: 2014, genre: 'Science-Fiction', image: '/images/Interstellar.webp' },
  { id: 3, title: 'The Dark Knight', year: 2008, genre: 'Action', image:'/images/TheDarkKnight.webp'  },
  { id: 4, title: 'Fight Club', year: 1999, genre: 'Drama', image:  '/images/Fightclub.webp' },
];

const Catalogue = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un film..."
        className="mb-6 p-3 border border-gray-300 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grille de films */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies
          .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
          .map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-white text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-400 text-sm">{movie.year} • {movie.genre}</p>
                <a
                  href={`/fiche-produit/${movie.id}`}
                  className="mt-3 bg-red-600 text-white px-4 py-2 rounded block text-center hover:bg-red-700"
                >
                  Voir la fiche
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Catalogue;
