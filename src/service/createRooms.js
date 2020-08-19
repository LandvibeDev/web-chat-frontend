import axios from 'axios';

async function createRooms(title){
    await axios.post('/api/rooms',{
        title:title
    })
        .then(function(response){
            console.log(response);
            return true;
        })
        .catch(function(error){
            console.log(error);
            return false;
        });
}

export default createRooms;