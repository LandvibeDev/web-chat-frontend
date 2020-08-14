import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledText = styled.div`
  display: ${(props) => props.display || 'inline-block'};
  ${(props) => props.fontSize && css`font-size: ${props.fontSize}`};
  ${(props) => props.backgroundColor && css`background-color: ${props.backgroundColor}`};
  ${(props) => props.color && css`color: ${props.color}`};
  ${(props) => props.margin && css`margin: ${props.margin}`};
  ${(props) => props.padding && css`padding: ${props.padding}`};
  border-radius: 12px;
  text-align: center;
`;

function setUpSize(size, attributes) {
    // Medium
    if (size === 'md') {
        return Object.assign(
            attributes, {
                fontSize: '1.3rem'
            }
        );
    }

    // Standard
    return attributes;
}

function setUpType(type, attributes) {
    // Message
    if (type === 'ms') {
        return Object.assign(attributes, {
            backgroundColor: '#ffe78f',
            margin: '0.5rem 0 0 0',
            padding: '0.5rem'
        });
    }

    // Standard
    return attributes;
}

function setUp(type, size) {
    return [setUpSize.bind(null, size), setUpType.bind(null, type)]
        .reduce((attr, func) => func(attr), {});
}

function Text(props) {
    const {
        text, type, size
    } = props;

    const attributes = useMemo(setUp.bind(null, type, size), [type, size]);

    return (
        <StyledText {...attributes}>
            {text}
        </StyledText>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string
};

Text.defaultProps = {
    type: 'std',
    size: 'std'
};

export default Text;
