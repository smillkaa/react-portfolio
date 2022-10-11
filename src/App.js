import Header from "./assets/components/Header";
import Project from "./assets/components/Project";
import Footer from "./assets/components/Footer";
import background from './assets/images/bg.png'
import Contact from "./assets/components/Contact";
import About from "./assets/components/About";

function App() {
  return (
    <>
      <Header></Header>
      <section className="welcome mt-5" style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition: "bottom"}} >
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <Project></Project>
      </section>
      <section>
        <Contact />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
