import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Book from '../../models/Book';
import ClickableBook from '../../types/ClickableBook';
import ClickableContributor from '../../types/ClickableContributor';
import BookItem from './BookItem';

interface BookItemListProps {
  books: Book[];
  onClickBook: ClickableBook;
  onClickAuthor: ClickableContributor;
}

const BookItemList: React.SFC<BookItemListProps> = ({ books, onClickBook, onClickAuthor }: BookItemListProps) => {
  return (
    <Row>
      {
        books.map((book: Book) => {
          return (
            <Col
              key={`book-item-${book.id}`}
            >
              <BookItem
                book={book}
                onClickBook={onClickBook}
                onClickAuthor={onClickAuthor}
              />
            </Col>
          );
        })
      }
    </Row>
  );
}

export default BookItemList;
