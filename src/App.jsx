import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Teaching from "./pages/teaching/Teaching";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {

  return( 
    <>
      <Navbar />
      <BrowserRouter>
        <Routes> {/* used to defined routes in app */}
          <Route path="/" element={<Home />}/> 
          <Route path="/about" element={<About />}/> 
          <Route path="/teaching" element={<Teaching />}/> 
          <Route path="/contact" element={<Contact />}/> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
