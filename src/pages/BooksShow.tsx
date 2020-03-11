import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ApiClient from '../utils/ApiClient';
import BookShow from '../components/Book/BookShow';

const BooksShow: React.FC = () => {

  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    ApiClient.get(`/books/${id}`)
      .then(({data}) => {
        setBook(data);
      })
    ;
  }, []);

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
