import React from 'react';
import ChatRoomTemplate from './index';

export default {
    title: 'pages/chat/room/template',
    component: ChatRoomTemplate,
    argTypes: {
        user: {
            type: { required: true },
            description: '유저 ID',
            table: {
                type: { summary: 'number' }
            },
            control: {
                type: 'number'
            }
        },
        messages: {
            type: { required: true },
            description: '메시지 리스트',
            table: {
                type: { summary: 'array' }
            }
        }
    }
};

export const Standard = (args) => <ChatRoomTemplate {...args} />;
Standard.args = {
    user: 1,
    messages: [{
        id: 1, contents: 'hello world', messageType: 'TEXT', createdAt: '2020-08-01 00:00:00', createdBy: 1
    }, {
        id: 2, contents: 'hi', messageType: 'TEXT', createdAt: '2020-08-01 01:00:00', createdBy: 2
    }, {
        id: 3, contents: 'good', messageType: 'TEXT', createdAt: '2020-08-02 00:00:00', createdBy: 2
    }]
};
