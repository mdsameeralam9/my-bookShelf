import React from 'react';
import { IoSearch } from "react-icons/io5";
import { useBooksData } from '../../contexts/BooksContext';

const Search = () => {
  const { setQuery, query } = useBooksData()
  return (
    <div className='searchComponent'>
      <IoSearch />
      <input type="text" value={query} placeholder='search book by title or name' onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default Search;
