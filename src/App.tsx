import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Batches from './components/Batches';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Facilities from './components/Facilities';
import StudyMaterial from './components/StudyMaterial';
import TestSeries from './components/TestSeries';
import Results from './components/Results';
import Gallery from './components/Gallery';
import AdmissionForm from './components/AdmissionForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body bg-white overflow-x-hidden w-full min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <Batches />
        <Courses />
        <Teachers />
        <Facilities />
        <StudyMaterial />
        <TestSeries />
        <Results />
        <Gallery />
        <AdmissionForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
