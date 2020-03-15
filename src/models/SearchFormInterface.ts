
interface SearchFormInterface {
  query: string;
  language: string;
  taxons?: string[];
  page?: number;
}

export default SearchFormInterface;
