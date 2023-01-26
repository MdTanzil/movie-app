import React from 'react'
import Hero from './Hero'

const Search = ({ searchText, searchResult }) => {
  const title = `You are searching for ${searchText}`;
  return (
    <div>
      <Hero header="Search Page" text={title} />
    </div>
  );
};

export default Search
