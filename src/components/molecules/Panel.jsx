import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Card from './Card';

const InternalPanel = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 12px;
`;

function Panel(props) {
    const { children } = props;
    return (
        <InternalPanel {...props}>
            <Text text={children} display="block" fontSize="2rem" />
        </InternalPanel>
    );
}

Panel.propTypes = {
    children: PropTypes.string.isRequired,
    width: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string
};

Panel.defaultProps = {
    width: '100%',
    margin: '0 auto',
    padding: '0',
    backgroundColor: '#ff847c',
    color: 'white',
    display: 'block'
};

export default Panel;
