import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Accounts', href: '#accounts' },
  { label: 'Loans', href: '#loans' },
  { label: 'Investments', href: '#' },
  { label: 'Support', href: '#' },
];

export default function Navbar({ scrolled, onOpenAccount, onHome }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenAccount = (e) => {
    e.preventDefault();
    // send registration info to backend (Lambda -> DynamoDB)
    setMenuOpen(false);
    onOpenAccount?.();
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="#"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            onHome?.();
          }}
        >
          <span className="navbar__logo-mark">N</span>
          <span className="navbar__logo-text">
            Not<em>Nat</em>West
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a href="#" className="navbar__signin">
            Sign In
          </a>
          <a
            href="#"
            className="btn-primary navbar__cta"
            onClick={handleOpenAccount}
          >
            Open Account
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__drawer-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="navbar__drawer-actions">
          <a href="#" className="btn-ghost">
            Sign In
          </a>
          <a href="#" className="btn-primary" onClick={handleOpenAccount}>
            Open Account
          </a>
        </div>
      </div>
    </header>
  );
}
