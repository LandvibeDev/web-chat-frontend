import React from 'react';
import RoomBoardTemplate from './index';

export default {
    title: 'pages/rooms/board',
    component: RoomBoardTemplate,
    argTypes: {
        rooms: {
            type: { required: true },
            description: 'Room 리스트',
            table: {
                type: { summary: 'Array' }
            }
        }
    }
};

export const Standard = (args) => <RoomBoardTemplate {...args} />;
Standard.args = {
    rooms: [{ id: 1, title: 'hello world' }, { id: 2, title: 'hi' }]
};
