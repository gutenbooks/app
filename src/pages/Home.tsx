import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { stringify } from 'query-string';

import ApiClient from '../utils/ApiClient';
import Book from '../models/Book';
import Contributor from '../models/Contributor';
import SearchFormInterface from '../models/SearchFormInterface'
import SearchControl from '../components/Search/SearchControl';
import BookCarousel from '../components/Book/BookCarousel';
import BookItemList from '../components/Book/BookItemList';
import Loader from '../components/Loader';
import ClickableBook from '../types/ClickableBook';
import ClickableContributor from '../types/ClickableContributor';
import OnSearchCallback from '../types/OnSearchCallback';
import Search from './Search';

import taxonomies from '../mocks/taxonomies';

const Home: React.FC = () => {
  const [popular, setPopular] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true)
    ApiClient.get('/books/')
      .then(({data: { results }}) => {
        setPopular(results);
        setLoading(false);
      })
    ;
  }, [])

  const onClickBook: ClickableBook = (book: Book) => {
    console.log('clicked book', book);
    history.push(`/books/${book.id}`);
  };

  const onClickAuthor: ClickableContributor = (contributor: Contributor) => {
    console.log('clicked contributor', contributor);
    // history.push(`/contributor/${contributor.id}`);
  };

  const onSearch: OnSearchCallback = (form: SearchFormInterface) => {
    if (form.query) {
      const params = stringify(form);
      console.log(`/search/?${params}`)
      history.push(`/search/?${params}`);
    }
  };

  return (
    <div className="container mt-3">
      <SearchControl
        taxonomies={taxonomies}
        onSearch={onSearch}
      />

      <div className="mt-3">
        <Loader isLoading={loading}>
          <BookCarousel
            title="Popular"
            books={popular}
            onClickBook={onClickBook}
            onClickAuthor={onClickAuthor}
          />
        </Loader>
      </div>
    </div>
  );
}

export default Home;
