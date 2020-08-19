import axios from 'axios';

async function getRooms(){
    await axios.get('/api/rooms')
        .then(function(response){
            console.log(response);

        })
        .catch(function(error){
            console.log(error);
        });
}

export default getRooms;