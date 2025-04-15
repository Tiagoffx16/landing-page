import Contacts from "./components/contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import About from "./components/Aboutme"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts/>
    </main>
  );
}
// import Cadastro from "./components/Cadastro"
