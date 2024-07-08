import React from 'react';
import BookList from '../common/BookList';
import { useBooksData } from '../../contexts/BooksContext';
import Loader from './Loader';
import NoDataFound from './NoDataFound';
import No_Data_Found from "../../assets/image/search_not_found.avif";
import ErrorPage from './Error';
import { isArrayWithLength } from '../../util';

const Books = () => {
  const { data=[], loading=false, error=false } = useBooksData();

  return (
    <div className='booksComponent'>
      {loading && <Loader />}
      {!loading && error && <ErrorPage /> }
      {!loading && !error && !isArrayWithLength(data) && <NoDataFound imageURL={No_Data_Found} />}
      {!loading && !error && isArrayWithLength(data) && <BookList data={data} />}
    </div>
  )
}

export default Books;
