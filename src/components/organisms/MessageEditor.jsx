import React from 'react';
import styled from 'styled-components';
import MessageSender from 'components/molecules/MessageSender';

const StyledMessageEditor = styled.div`
  padding: 0 2.5rem;
`;

function MessageEditor(props) {
    return (
        <StyledMessageEditor>
            <MessageSender {...props} />
        </StyledMessageEditor>
    );
}

export default MessageEditor;
