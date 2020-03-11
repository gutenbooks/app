import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Book from '../../models/Book';
import Contributor from '../../models/Contributor';
import ContributionType from '../../models/ContributionType';

interface BookShowInterface {
  book: Book;
}

const getAuthors = (book: Book) => {
  if (!book.contributions) {
    return [];
  }

  return book.contributions.filter((contribution) => {
    return contribution.type === ContributionType.Author;
  })
}

const BookShow: React.SFC<BookShowInterface> = ({ book }: BookShowInterface) => {
  const authors = getAuthors(book);
  console.log('**** book', book);

  return (
    <Row>
      <Col md={3}>
        <img src={book.image} />
      </Col>
      <Col md={9}>
        <h1 className="mt-2">{book.title}</h1>
        <p className="small">
          By {
            authors.map((contribution, i) => {
              const contrib = contribution.contributor;
              return (
                <span key={contrib.name}>
                  <a href="#">
                    {contribution.contributor.name}
                  </a>{ i < authors.length - 1? ', ' : '' }
                </span>
              )
            })
          }
        </p>
      </Col>
      <Col xs={12} className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec eleifend tortor, eu commodo mauris. Curabitur luctus in ipsum at lobortis. Morbi eget sem ullamcorper, mattis diam quis, ultricies nisi. Fusce tellus quam, iaculis vitae diam id, mollis dignissim tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus lacinia ullamcorper enim, ac pellentesque neque semper at. Nam purus lorem, cursus non venenatis eget, lacinia ut urna. Praesent justo justo, fringilla at ullamcorper et, efficitur nec ipsum. Duis tempus justo vitae justo dapibus vestibulum. Donec non vulputate magna. Suspendisse tincidunt ullamcorper aliquet. Morbi tempus ullamcorper orci quis porta. Nunc porta, mi et ornare molestie, eros arcu sagittis ipsum, nec condimentum dui justo sed lacus. Duis nunc erat, dictum vel pretium ac, rhoncus non justo. Aliquam semper porttitor ipsum dapibus tempor.

          Nunc ac finibus nulla. Duis at blandit arcu. Vivamus sem nisl, finibus eget orci sit amet, auctor euismod elit. Donec in purus vel tellus lobortis posuere. Nam vitae aliquet metus. Nullam consequat bibendum odio, id mollis urna tristique at. Ut a tortor in augue finibus molestie et sed nunc. Pellentesque tempus ac odio vel dignissim. Duis viverra nunc metus, in cursus neque finibus quis. Suspendisse ullamcorper arcu augue, pharetra ultrices magna ultricies quis. Integer nec libero turpis. Phasellus vehicula et risus ac finibus. Sed a vulputate nulla, ac ultrices tortor. Donec lectus enim, accumsan ac lectus eget, sollicitudin commodo sem.

          Donec varius imperdiet ante ut sodales. Fusce mattis nibh in auctor ultrices. Donec dapibus, quam ut bibendum elementum, sapien odio dapibus mauris, ut gravida neque nibh id nunc. Phasellus pretium, mi at volutpat auctor, nisl tellus vehicula lorem, et consequat orci ex id ante. Sed tincidunt nisl nec nisl hendrerit finibus. Donec dolor dolor, facilisis in nibh ac, iaculis auctor mi. Nunc rhoncus tincidunt metus, vel sodales lacus porttitor ac. Integer sed lectus et elit interdum molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sagittis, turpis ut laoreet convallis, diam leo feugiat elit, id ornare neque diam vitae nisl. Suspendisse mi felis, iaculis id nisl quis, tristique finibus nunc. In pretium ultrices justo.

          Donec eu diam tortor. Duis placerat, est non facilisis volutpat, dui sapien luctus felis, sit amet facilisis sapien lacus id enim. Nulla consequat nisl nisi, sit amet ultrices nisi ornare eget. Nunc cursus suscipit mauris, quis rhoncus augue vulputate ac. Nam pulvinar eget eros in iaculis. Nam ornare pretium tortor tincidunt consectetur. Nunc vestibulum leo ac bibendum pharetra. Vivamus scelerisque erat a vehicula ornare. Morbi sit amet porttitor ipsum. Vivamus aliquet lacus magna, dapibus vulputate libero accumsan sit amet. Aliquam eu vulputate sem. Etiam varius faucibus massa quis suscipit. Curabitur in augue mauris.

          Donec lacinia, nisi vel blandit convallis, nisl metus eleifend libero, a elementum risus ante eu nisl. Aliquam luctus elit sed imperdiet eleifend. Vivamus scelerisque varius enim. Nulla a libero id nulla scelerisque feugiat. Aliquam ut erat quis nisl commodo lobortis. Fusce commodo finibus mi, non fringilla nulla. Nulla et gravida nulla, ut laoreet urna. Phasellus laoreet metus id magna vehicula, ac aliquet turpis maximus. Aliquam vitae quam mollis, cursus velit eget, ultricies sapien. Nullam velit orci, convallis et tellus et, hendrerit lobortis lorem. Cras eu lobortis tellus. Maecenas convallis sed orci et semper.
        </p>
      </Col>
    </Row>
  );
}

export default BookShow;
