import { Header } from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./projects/projects";
import ContactForm from "./Contact/Contact";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
};
