import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Book from '../models/Book';
import Contributor from '../models/Contributor';
import SearchFormInterface from '../models/SearchFormInterface'
import SearchControl from '../components/Search/SearchControl';
import BookCarousel from '../components/Book/BookCarousel';
import BookItemList from '../components/Book/BookItemList';
import ClickableBook from '../types/ClickableBook';
import ClickableContributor from '../types/ClickableContributor';
import OnSearchCallback from '../types/OnSearchCallback';

import books from '../mocks/books';
import taxonomies from '../mocks/taxonomies';

const Home: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();

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
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }

    console.log(`executed search:`, form);
  };

  const recent = books.slice(30, 40);
  const popular = books.slice(10, 20);
  return (
    <div className="container mt-3">
      <div>
        <SearchControl
          taxonomies={taxonomies}
          onSearch={onSearch}
        />

        {isSearch ?
            (
              <BookItemList
                books={books}
                onClickBook={onClickBook}
                onClickAuthor={onClickAuthor}
              />
            )
          :
            (
              <div>
                <div className="mt-3">
                  <BookCarousel
                    title="New Releases"
                    books={recent}
                    onClickBook={onClickBook}
                    onClickAuthor={onClickAuthor}
                  />
                </div>
                <div className="mt-3">
                  <BookCarousel
                    title="Popular"
                    books={popular}
                    onClickBook={onClickBook}
                    onClickAuthor={onClickAuthor}
                  />
                </div>
              </div>
            )
          }
      </div>
    </div>
  );
}

export default Home;
