import axios from 'axios';

export default async function crateRooms(room) {
    await axios.post('/rooms', { text: room });
}
