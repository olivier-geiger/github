import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

const SearchBar = ({
  search, setSearch, doSubmit, manageError, loading
}) => {
  const handleSubmit = (event) => {
    
    event.preventDefault();
  
    if (search === '') {
      manageError('Merci de saisir votre recherche avant de valider');
    }
    else if (search.length < 3) {
      manageError('Merci de saisir au moins 3 caractères');
    }
    else {
      doSubmit();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input 
          iconPosition="left" 
          icon="search" 
          placeholder="Github repo..." 
          value={search} 
          onChange={(event) => setSearch(event.target.value)} 
          loading={loading}
        />
      </Form.Field>
    </Form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  doSubmit: PropTypes.func.isRequired,
  manageError: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
