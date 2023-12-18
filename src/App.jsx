import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import RepoPage from "./pages/repo/RepoPage";

function App() {

  return(
    <BrowserRouter>
      <Routes> {/* used to defined routes in app */}
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="/:owner/:name" element={<RepoPage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
