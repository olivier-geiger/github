import React from 'react';

import { Card, Placeholder } from 'semantic-ui-react';

const ReposResultsLoading = () => (
  <Card.Group itemsPerRow="3" stackable={false}>
    {
      [1, 2, 3, 4, 5, 6].map((e) => (
        <Card key={e}>
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
      ))
    }

  </Card.Group>
);

export default ReposResultsLoading;
