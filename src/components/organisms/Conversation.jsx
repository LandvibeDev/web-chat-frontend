import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Message from '../molecules/Message';
import { chooseType } from '../../common/MessageTarget';

const StyledConversation = styled.section`
  margin: 2em;
  padding: 2em;
  border-radius: 12px;
  background-color: #f9fcfb;
`;

function toMessages(user, chatList) {
    return chatList.map((it) => (
        <Message key={it.id}
            who={chooseType(user, it.creator)}
            type={it.type}
            contents={it.contents} />
    ));
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
