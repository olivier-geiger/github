import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';
import './UserResult.css'

const UserResult = ({  login, avatar_url, html_url }) => (
  <div className="box">
    <Card>
      <Image src={avatar_url} wrapped ui={  login} />
      <Card.Content>
        <Card.Header> </Card.Header>
        <Card.Meta>
          <span className="date"></span>
        </Card.Meta>
        <Card.Description>
          {login}
        </Card.Description>
        <div class="event">
          <div class="content">
            <div class="summary">
              <a href={html_url} target="_blank">Account link</a> 
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  </div>
);



export default UserResult;
