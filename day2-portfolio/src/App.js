import { Header } from "./Navbar/Navbar";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./projects/projects";
import ContactForm from "./Contact/Contact";
import Footer from "./Footer/Footer";

export const App = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};
