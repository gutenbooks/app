import Book from '../models/Book';
import ContributionType from '../models/ContributionType';
import Contribution from '../models/Contribution';
import Contributor from '../models/Contributor';

const authorMapper = (author: any): Contribution => {
  return {
    type: ContributionType.Author,
    contributor: {
      name: author.name,
    } as Contributor,
  } as Contribution;
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
    image: `https://www.gutenberg.org/cache/epub/${b['id']}/pg${b['id']}.cover.medium.jpg`,
    description: `foobar`,
    contributions: b['authors'] ? b['authors'].map(authorMapper) : [],
  } as Book;
}

export default bookMapper;
