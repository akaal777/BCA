
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import { STUDY_RESOURCES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main>
        <Hero />
        
        <Section 
          id="playlists" 
          title="Curated Playlists" 
          icon="📺" 
          items={STUDY_RESOURCES.playlists}
          buttonText="View Playlist"
        />

        <Section 
          id="oneshot" 
          title="One Shot Videos" 
          icon="⚡" 
          items={STUDY_RESOURCES.oneshots}
          buttonText="Watch Now"
        />

        <Section 
          id="resources" 
          title="Notes & Projects" 
          icon="📝" 
          items={STUDY_RESOURCES.resources}
        />

        <Section 
          id="theory" 
          title="Core Theory" 
          icon="🧠" 
          items={STUDY_RESOURCES.theory}
          buttonText="Read Article"
        />

        <Section 
          id="books" 
          title="Recommended Books" 
          icon="📚" 
          items={STUDY_RESOURCES.books}
          buttonText="Get Book"
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
