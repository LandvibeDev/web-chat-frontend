import axios from 'axios';

export default async function getRooms() {
    const response = await axios.get('/rooms');
    return response.data;
}
