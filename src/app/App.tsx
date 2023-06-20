import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Service from '../components/sevice';
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
        </main>
      </div>
    </>
  );
}

export default App;