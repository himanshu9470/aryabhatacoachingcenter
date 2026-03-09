import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import About from './components/About';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <About />
        <Courses />
        <Facilities />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
