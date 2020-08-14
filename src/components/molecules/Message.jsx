import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MessageTarget from 'common/MessageTarget';
import { isText } from 'common/MessageType';
import Text from 'components/atoms/Text';

const StyledMessage = styled.div`
  width: 100%;
  display: inline-block;
  text-align: ${(props) => (props.who === MessageTarget.MINE ? 'left' : 'right')};
`;

function chooseType(type, contents) {
    if (isText(type)) {
        return <Text text={contents} type="ms" size="md" />;
    }

    return <div />;
}

function Message({ who, type, contents }) {
    return (
        <StyledMessage who={who}>
            {chooseType(type, contents)}
        </StyledMessage>
    );
}

Message.propTypes = {
    who: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired
};

export default Message;
