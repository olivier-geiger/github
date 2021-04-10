import React from 'react';
import PropTypes from 'prop-types';

import { Message as MessageSemanticUI } from 'semantic-ui-react';

const Message = ({ message, isError }) => (
  <MessageSemanticUI negative={isError}>
    {message}
  </MessageSemanticUI>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

// si une propriété n'est pas requise, on doit
// lui attribuer une valeur par défaut
Message.defaultProps = {
  isError: false,
};

export default Message;
