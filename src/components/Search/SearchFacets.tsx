import React from 'react';
import { Form } from 'react-bootstrap';

import Taxonomy from '../../models/Taxonomy';
import Language from '../../models/Language';
import SearchTaxonFilter from './SearchTaxonFilter';

interface SearchFacetsInterface {
  values: any;
  handleChange: any;
  taxonomies: Taxonomy[];
  languages: Language[];
}

const SearchFacets: React.SFC<SearchFacetsInterface> = ({values, handleChange, taxonomies, languages}) => {

  return (
    <div>
      <h6>Advanced Search Options</h6>
      <Form.Group controlId="exampleForm.SelectCustomSizeSm">
        <Form.Label>Language</Form.Label>
        <Form.Control
          as="select"
          size="sm"
          custom="true"
          name="language"
          value={values.language}
          onChange={handleChange}
          placeholder="Language"
          aria-label="Language"
          aria-describedby="language"
        >
          {
            languages.map((lang: Language) => {
              return (
                <option
                  key={`lang-${lang.code}`}
                  value={lang.code}
                >
                  {lang.name}
                </option>
              );
            })
          }
        </Form.Control>
      </Form.Group>
     <SearchTaxonFilter
      taxonomies={taxonomies}
      values={values}
     />
    </div>
  );
}

export default SearchFacets;
