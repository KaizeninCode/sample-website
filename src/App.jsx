import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Home from "./sections/Home";

export default function App() {

  return (
    <main>
      <Header />
      <section className="w-full min-h-screen p-1">
        <Home/>
      </section>
      <section className="w-full min-h-screen p-1">
        <About/>
      </section>
      <section className="w-full min-h-screen p-1">
        <Gallery/>
      </section>
      <section className="w-full min-h-screen p-1">
        <Contact/>
      </section>
      <Footer/>
    </main>
  )
}