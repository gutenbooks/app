import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { parseUrl, stringify } from 'query-string';

import ApiClient from '../utils/ApiClient';
import Book from '../models/Book';
import Contributor from '../models/Contributor';
import SearchFormInterface from '../models/SearchFormInterface'
import BookItemList from '../components/Book/BookItemList';
import SearchControl from '../components/Search/SearchControl';
import Loader from '../components/Loader';
// import Paginator from '../components/Paginator';
import ClickableBook from '../types/ClickableBook';
import ClickableContributor from '../types/ClickableContributor';
import OnSearchCallback from '../types/OnSearchCallback';

import taxonomies from '../mocks/taxonomies';

const Search: React.FC = () => {

  const result = parseUrl(window.location.search);
  const { query: q, taxons: t } = result.query;
  const history = useHistory();
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState();
  const [books, setBooks] = useState<any[]>([]);
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

  const onLoadMore = (e: any) => {
    e.preventDefault();
    setPage(page + 1);
  }

  useEffect(() => {
    setLoading(true);
    const params = stringify({
      page: page,
      search: query as string,
    });

    ApiClient.get(`/books/?${params}`)
      .then(({data}) => {
        setHasNext(data.next ? true : false);
        setCount(data.count);

        if (data.results) {
          const merged: any[] = [...books, ...data.results];
          setBooks(merged);
        }

        setLoading(false);
      })
    ;
  }, [query, taxons, page])

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
        <Loader isLoading={loading && page === 1}>
          <p className="small text-muted">{count} total results</p>
          <BookItemList
            books={books}
            onClickBook={onClickBook}
            onClickAuthor={onClickAuthor}
          />
        </Loader>

        { hasNext === true ?
          (
            <div className="text-center my-4">
              <Loader isLoading={loading && page >= 1}>
                <Button
                  variant="outline-primary"
                  onClick={onLoadMore}
                >
                  Load More
                </Button>
              </Loader>
            </div>
          )
          : null
        }
      </div>
    </div>
  );
}

export default Search;
