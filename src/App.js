import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import ProjectSection from './Pages/ProjectSection';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Preloader from './Pages/Preloader';

function App() {
  return (
    <div data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
      <Header/>
      <main className="main">
      <Home/>
      <About/>
      <ProjectSection/>
      <Experience/>
      <Contact/>
      </main>
      <Preloader/>
    </div>
  );
}

export default App;
