import React from 'react';

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
    <>
      <a href="#" onClick={handleClickBook(onClickBook, book)}>
        <img src={book.image} />
        <h6 className="mt-2">{book.title}</h6>
      </a>
      <p className="small">
        By {
          authors.map((contribution, i) => {
            const contrib = contribution.contributor;
            return (
              <span key={contrib.name}>
                <a
                  href="#"
                  onClick={handleClickAuthor(onClickAuthor, contrib)}
                >
                  {contribution.contributor.name}
                </a>{ i < authors.length - 1? ', ' : '' }
              </span>
            )
          })
        }
      </p>
    </>
  );
}

export default BookItem;
