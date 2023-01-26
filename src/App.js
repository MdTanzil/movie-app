import './App.css';
import { Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from "./components/About";
import Search from "./components/Search";
import { useState } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState([])
  const[searchText, setSearchText] =  useState('')



  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <Search searchText={searchText} searchResult={searchResult} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
