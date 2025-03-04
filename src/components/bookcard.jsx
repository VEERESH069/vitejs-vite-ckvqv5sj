import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2 className="bo-name">{book.name}</h2>
      <p className="bo-gen">{book.genre}</p>
      <p className="bo-auth">{book.author}</p>
    </div>
  );
};

export default BookCard;
