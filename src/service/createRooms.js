import axios from 'axios';

function createRooms(title) {
    let config = {
        method: 'post',
        url: 'api/rooms',
        validateStatus: function (status) {
            return status === 201
        }
    }
    return axios(config).then(
        function (response) {
            return true;
        }
    ).catch(
        function (error) {
            return false;
        }
    )
}


export default createRooms;