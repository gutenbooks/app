import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import Format from '../../models/Format';

interface BookImageProps {
  id: number;
  formats: Format[];
}

const BookFormats: React.SFC<BookImageProps> = ({ id, formats = [] }: BookImageProps) => {
  const propId = `book-formats-${id}`;
  return (
    <DropdownButton
      alignRight
      title="Download"
      id={propId}
    >
      {
        formats.map((format: Format, idx: number) => {
          return (
            <Dropdown.Item
              key={`${propId}-${idx}`}
              target="_blank"
              href={format.file}
              eventKey={`${idx}`}
            >
              {format.type}
            </Dropdown.Item>
          );
        })
      }
    </DropdownButton>
  );
}

export default BookFormats;
