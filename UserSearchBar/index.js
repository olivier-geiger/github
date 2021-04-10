import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';


const UserSearchBar = ( {search, setSearch, doUserSubmit, manageError, loading } ) => {
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (search === '') {
      manageError('Merci de saisir votre recherche avant de valider');
    }
    else if (search.length < 3) {
      manageError('Merci de saisir au moins 3 caractères');
    }
    else {
      doUserSubmit();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input 
            iconPosition="left" 
            icon="search" 
            placeholder="GitHub user..." 
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            loading={loading}
          />
      </Form.Field>
    </Form>
  );    
}

UserSearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  doUserSubmit: PropTypes.func.isRequired,
  manageError: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UserSearchBar;