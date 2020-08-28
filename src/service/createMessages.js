import axios from 'axios';

async function createMessages(id, contents) {
    try {
        const response = await axios.post(`/api/rooms/${id}/messages`, { contents }, {
            validateStatus(status) {
                return status === 201;
            }
        });

        return response.data;
    } catch (e) {
        return null;
    }
}

export default createMessages;
