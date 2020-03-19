import React from 'react';
import styled from 'styled-components';

import Book from '../../models/Book';

// bound all images to 200x300px
const ImageBoundingBox = styled.div`
  width: 200px;
  height: 300px;
  margin: auto;
`;

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

  const image = `https://www.gutenberg.org/cache/epub/` +
    `${book.id}/pg${book.id}.cover.${size}.jpg`;

  return (
    <ImageBoundingBox>
      <img
        src={image}
        alt={book.title}
        onError={onError}
      />
    </ImageBoundingBox>
  );
}

export default BookImage;
