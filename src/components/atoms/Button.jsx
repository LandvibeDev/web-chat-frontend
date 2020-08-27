import React from 'react';
import styled, {css} from 'styled-components';

const sizeStyles = css`
    ${props =>
     props.size === 'small' &&
     css`
        height: 1.75rem;
        font-size: 0.875rem;
     `}
     
    ${props =>
     props.size === 'medium' &&
     css`
        height: 2.25rem;
        font-size: 1rem;
     `}
     
    ${props =>
     props.size === 'large' &&
     css`
        height: 3rem;
        font-size: 2rem;
     `}
`;

const StyledButton = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 10rem;
    padding-right: 10rem;
    margin: 0 0 0 33rem;

    background: ${(props) => props.color || 'orange'};

    ${sizeStyles}
`;

function Button({ size, onClick, ...rest }) {
    return (
        <StyledButton size={size} onClick={onClick} {...rest}>
        </StyledButton>
    );
}

Button.defaultProps = {
    size: 'large'
};

export default Button;
