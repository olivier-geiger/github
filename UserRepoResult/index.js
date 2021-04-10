import React from 'react';

import { Card } from 'semantic-ui-react';

import UserResult from './UserResult';

const UserRepoResult = ( { user } ) => (
  <Card.Group stackable={false}>
  {
    user.map((users) => <UserResult key={users.id} {...users} />)
  }
  </Card.Group>
);

export default UserRepoResult;