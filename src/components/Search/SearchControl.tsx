import React, { useState } from 'react';
import { Formik } from 'formik';
import { Collapse, Card, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons'

import Taxonomy from '../../models/Taxonomy';
import { languages } from '../../models/Language';
import OnSearchCallback from '../../types/OnSearchCallback';
import SearchFormInterface from '../../models/SearchFormInterface'
import SearchFacets from './SearchFacets';

interface SearchControlInterface {
  defaultValues?: SearchFormInterface;
  taxonomies: Taxonomy[];
  onSearch: OnSearchCallback;
}

const defaultForm: SearchFormInterface = {
  query: '',
  taxons: [],
  language: 'en',
};

const SearchControl: React.SFC<SearchControlInterface> = ({defaultValues = defaultForm, taxonomies, onSearch}) => {
  const [open, setOpen] = useState(false);

  return (
    <Formik
      onSubmit={(values) => {
        onSearch(values)
      }}
      initialValues={defaultValues}
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
                values={values}
                handleChange={handleChange}
                taxonomies={taxonomies}
                languages={languages}
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
