import React from 'react';
import BookList from '../common/BookList';
import book_stack from "../../assets/image/book_stack.png";
import NoDataFound from './NoDataFound';
import useLocalStorage from '../../Hooks/useLocalStorage';

const MyBookShelf = () => {
  const { getLocalData } = useLocalStorage();
  let currentItemArray = getLocalData("booksList");
 
  return (
    <div className='booksComponent'>
      {currentItemArray.length > 0 &&
        <BookList
          data={currentItemArray}
          hideAddBtn
        />
      }
      {!currentItemArray.length > 0 && <NoDataFound imageURL={book_stack} message="No added books to shelf, please add" />}
    </div>
  )
}

export default MyBookShelf;
