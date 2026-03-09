import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <a href="#home" className="navbar-logo" onClick={() => handleClick('#home')}>
            <div className="navbar-logo-icon">A</div>
            <span className="navbar-logo-text">Aryabhata</span>
          </a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary navbar-cta"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
            >
              Enroll Now
            </a>
          </div>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <HiX />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            handleClick('#contact');
          }}
        >
          Enroll Now
        </a>
      </div>
    </>
  );
}
