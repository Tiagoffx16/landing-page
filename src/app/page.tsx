import Contacts from "./components/contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills";


export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contacts/>
    </main>
  );
}