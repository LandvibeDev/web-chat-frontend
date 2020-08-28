import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MessageTarget from 'common/MessageTarget';
import { isText } from 'common/MessageType';
import Text from 'components/atoms/Text';

const StyledMessage = styled.div`
  width: 100%;
  display: inline-block;
  text-align: ${(props) => (props.who === MessageTarget.MINE ? 'right' : 'left')};
`;

const TextMessage = styled.div`
  display: inline-block;
  background-color: #ffe78f;
  margin: 0.5rem 0 0 0;
  padding: 0.5rem;
  border-radius: 10px;
`;

function chooseType(type, info) {
    const { contents, createdAt } = info;
    if (isText(type)) {
        return (
            <TextMessage>
                <Text text={contents} size="md" boxModel="sm" />
                <Text text={createdAt} size="sm" boxModel="sm" />
            </TextMessage>
        );
    }

    return <div />;
}

function Message({
    who, type, info
}) {
    return (
        <StyledMessage who={who}>
            {chooseType(type, info)}
        </StyledMessage>
    );
}

Message.propTypes = {
    who: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    info: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Message;
