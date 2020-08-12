function mockGetRooms(mock) {
    mock.onGet('/rooms').reply(200, {
        users: [[{ id: 1, text: 'hello world' }, { id: 2, text: 'hi' }]]
    });
}

export default {
    mockGetRooms
};
