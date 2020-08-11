import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';

const InternalCard = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: #c8dad3;
`;

function Card(props) {
    const { text } = props;
    return (
        <InternalCard {...props}>
            <Text text={text} fontSize="2rem" />
        </InternalCard>
    );
}

Card.propTypes = {
    text: PropTypes.string.isRequired,
    margin: PropTypes.string,
    padding: PropTypes.string
};

Card.defaultProps = {
    margin: '0',
    padding: '0'
};

export default Card;
