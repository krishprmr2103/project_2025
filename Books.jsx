import React from "react";


const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel set in the 1920s that explores themes of wealth, love, and the American Dream."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A story about racial injustice and moral growth in the American South."
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel exploring surveillance, totalitarianism, and individual freedom."
  }
];

const Book = () => {
  return (
    <div className="book-page">
      <h1 className="book-title">Book List</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
