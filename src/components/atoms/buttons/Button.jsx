import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from 'components/atoms/buttons/styles';

const Button = ({title, action, children}) => (
    <StyledButton onClick={action}>
        {title}
        {children}
    </StyledButton>
);

Button.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Button;
