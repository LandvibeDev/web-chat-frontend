import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InternalText = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: center;
  vertical-align: middle;
`;

function Text(props) {
    const {
        text
    } = props;
    return (
        <InternalText {...props}>
            {text}
        </InternalText>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string
};

Text.defaultProps = {
    width: '100%',
    height: '100%',
    color: 'black',
    display: 'inline'
};

export default Text;
