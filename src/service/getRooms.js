import axios from 'axios';

async function getRooms() {
    try {
        const response = await axios.get(`/api/rooms`);
        const rooms = response.data;
        return rooms;
    }
    catch(e){
        return [];
    }
}

export default getRooms;