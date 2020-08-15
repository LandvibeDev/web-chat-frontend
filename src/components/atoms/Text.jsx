import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledText = styled.div`
  display: ${(props) => props.display || 'inline-block'};
  ${(props) => props.fontSize && css`font-size: ${props.fontSize}`};
  ${(props) => props.padding && css`padding: ${props.padding}`};
  text-align: center;
`;

function setUpSize(size, attributes) {
    if (size === 'sm') {
        return Object.assign(
            attributes, {
                fontSize: '0.5rem'
            }
        );
    }
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

function setUpBoxModel(boxModel, attributes) {
    // Small
    if (boxModel === 'sm') {
        return Object.assign(
            attributes, {
                padding: '0.2em'
            }
        );
    }

    // Standard
    return attributes;
}

function setUp(size, boxModel) {
    return [setUpSize.bind(null, size), setUpBoxModel.bind(null, boxModel)]
        .reduce((attr, func) => func(attr), {});
}

function Text(props) {
    const {
        text, size, boxModel
    } = props;

    const attributes = useMemo(setUp.bind(null, size, boxModel), [size, boxModel]);
    return (
        <StyledText {...attributes}>
            {text}
        </StyledText>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    boxModel: PropTypes.string
};

Text.defaultProps = {
    size: 'std',
    boxModel: 'std'
};

export default Text;
