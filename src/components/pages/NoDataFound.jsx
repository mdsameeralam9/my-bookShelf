import React from 'react';

const NoDataFound = ({imageURL="", message=""}) => {
 
  return (
    <div className='noDataComponent'>
      <img src={imageURL} alt="nodatafound"/>
      <h2>{message}</h2>
    </div>
  )
}

export default NoDataFound;
