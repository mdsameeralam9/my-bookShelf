import React from 'react';
import { TiStar } from "react-icons/ti";

const Card = ({ title="", subtitle="", authorName="", imageURL="", rating="", editionCount="", addCardToShelf=()=>{}, hideAddBtn=false }) => {
  let ratingAverage = parseFloat(rating)

  return (
    <div className='card'>
      {!isNaN(ratingAverage) &&
        <div className='starRating'>
          <span>{ratingAverage?.toFixed(1)}</span>
          <span><TiStar /></span>
        </div>
      }
       <div className='cardTop'>
         <img src={imageURL}  alt={title} />
       </div>
       <div className='cardBottom'>
        <div className='cardTitle'>
           <span className='title'>{title}</span>
           <span className='authorInfo'>{authorName}</span>
           <span className='authorInfo'><b>Edition Count:</b> {editionCount}</span>
        </div>
       </div>
       {!hideAddBtn &&
         <button className='btn' onClick={addCardToShelf}>Add to Bookshelf</button>
       }
    </div>
  )
}

export default Card;







