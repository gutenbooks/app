import React, { useState } from 'react';
import { Formik } from 'formik';
import { Collapse, Card, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons'

import Taxonomy from '../../models/Taxonomy';
import OnSearchCallback from '../../types/OnSearchCallback';
import SearchFacets from './SearchFacets';

interface SearchControlInterface {
  defaultQuery?: string;
  taxonomies: Taxonomy[];
  onSearch: OnSearchCallback;
}

const SearchControl: React.SFC<SearchControlInterface> = ({defaultQuery, taxonomies, onSearch}) => {
  const [open, setOpen] = useState(false);

  return (
    <Formik
      onSubmit={(values) => {
        onSearch(values)
      }}
      initialValues={{
        query: defaultQuery ? defaultQuery : '',
        taxons: [],
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Card className="mb-3">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Prepend>
                <Button
                  variant="outline-primary"
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  active={open}
                >
                  <FontAwesomeIcon icon={faSlidersH} />
                </Button>
              </InputGroup.Prepend>
              <FormControl
                name="query"
                value={values.query}
                onChange={handleChange}
                placeholder="Search (Title, Subtitle, Author, etc.)"
                aria-label="Search (Title, Subtitle, Author, etc.)"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  variant="primary"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <Collapse in={open}>
              <Card.Body>
               <SearchFacets
                taxonomies={taxonomies}
                values={values}
               />
             </Card.Body>
            </Collapse>
          </Form>
        </Card>
      )}
    </Formik>
  );
}

export default SearchControl;
