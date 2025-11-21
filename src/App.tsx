import Hero from './components/Hero';
import About from './components/About';
import PopularMenu from './components/PopularMenu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <PopularMenu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
