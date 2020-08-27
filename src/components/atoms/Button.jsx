import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const sizeStyles = css`
    ${(props) => props.size === 'small'
    && css`
        height: 1.75rem;
        font-size: 0.875rem;
     `}
     
    ${(props) => props.size === 'medium'
    && css`
        height: 2.25rem;
        font-size: 1rem;
     `}
     
    ${(props) => props.size === 'large'
    && css`
        height: 3rem;
        font-size: 2rem;
     `}
`;

const flexStyles = css`
    ${(props) => !!props.groupRatio
    && css`
          flex: ${props.groupRatio};
          flex-basis: auto;
          margin: 0.1em;
     `}
`;

const colorStyles = css`
    transition-duration: 0.4s;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    &:hover {
      border: 2px solid ${(props) => props.backgroundColor};
      background-color: ${(props) => props.color};
      color: ${(props) => props.backgroundColor};
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

const StyledButton = styled.button`
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    ${sizeStyles}
    ${flexStyles}
    ${colorStyles}
`;

function setUpColorInfo(color) {
    if (color === 'orange') {
        return {
            backgroundColor: 'orange',
            color: 'white'
        };
    }
    if (color === 'standard') {
        return {
            backgroundColor: '#ff847c',
            color: 'white'
        };
    }

    return {};
}

function Button({
    text, size, color, groupRatio, onClick
}) {
    const colorInfo = setUpColorInfo(color);
    return (
        <StyledButton size={size}
            groupRatio={groupRatio}
            onClick={onClick}
            {...colorInfo}>
            {text}
        </StyledButton>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    groupRatio: PropTypes.number,
    onClick: PropTypes.func
};

Button.defaultProps = {
    color: 'standard',
    size: 'large',
    groupRatio: 0,
    onClick: () => {
    }
};

export default Button;
