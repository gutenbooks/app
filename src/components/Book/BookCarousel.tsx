import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

import BookItem from './BookItem';
import Book from '../../models/Book';
import ClickableBook from '../../types/ClickableBook';
import ClickableContributor from '../../types/ClickableContributor';

interface BookCarouselInterface {
  title?: string;
  books: Book[];
  onClickBook: ClickableBook;
  onClickAuthor: ClickableContributor;
}

const build = (books: Book[], onClickBook: ClickableBook, onClickAuthor: ClickableContributor) => {
  return (
    <Row>
      {
        books.map((book) => {
          return (
            <Col key={book.title} xs={3}>
              <BookItem
                book={book}
                onClickBook={onClickBook}
                onClickAuthor={onClickAuthor}
              />
            </Col>
          )
        })
      }
    </Row>
  )
}

const BookCarousel: React.SFC<BookCarouselInterface> = ({ title, books, onClickBook, onClickAuthor }: BookCarouselInterface) => {
  const items = [];
  const perPage = 4;
  for(let i = 0; i < Math.ceil(books.length / perPage); i++) {
    const start = i * perPage;
    const next = start + perPage;
    const end = next > books.length ? books.length : next;
    const subset = books.slice(start, end);
    const idx = `carousel-item-${i}`;

    items.push(
      <Carousel.Item key={idx}>
        {build(subset, onClickBook, onClickAuthor)}
      </Carousel.Item>
    )
  }

  return (
    <>
      { title ? (<h2>{title}</h2>) : null }
      <Carousel>
        {items}
      </Carousel>
    </>
  );
}

export default BookCarousel;
