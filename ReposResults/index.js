import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

import RepoResult from './RepoResult';

const ReposResults = ({ repos }) => (
  <Card.Group itemsPerRow="3" stackable={false}>
    {
      repos.map((repo) => <RepoResult key={repo.id} {...repo} />)
    }
  </Card.Group>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
