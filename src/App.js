import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if(searchText){
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=451f6d463aaaee10661aff8fe25140a7&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results);
        });

    }
    
  }, [searchText]);
  //TMDB  API KEY = 451f6d463aaaee10661aff8fe25140a7

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
