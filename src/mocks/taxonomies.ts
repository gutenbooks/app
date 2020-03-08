import Taxonomy from '../models/Taxonomy';
import Taxon from '../models/Taxon';

const taxonomies: Taxonomy[] = [
  {
    id: 1000,
    name: `Genre`,
    root: {
      id: 1001,
      name: `Genre`,
      children: [
        {
          id: 1002,
          name: `Fiction`,
        },
        {
          id: 1003,
          name: `Nonfiction`,
        },
        {
          id: 1004,
          name: `Romance`,
        },
        {
          id: 1005,
          name: `Science Fiction`,
        },
        {
          id: 1006,
          name: `History`,
        }
      ]
    } as Taxon,
  } as Taxonomy,
  {
    id: 2000,
    name: `Category`,
    root: {
      id: 2001,
      name: `Category`,
      children: [
        {
          id: 2002,
          name: `Classics`
        },
      ]
    } as Taxon,
  } as Taxonomy,
];

export default taxonomies;
