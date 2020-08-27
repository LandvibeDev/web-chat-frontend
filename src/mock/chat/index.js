function getMessages(mock) {
    mock.onGet('/api/rooms/1/messages')
        .reply(200, [{
            id: 1, contents: 'hello world', messageType: 'TEXT', createdAt: '2020-08-01 00:00:00', createdBy: 1
        }, {
            id: 2, contents: 'hi', messageType: 'TEXT', createdAt: '2020-08-01 01:00:00', createdBy: 2
        }, {
            id: 3, contents: 'good', messageType: 'TEXT', createdAt: '2020-08-02 00:00:00', createdBy: 2
        }]);
}

function createMessage(mock) {
    mock.onPost('/api/rooms/1/messages').reply(201, {
        id: 4,
        contents: 'hello!',
        createdAt: '2020-08-01 10:00:00',
        messageType: 'TEXT',
        createdBy: 1
    });
}

export default {
    getMessages, createMessage
};
