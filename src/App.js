import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from "./components/About";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
