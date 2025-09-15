// Example fix in App.js
import './App.css';
import Navbar from './components/Navbar';
import MainBackground from './components/MainBackground';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experince';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#212121]">
      <Navbar />
      <MainBackground />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;