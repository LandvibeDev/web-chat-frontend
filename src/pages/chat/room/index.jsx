import React, {
    useCallback, useEffect, useReducer, useState
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import getMessages from 'service/getMessages';
import createMessages from 'service/createMessages';
import ChatRoomTemplate from './templates';

function reducer(messages, actions) {
    const { type } = actions;
    switch (type) {
    case 'initialize':
        return actions.messages;
    case 'add':
        return messages.concat(actions.message);
    default:
        return [];
    }
}

function ChatRoom() {
    const { id } = useParams();
    const history = useHistory();

    const [messages, dispatch] = useReducer(reducer, [], undefined);

    // user mock 데이터
    const [user] = useState(1);

    const fetch = useCallback(async () => {
        try {
            const data = await getMessages(id);
            dispatch({
                messages: data,
                type: 'initialize'
            });
        } catch (error) {
            // Modal 대체
            alert('해당 경로의 페이지는 존재하지 않습니다.'); // eslint-disable-line no-alert
            history.goBack();
        }
    }, [id, history]);

    useEffect(() => {
        fetch();
    }, [fetch]);

    const onSend = async (message) => {
        const responseMessage = await createMessages(id, message);
        if (responseMessage) {
            dispatch({ type: 'add', message: responseMessage });
        }
    };

    return (
        <ChatRoomTemplate user={user}
            messages={messages}
            onSend={onSend} />
    );
}

export default ChatRoom;
