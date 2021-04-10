import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

const RepoResult = ({ name, login, description, avatarUrl, htmlUrl, fullName }) => (
  <Card>
    <Image src={avatarUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{login}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
      <div class="event">
        <div class="content">
          <div class="summary">
             <a href={htmlUrl} target="_blank">{fullName}</a> 
          </div>
        </div>
      </div>
    </Card.Content>
  </Card>
);

RepoResult.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  description: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

RepoResult.defaultProps = {
  description: '',
};

export default RepoResult;
