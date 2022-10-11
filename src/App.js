import Header from "./assets/components/Header";
import Project from "./assets/components/Project";
import Footer from "./assets/components/Footer";
import background from './assets/images/bg.png'
import Contact from "./assets/components/Contact";
import About from "./assets/components/About";
import Resume from "./assets/components/Resume";

function App() {
  return (
    <>
      <Header></Header>
      <section className="welcome mt-5" style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition: "bottom"}} >
      </section>
        <About></About>
        <Project></Project>
      <Resume></Resume>
        <Contact />
      <Footer></Footer>
    </>
  );
}

export default App;
