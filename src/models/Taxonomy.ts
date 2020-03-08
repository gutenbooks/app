import Taxon from './Taxon';

interface Taxonomy {
  id: number;
  name: string;
  root: Taxon;
}

export default Taxonomy;
