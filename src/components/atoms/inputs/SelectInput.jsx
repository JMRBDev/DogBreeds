import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';

import toUpperCase from 'util/toUpperCase';

const StyledSelectInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-weight: 500;
`;

const StyledSelectInput = styled.select`
  min-width: 10rem;
  max-width: 25rem;
  padding: 0.5rem 0.6rem;
  border: none;
  background-color: ${({theme, isDark}) => isDark ? theme.primaryBgColor : theme.secondaryBgColor};
  border-radius: 0.3rem;
  cursor: pointer;
  color: ${({theme}) => theme.textColor};
`;

const SelectInput = ({onChange, options, value, label, isDark = false, children, t}) => (
    <StyledSelectInputContainer>
        {label && (<StyledLabel>{label}</StyledLabel>)}
        <StyledSelectInput onChange={onChange} value={value} isDark={isDark} aria-label={label}>
            {children}

            {options.map((option, index) =>
                <option
                    key={`option-${index}`}
                    value={option}
                >
                    {toUpperCase(t(option))}
                </option>
            )}

        </StyledSelectInput>
    </StyledSelectInputContainer>
);

SelectInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isDark: PropTypes.bool,
    children: PropTypes.node,
    t: PropTypes.func,
};

export default withTranslation()(SelectInput);
