import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const Ariane = React.lazy(() => import('ariane/Ariane'));
const Catalogue = React.lazy(() => import('catalogue/Catalogue'));
const Skeleton = React.lazy(() => import('skeleton/Skeleton'));


const App = () => {
  const [showCatalogue, setShowCatalogue] = useState(false); // Ajout de l'état pour afficher ou masquer le catalogue

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
  const toggleCatalogue = () => {
    setShowCatalogue(prevState => !prevState); // Permet de basculer l'état du catalogue
  };

  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Chargement du catalogue...</div>}>
          <Catalogue />
        </Suspense>
      <Suspense fallback={<div>Chargement du skeleton...</div>}>
        <Ariane />
      </Suspense>

      {/* Bouton pour activer ou désactiver l'affichage de Catalogue */}
      <button onClick={toggleCatalogue}>Afficher/Masquer le Catalogue</button>

            {/* Affichage conditionnel du Catalogue */}
            {showCatalogue && (
        <Suspense fallback={<div>Chargement du catalogue...</div>}>
          <Catalogue />
        </Suspense>
      )}



      <main style={{ padding: '2rem' }}>
        <h2>Bienvenue sur Efreiflix</h2>
        <p>Contenu principal de l'application...</p>


        <button onClick={nav}>aller</button>
        <button onClick={returnNav}>retour</button>
        <button onClick={navLink}>lien</button>
      </main>
    </div>
  );
};

export default App;