import React from 'react';
import { toast } from 'react-toastify';
import Card from './Card';
import NO_IMAGE from "../../assets/image/no_cover_image.jpg";
import useLocalStorage from '../../Hooks/useLocalStorage';

const BookList = ({ data=[], hideAddBtn=false }) => {
    const { setLocalData } = useLocalStorage();
    const notifySuccess = () => toast.success("Books Added successfully");
    const notifyError = () => toast.error("This Book already in shelf");

    //addCardToShelf
    const addCardToShelf = (book) => {
        let isError = setLocalData("booksList", book);
        
        if(isError){
            notifyError()
        } else {
            notifySuccess()
        }
    }

    return (
        <div className='booksList'>
            {data?.map(item => {
               const { title="", subtitle="", ratings_average ="", author_name=[], edition_count="", cover_i="", key=""  } = item;
               const authorName = author_name?.[0];

                return (
                    <Card 
                     key={`${cover_i}/${key}`}
                     title={title}
                     subtitle={subtitle}
                     authorName={authorName}
                     imageURL={NO_IMAGE}
                     rating={ratings_average}
                     editionCount={edition_count}
                     addCardToShelf={() => addCardToShelf(item)}
                     hideAddBtn={hideAddBtn}
                    />
                )
            })}
        </div>
    )
}

export default BookList;