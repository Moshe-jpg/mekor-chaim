import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import About from "./components/About"; 
import Contact from "./components/Contact";
// import Donate from "./components/Donate";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
