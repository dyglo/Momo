import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // Only push state if it's a different path
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    
    // Scroll to top on page change (not hash change)
    if (!path.includes('#')) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-mammoth-white min-h-screen text-mammoth-black selection:bg-mammoth-yellow selection:text-black">
      <Navigation currentPath={currentPath} onNavigate={navigate} />
      
      {currentPath === '/about' ? (
        <About key="about" />
      ) : currentPath === '/services' ? (
        <ServicesPage key="services" />
      ) : (
        <Home key="home" onNavigate={navigate} />
      )}

      <Footer onNavigate={navigate} />
    </main>
  );
};

export default App;