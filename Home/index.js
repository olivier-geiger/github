import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Home = () => (
  <Segment>
    <Header>Application en React, permettant de rechercher :</Header>
    <p>Un repo :</p>
    <ul className="ui list">
      <li>GitHub</li>
      <li>GitLab : à venir</li>
    </ul>
    <hr />
    <br />
    <p>Un repo :</p>
    <ul className="ui list">
      <li>GitHub</li>
    </ul>
  </Segment>
);

export default Home;