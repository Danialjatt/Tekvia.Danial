import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseTekvida from './components/WhyChooseTekvida';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Disciplines from './components/Disciplines';
import FAQ from './components/FAQ';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <div id="why-choose-section">
        <WhyChooseTekvida />
      </div>
      <Testimonials />
      <Disciplines />
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
