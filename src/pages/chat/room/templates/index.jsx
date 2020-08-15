import React from 'react';
import styled from 'styled-components';
import PropsType from 'prop-types';
import Conversation from 'components/organisms/Conversation';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function ChatRoomTemplate({ user, messages }) {
    return (
        <Container>
            <Conversation user={user} messages={messages} />
        </Container>
    );
}

ChatRoomTemplate.propTypes = {
    user: PropsType.number.isRequired,
    messages: PropsType.arrayOf(PropsType.any).isRequired
};

export default ChatRoomTemplate;
