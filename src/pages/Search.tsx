import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { parseUrl, stringify } from 'query-string';

import ApiClient from '../utils/ApiClient';
import Book from '../models/Book';
import Contributor from '../models/Contributor';
import SearchFormInterface from '../models/SearchFormInterface'
import BookItemList from '../components/Book/BookItemList';
import SearchControl from '../components/Search/SearchControl';
import Loader from '../components/Loader/Loader';
import ClickableBook from '../types/ClickableBook';
import ClickableContributor from '../types/ClickableContributor';
import OnSearchCallback from '../types/OnSearchCallback';

import taxonomies from '../mocks/taxonomies';

const Search: React.FC = () => {

  const history = useHistory();
  const { query: { query, taxons, language } } = parseUrl(window.location.search);
  const [count, setCount] = useState();
  const [hasNext, setHasNext] = useState();
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [context, setContext] = useState<SearchFormInterface>({
    page: 1,
    query: query as string,
    taxons: taxons ? taxons as string[] : [],
    language: language ? language as string : 'en',
  });

  if (!context.query) {
    console.log('No query specified, redirecting to home.');
    history.push(`/`);
  }

  const onClickBook: ClickableBook = (book: Book) => {
    history.push(`/books/${book.id}`);
  };
  const onClickAuthor: ClickableContributor = (contributor: Contributor) => {
    console.log('clicked contributor', contributor);
    // history.push(`/contributor/${contributor.id}`);
  };

  const onSearch: OnSearchCallback = (form: SearchFormInterface) => {

    let tx: string[] = [];
    if (form.taxons) {
      tx = form.taxons.map((t) => t.toString());
    }

    setBooks([]);
    setContext({
      ...context,
      page: 1,
      query: form.query,
      taxons: tx,
      language: form.language,
    });

    // update the query params
    const searchParams = form;
    delete searchParams.page;

    history.push({
      pathname: '/search',
      search: `?${stringify(searchParams)}`,
    });
  };

  const onLoadMore = (e: any) => {
    e.preventDefault();
    setContext({
      ...context,
      page: context.page ? context.page + 1 : 1,
    });
  }

  useEffect(() => {
    setLoading(true);
    const params = stringify({
      page: context.page,
      search: context.query as string,
      languages: context.language,
    });

    ApiClient.get(`/books/?${params}`)
      .then(({data}) => {
        setHasNext(data.next ? true : false);
        setCount(data.count);

        if (data.results) {
          setBooks((b) => [...b, ...data.results]);
        }

        setLoading(false);
      })
    ;
  }, [context])

  if (!context.query && books.length === 0) {
    return <h1>nothing found</h1>
  }

  return (
    <div className="container">
      <SearchControl
        defaultValues={context}
        taxonomies={taxonomies}
        onSearch={onSearch}
      />

      <div className="container mt-4">
        <Loader isLoading={loading && context.page === 1}>
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
              <Loader isLoading={loading && !!context.page && context.page >= 1}>
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
