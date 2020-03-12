import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { parseUrl } from 'query-string';

import ApiClient from '../utils/ApiClient';
import Book from '../models/Book';
import Contributor from '../models/Contributor';
import SearchFormInterface from '../models/SearchFormInterface'
import BookItemList from '../components/Book/BookItemList';
import SearchControl from '../components/Search/SearchControl';
import Loader from '../components/Loader';
import ClickableBook from '../types/ClickableBook';
import ClickableContributor from '../types/ClickableContributor';
import OnSearchCallback from '../types/OnSearchCallback';

import taxonomies from '../mocks/taxonomies';

const Search: React.FC = () => {

  const result = parseUrl(window.location.search);
  const { query: q, taxons: t } = result.query;
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(q);
  const [taxons, setTaxons] = useState(t);
  const [loading, setLoading] = useState(false);

  if (!query) {
    console.log('No query specified, redirecting to home.');
    history.push(`/`);
  }

  const onClickBook: ClickableBook = (book: Book) => {
    console.log('clicked book', book);
    // history.push(`/books/${book.id}`);
  };
  const onClickAuthor: ClickableContributor = (contributor: Contributor) => {
    console.log('clicked contributor', contributor);
    // history.push(`/contributor/${contributor.id}`);
  };

  const onSearch: OnSearchCallback = (form: SearchFormInterface) => {
    if (form.taxons) {
      setTaxons(form.taxons.map((t) => t.toString()));
    }
    setQuery(form.query);
  };

  useEffect(() => {
    setLoading(true);
    ApiClient.get(`/books/?search=${encodeURIComponent(query as string)}`)
      .then(({data}) => {
        console.log(data);
        setBooks(data.results);
        setLoading(false);
      })
    ;
  }, [query, taxons])

  if (!query && books.length == 0) {
    return <h1>nothing found</h1>
  }

  return (
    <div className="container mt-3">
      <SearchControl
        defaultQuery={query ? query as string : ''}
        taxonomies={taxonomies}
        onSearch={onSearch}
      />

      <div className="container mt-4">
        <Loader isLoading={loading}>
          <BookItemList
            books={books}
            onClickBook={onClickBook}
            onClickAuthor={onClickAuthor}
          />
        </Loader>
      </div>
    </div>
  );
}

export default Search;
