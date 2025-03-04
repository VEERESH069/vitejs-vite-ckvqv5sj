  import React from 'react';

  const BookCard = ({book}) => {
    return (
      <div >
        <img src={book.image} alt={book.name} className="book-image" />
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author}</p>
      </div>
    );
  };

  export default BookCard;
