import React from 'react';

import BookImage from './BookImage';
import Book from '../../models/Book';
import Contributor from '../../models/Contributor';
import ContributionType from '../../models/ContributionType';
import ClickableBook from '../../types/ClickableBook';
import ClickableContributor from '../../types/ClickableContributor';

interface BookItemInterface {
  book: Book;
  onClickBook: ClickableBook;
  onClickAuthor: ClickableContributor;
}

const handleClickBook = (onClick: ClickableBook, book: Book) => {
  return (e: any) => {
    e.preventDefault();
    return onClick(book);
  };
}

const handleClickAuthor = (onClick: ClickableContributor, contributor: Contributor) => {
  return (e: any) => {
    e.preventDefault();
    return onClick(contributor);
  };
}

const getAuthors = (book: Book) => {
  if (!book.contributions) {
    return [];
  }

  return book.contributions.filter((contribution) => {
    return contribution.type === ContributionType.Author;
  })
}

const BookItem: React.SFC<BookItemInterface> = ({ book, onClickBook, onClickAuthor }: BookItemInterface) => {
  const authors = getAuthors(book);

  return (
    <div className="text-center">
      <button className="btn btn-link" onClick={handleClickBook(onClickBook, book)}>
        <BookImage book={book} />
        <h6 className="mt-2">{book.title}</h6>
      </button>
      <p className="small">
        By {
          authors.map((contribution, i) => {
            const contrib = contribution.contributor;
            return (
              <span key={contrib.name}>
                <button
                  className="btn btn-link"
                  onClick={handleClickAuthor(onClickAuthor, contrib)}
                >
                  {contribution.contributor.name}
                </button>{ i < authors.length - 1? ', ' : '' }
              </span>
            )
          })
        }
      </p>
    </div>
  );
}

export default BookItem;
