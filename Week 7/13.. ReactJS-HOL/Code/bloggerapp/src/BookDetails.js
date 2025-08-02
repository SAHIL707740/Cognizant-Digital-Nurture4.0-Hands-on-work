import React from 'react';

function BookDetails() {
  const books = [
    { title: 'React in Action', author: 'Mark T.', price: 499 },
    { title: 'Learning JavaScript', author: 'Ethan Brown', price: 399 },
  ];

  return (
    <div>
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <p><strong>{book.title}</strong> by {book.author} - ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
