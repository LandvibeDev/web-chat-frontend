import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const InternalLink = styled(Link)`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  text-decoration: none;
`;

function Linker(props) {
    const { text } = props;
    return (
        <InternalLink {...props}>
            {text}
        </InternalLink>
    );
}

Linker.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    margin: PropTypes.string,
    display: PropTypes.string
};

Linker.defaultProps = {
    color: '#f2f6f5',
    fontSize: '1rem',
    margin: '0',
    display: 'inline-block'
};

export default Linker;
