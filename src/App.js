import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import Space from "./components/Space";

import Space2 from "./components/Space2";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Space2 />
      
      <About />
     <Space />
      <Portfolio />
      <Space />
      <Experience />
      <Space />
      <Contact />
      <Space />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
