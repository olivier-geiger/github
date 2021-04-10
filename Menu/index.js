import React from 'react';
import { Menu as MenuSemanticUI} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <MenuSemanticUI>
    {
      // On indique que c'est le composant NavLink qui va être utilisé pour
      // le rendu de l'élément de navigation
    }
     <MenuSemanticUI.Item
      to="/"
      exact
      as={NavLink}
    >
      home
    </MenuSemanticUI.Item>
    <MenuSemanticUI.Item
      to="/githuberrepo"
      exact
      as={NavLink}
    >
      GitHub Repo
    </MenuSemanticUI.Item>
    <MenuSemanticUI.Item
      to="/githubuser"
      exact
      as={NavLink}
    >
      GitHub User
    </MenuSemanticUI.Item>
    <MenuSemanticUI.Item
      to="/gitlab"
      exact
      as={NavLink}
    >
      GitLab 
    </MenuSemanticUI.Item>
    <MenuSemanticUI.Item
      to="/faq"
      exact
      as={NavLink}
    >
      FAQ
    </MenuSemanticUI.Item>
  </MenuSemanticUI>
);

export default Menu;
