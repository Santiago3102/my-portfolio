import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Home = () => {
  return (
    <>
    
      <main>
      <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
