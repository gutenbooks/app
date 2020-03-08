import React from 'react';
import { useParams } from 'react-router-dom';

import BookShow from '../components/Book/BookShow';

import books from '../mocks/books';

const BooksShow: React.FC = () => {

  const { id } = useParams();

  if (!id) {
    return <h1>404</h1>;
  }

  const book = books.find(book => book.id === parseInt(id, 10))

  if (!book) {
    return <h1>404</h1>;
  }

  return (
    <div className="container mt-4">
      <BookShow book={book} />
    </div>
  );
}

export default BooksShow;
