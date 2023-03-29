import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
// import Donate from "./components/Donate";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <LandingPage />
        <About />
        {/* <Donate /> */}
        {/* <Contact /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
