import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ReactGA from 'react-ga';

import Format from '../../models/Format';

interface BookImageProps {
  id: number;
  title: string;
  formats: Format[];
}

const BookFormats: React.SFC<BookImageProps> = ({ id, title, formats = [] }: BookImageProps) => {
  const propId = `book-formats-${id}`;

  const onClick = (action: string) => {
    return (e: any) => {
      ReactGA.event({
        category: 'Download',
        action,
        label: title,
      });
    }
  }

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
              onClick={onClick(format.type)}
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
