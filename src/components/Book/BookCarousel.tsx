import React from 'react';
import Carousel from 'react-multi-carousel';
import { Row, Col } from 'react-bootstrap';

import BookItem from './BookItem';
import Book from '../../models/Book';
import ClickableBook from '../../types/ClickableBook';
import ClickableContributor from '../../types/ClickableContributor';

interface BookCarouselInterface {
  title?: string;
  books: Book[];
  options?: any;
  onClickBook: ClickableBook;
  onClickAuthor: ClickableContributor;
}

const BookCarousel: React.SFC<BookCarouselInterface> = ({ title, books, options, onClickBook, onClickAuthor }: BookCarouselInterface) => {

  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
      slidesToSlide: 4,
    },
    lg: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    md: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 100,
    },
  };

  options = options ? options : {};

  const opts = {
    centerMode: false,
    swipeable: true,
    draggable: false,
    showDots: false,
    responsive: responsive,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 10000,
    keyBoardControl: true,
    transitionDuration: 500,
    removeArrowOnDeviceType: ['sm', 'md'],
    partialVisible: true,
    itemClass: 'text-center',
    ...options,
  }

  return (

    <>
      { title ? (<h2>{title}</h2>) : null }
      <Carousel
        {...opts}
      >
        {
          books.map((book) => {
            return (
              <BookItem
                key={book.title}
                book={book}
                onClickBook={onClickBook}
                onClickAuthor={onClickAuthor}
              />
            )
          })
        }
      </Carousel>
    </>
  );
};

export default BookCarousel;
