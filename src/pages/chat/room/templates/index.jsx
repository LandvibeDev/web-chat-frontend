import React from 'react';
import styled from 'styled-components';
import PropsType from 'prop-types';
import Conversation from 'components/organisms/Conversation';
import MessageEditor from 'components/organisms/MessageEditor';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function ChatRoomTemplate({
    user, messages, send
}) {
    return (
        <Container>
            <Conversation user={user} messages={messages} />
            <MessageEditor send={send} />
        </Container>
    );
}

ChatRoomTemplate.propTypes = {
    user: PropsType.number.isRequired,
    messages: PropsType.arrayOf(PropsType.any).isRequired,
    send: PropsType.func.isRequired
};

export default ChatRoomTemplate;
