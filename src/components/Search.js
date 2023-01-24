import React from 'react'
import Hero from './Hero'

const Search = ({ keyword, searchResult }) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResult, "are the search result");
  return (
    <div>
      <Hero header="Search Page" text={title} />
    </div>
  );
};

export default Search
