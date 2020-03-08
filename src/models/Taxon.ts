interface Taxon {
  id: number;
  name: string;
  children?: Taxon[];
}

export default Taxon;
