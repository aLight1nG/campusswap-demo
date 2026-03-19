import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import DataValidation from './components/DataValidation';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <Features />
      <DataValidation />
      <InteractiveDemo />
      <Footer />
    </div>
  );
}
