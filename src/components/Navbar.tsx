import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Batches', href: '#batches' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Study Material', href: '#study-material' },
  { label: 'Test Series', href: '#test-series' },
  { label: 'Results', href: '#results' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    } else {
      navigate('/' + href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: (scrolled || location.pathname !== '/') ? 0 : 36 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`left-0 right-0 z-40 transition-all duration-300 w-full fixed top-0 ${scrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <img
              src="/Essay-on-Aryabhata.jpg"
              alt="Aryabhata"
              className="w-10 h-10 rounded-full object-cover border-2 border-white/30 group-hover:border-accent-400 transition"
            />
            <span className={`font-heading font-bold text-lg transition ${scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
              }`}>
              Aryabhata
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition hover:bg-white/10 ${scrolled || location.pathname !== '/'
                  ? 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                  : 'text-white/85 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/enroll"
              className="ml-2 px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold rounded-full hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all uppercase tracking-wider"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden text-2xl transition ${scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}
            aria-label="Open menu"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-2xl p-6 flex flex-col lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-2xl text-gray-700 mb-6"
                aria-label="Close menu"
              >
                <HiX />
              </button>
              <div className="flex flex-col gap-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-primary-50 hover:text-primary-700 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <Link
                to="/enroll"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center font-semibold rounded-full"
              >
                Enroll Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
