import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Message from 'components/molecules/Message';
import { chooseType } from 'common/MessageTarget';

const StyledConversation = styled.section`
  margin: 2em;
  padding: 2em;
  border-radius: 12px;
  background-color: #f9fcfb;
`;

function toMessages(user, messages) {
    return messages.map(({
        id, contents, messageType, createdAt, createdBy
    }) => {
        const info = { contents, createdAt };
        return (
            <Message key={id}
                who={chooseType(user, createdBy)}
                type={messageType}
                info={info} />
        );
    });
}

function Conversation({ user, messages }) {
    return (
        <StyledConversation>
            {toMessages(user, messages)}
        </StyledConversation>
    );
}

Conversation.propTypes = {
    user: PropTypes.number.isRequired,
    messages: PropTypes.arrayOf(PropTypes.any).isRequired
};
export default Conversation;
