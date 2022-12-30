import About from "./components/About";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Portfolio from './components/Portfolio';
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footing from "./components/Footing";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio/>
      <Experience />
      <SocialLinks />
      <Contact />
      <Footing />
    </div>
  );
}

export default App;
