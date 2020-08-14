import axios from 'axios';

async function getMessages(id) {
    const response = await axios.get(`/api/rooms/${id}`);
    if (response.status === 200) {
        return response.data;
    }

    throw Error('존재하지 않는 채팅방입니다.');
}

export default getMessages;
