import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Journey from './components/Journey';
import Features from './components/Features';
import Achievements from './components/Achievements';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-secondary selection:text-primary scroll-smooth">
      <TopBar />
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        <Hero />
        <Courses />
        <Journey />
        <Features />
        <Achievements />
        <AboutSection />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
