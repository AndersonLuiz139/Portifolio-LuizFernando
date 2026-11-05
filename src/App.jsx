import About from "./components/About/About.jsx";
import Areas from "./components/Areas/Areas.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Experience />
      </main>
    </>
  );
}
