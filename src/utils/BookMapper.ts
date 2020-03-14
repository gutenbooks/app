import Book from '../models/Book';
import ContributionType from '../models/ContributionType';
import Contribution from '../models/Contribution';
import Contributor from '../models/Contributor';
import Format from '../models/Format';
import FormatType from '../models/FormatType';

const authorMapper = (author: any): Contribution => {
  return {
    type: ContributionType.Author,
    contributor: {
      name: author.name,
    } as Contributor,
  } as Contribution;
}

// Ex.
// {
//   "text/html; charset=utf-8": "http://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
//   "application/epub+zip": "http://www.gutenberg.org/ebooks/1342.epub.images",
//   "image/jpeg": "http://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
//   "application/x-mobipocket-ebook": "http://www.gutenberg.org/ebooks/1342.kindle.images",
//   "text/plain; charset=utf-8": "http://www.gutenberg.org/files/1342/1342-0.txt",
//   "application/rdf+xml": "http://www.gutenberg.org/ebooks/1342.rdf"
// }
const formatTypeMap: { [key: string]: FormatType } = {
  'text/html; charset=utf-8': FormatType.html,
  'application/epub+zip': FormatType.epub,
  'application/x-mobipocket-ebook': FormatType.kindle,
  'text/plain; charset=utf-8': FormatType.text,
}

const formatsMapper = (formats: any): Format[] => {
  const keys = Object.keys(formats);
  const mapped: any[] = keys.map((key: string) => {
    const value = formats[key];
    if (!formatTypeMap[key]) {
      return null;
    }

    return {
      file: value,
      type: formatTypeMap[key],
    } as Format;
  });

  return mapped.filter((el) => el !== null);
}

const bookMapper = (b: any): Book => {

  // {
  //   "id": <number of Project Gutenberg ID>,
  //   "title": <string>,
  //   "authors": <array of Authors>,
  //   "subjects": <array of strings>,
  //   "bookshelves": <array of strings>,
  //   "languages": <array of strings>,
  //   "copyright": <boolean or null>,
  //   "media_type": <string>,
  //   "formats": <Format>,
  //   "download_count": <number>
  // }
  return {
    id: b['id'],
    title: b['title'],
    description: `foobar`,
    contributions: b['authors'] ? b['authors'].map(authorMapper) : [],
    formats: formatsMapper(b['formats']),
  } as Book;
}

export default bookMapper;
