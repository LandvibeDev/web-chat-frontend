import axios from 'axios';

function createRooms(title) {
    const config = {
        method: 'post',
        url: '/api/rooms',
        data: { title },
        validateStatus(status) {
            return status === 201;
        }
    };
    return axios(config).then(
        (response) => true
    ).catch(
        (error) => false
    );
}

export default createRooms;
