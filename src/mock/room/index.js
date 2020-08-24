function getRooms(mock) {
    mock.onGet('/api/rooms')
        .reply(200, {
            rooms: [{ id: 1, title: 'hello world' }, { id: 2, title: 'hi' }]
        });
}

function createRooms(mock) {
    mock.onPost('/api/rooms')
        .reply(201, {
            id: 23, title: 'good'
        });
}

export default {
    getRooms, createRooms
};

/* or
function init(mock) {
    mock.onGet('/rooms')
        .reply(200, {
            rooms: [{ id: 1, text: 'hello world' }, { id: 2, text: 'hi' }]
        })
        .onPost('/rooms')
        .reply(201, {
            id: 23, text: 'good'
        });
}

export default { init };
*/
