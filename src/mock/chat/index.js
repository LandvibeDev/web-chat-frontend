function getChats(mock) {
    mock.onGet('/api/rooms/1')
        .reply(200, {
            messages: [{
                id: 1, contents: 'hello world', type: 'TEXT', creator: 1
            }, {
                id: 2, contents: 'hi', type: 'TEXT', creator: 2
            }, {
                id: 3, contents: 'good evening', type: 'TEXT', creator: 2
            }]
        });
}

export default {
    getChats
};
