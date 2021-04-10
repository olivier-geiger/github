import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const FAQ = () => (
  <Segment>
    <Header>A quoi ça sert ?</Header>
    <p>Cette application permet de trouver une liste de dépôts GitHub pour un critère donné,</p>
    <p>et elle permet de trouver un user github.</p>

    <Header>Comment faire une recherche ?</Header>
    <p>Sur la page recherche, complétez le champ de recherche et valider la recherche.</p>

    <Header>Puis-je chercher n'importe quel terme ?</Header>
    <p>Oui, c'est fou.</p>
  </Segment>
);

export default FAQ;
