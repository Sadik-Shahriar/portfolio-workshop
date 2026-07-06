import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-page text-slate-800 font-body">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Academics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
