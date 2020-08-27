import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
    padding: 0.3em 1em;
    ${(props) => !!props.groupRatio
    && css`
          flex: ${props.groupRatio};
      `};
`;

function Input(props) {
    const {
        onChange, onKeyPress, value, groupRatio
    } = props;

    return (
        <StyledInput value={value}
            groupRatio={groupRatio}
            onChange={onChange}
            onKeyPress={onKeyPress} />
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    groupRatio: PropTypes.number
};

Input.defaultProps = {
    onChange: () => {
    },
    onKeyPress: () => {
    },
    groupRatio: 0
};

export default Input;
