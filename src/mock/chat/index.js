function getChats(mock) {
    mock.onGet('/api/rooms/1')
        .reply(200, {
            messages: [{
                id: 1, contents: 'hello world', messageType: 'TEXT', createdAt: '2020-08-01 00:00:00', createdBy: 1
            }, {
                id: 2, contents: 'hi', messageType: 'TEXT', createdAt: '2020-08-01 01:00:00', createdBy: 2
            }, {
                id: 3, contents: 'good', messageType: 'TEXT', createdAt: '2020-08-02 00:00:00', createdBy: 2
            }]
        });
}

export default {
    getChats
};
