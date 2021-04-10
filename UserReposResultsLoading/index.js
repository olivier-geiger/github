import React from 'react';

import { Card, Placeholder } from 'semantic-ui-react';

const UserReposResultsLoading = () => (
  <Card.Group itemsPerRow="1" stackable={false}>
    <Card>
      <Placeholder>
        <Placeholder.Image square />
      </Placeholder>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="short" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default UserReposResultsLoading;
