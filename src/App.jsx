import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Accounts from './Components/Accounts';
import Loans from './Components/Loans';
import Footer from './Components/Footer';
import OpenAccount from './Components/OpenAccount';
import './App.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState('home'); // "home" | "open-account"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goHome = () => {
    setPage('home');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="app">
      <Navbar
        scrolled={scrolled}
        onOpenAccount={() => setPage('open-account')}
        onHome={goHome}
      />
      {page === 'home' ? (
        <main>
          <Hero onOpenAccount={() => setPage('open-account')} />
          <Accounts />
          <Loans />
          <Footer />
        </main>
      ) : (
        <OpenAccount onBack={goHome} />
      )}
    </div>
  );
}
