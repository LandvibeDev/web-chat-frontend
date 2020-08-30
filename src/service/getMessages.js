import axios from 'axios';

function toTime(createdAt) {
    const date = new Date(createdAt);
    return date.toLocaleTimeString();
}

function transformDate(message) {
    return {
        ...message,
        createdAt: toTime(message.createdAt)
    };
}

async function getMessages(id) {
    const response = await axios.get(`/api/rooms/${id}/messages`);
    if (response.status === 200) {
        const { messages } = response.data;
        return messages.map(transformDate);
    }

    throw Error('존재하지 않는 채팅방입니다.');
}

export default getMessages;
