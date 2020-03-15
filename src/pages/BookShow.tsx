import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ApiClient from '../utils/ApiClient';
import BookShow from '../components/Book/BookShow';
import Loader from '../components/Loader/Loader';

const BookShowPage: React.FC = () => {

  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    ApiClient.get(`/books/${id}`)
      .then(({data}) => {
        setBook(data);
        setLoading(false);
      })
    ;
  }, [id]);

  return (
    <div className="container">
      <Loader isLoading={loading}>
        <BookShow book={book} />
      </Loader>
    </div>
  );
}

export default BookShowPage;
