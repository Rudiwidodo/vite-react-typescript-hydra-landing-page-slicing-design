// components
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Join from '../components/join';
import Navbar from '../components/navbar';
import Process from '../components/process';
import Service from '../components/sevice';
import Tech from '../components/tech';

// external css
import './App.css';

function App() {
  return (
    <>
      <div
        className={'max-sm:px-5 max-sm:mx-0 container mx-auto overflow-hidden'}
      >
        <Navbar />
        <main>
          <Hero />
          <Contact />
          <About />
          <Service />
          <Tech />
          <Process />
          <Join />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
