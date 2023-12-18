import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {

  return(
    <BrowserRouter>
      <Routes> {/* used to defined routes in app */}
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
