import { useState } from "react";
import React from 'react';

function BookItem({ book }){
  const { volumeInfo } = book;
  return (
    <div className="book-item">
      <img
        src={volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=No+Image'}
        alt={volumeInfo.title}
      />
      <div className="book-info">
        <h3>{volumeInfo.title}</h3>
        <p>{volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No authors available'}</p>
      </div>
    </div>
  );
};

export default BookItem;
