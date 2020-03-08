import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldArray } from 'formik';

import Taxonomy from '../../models/Taxonomy';

interface SearchFacetInterface {
  taxonomies: Taxonomy[];
  values: any;
}

const SearchFacets: React.SFC<SearchFacetInterface> = ({taxonomies, values}) => {

  const handleToggle = (arrayHelpers: any, taxonId: number) => {
    return (e: any) => {
      const idx = values.taxons.indexOf(taxonId);
      const idxSafe = idx >= 0;
      if (e.target.checked && !idxSafe) {
        arrayHelpers.push(taxonId)  ;
      } else if (idxSafe) {
        arrayHelpers.remove(idx);
      }
    }
  }

  return (
    <div>
      <h6>Advanced Search Options</h6>
      <FieldArray
        name="taxons"
        render={arrayHelpers => (
          <div>
            {
              taxonomies.map((taxonomy: Taxonomy) => {
                const root = taxonomy.root;

                if (!root.children) {
                  return '';
                }

                return (
                  <div key={`taxonomy-${taxonomy.id}`}>
                    <hr/>
                    <h6>{root.name}</h6>
                    {
                      root.children.map((taxon) => {
                        return (
                          <Form.Check
                            key={`taxon-${taxon.id}`}
                            type="switch"
                            id={`taxon-${taxon.id}`}
                            onClick={handleToggle(arrayHelpers, taxon.id)}
                            label={taxon.name}
                          />
                        )
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        )}
      />
    </div>
  );
}

export default SearchFacets;
