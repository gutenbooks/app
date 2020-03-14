import React from 'react';

import Book from '../../models/Book';

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface BookImageProps {
  book: Book;
  size?: Size;
}

const BookImage: React.SFC<BookImageProps> = ({ book, size=Size.Medium }: BookImageProps) => {
  const onError = (e: any) => {
    e.target.src = `https://via.placeholder.com/200x300`;
  };

  let image = `https://www.gutenberg.org/cache/epub/`;
  image += `${book.id}/pg${book.id}.cover.${size}.jpg`;

  return (
    <img
      src={image}
      alt={book.title}
      onError={onError}
    />
  );
}

export default BookImage;
