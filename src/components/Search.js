import React from 'react'
import Card from './Card';
import Hero from './Hero'

const Search = ({ searchText, searchResult }) => {
  const title = `You are searching for ${searchText}`;
  const resultHtml = searchResult.map((obj,i)=> {
    
    return (
      <Card movie={obj} key ={i} />
    );
  })
  return (
    <div>
      <Hero header="Search Page" text={title} />
      <div className="container">
        <div className="row">{resultHtml}</div>
      </div>
    </div>
  );
};

export default Search
