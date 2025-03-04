import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const Ariane = React.lazy(() => import('ariane/Ariane'));

const App = () => {

  const nav = () => {
    const pushAriane = new CustomEvent('ariane-push', {
      detail: 'test'
    });

    window.dispatchEvent(pushAriane);
  }

  const returnNav = () => {
    const pathAriane = new CustomEvent('ariane-pop', {});

    window.dispatchEvent(pathAriane);
  }

  const navLink = () => {
    const pathAriane = new CustomEvent('ariane-path', { detail: ['Efreiflix', 'Accueil'] });

    window.dispatchEvent(pathAriane);
  }

  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <Header />
      </Suspense>

      <main style={{ padding: '2rem' }}>
        <h2>Bienvenue sur Efreiflix</h2>
        <p>Contenu principal de l'application...</p>

        <Suspense fallback={<div>Chargement du skeleton...</div>}>
          <Ariane />
        </Suspense>

        <button onClick={nav}>aller</button>
        <button onClick={returnNav}>retour</button>
        <button onClick={navLink}>lien</button>
      </main>
    </div>
  );
};

export default App;