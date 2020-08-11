import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InternalInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
`;

function Input(props) {
    return (
        <InternalInput {...props} />
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    display: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string
};

Input.defaultProps = {
    display: 'inline',
    width: '100%',
    height: '100%',
    padding: '12px 20px',
    margin: '0'
};

export default Input;
