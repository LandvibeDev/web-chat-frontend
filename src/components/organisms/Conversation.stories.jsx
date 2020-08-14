import React from 'react';
import Conversation from './Conversation';

export default {
    title: 'components/organisms/Conversation',
    component: Conversation,
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

export const Standard = (args) => <Conversation {...args} />;
Standard.args = {
    user: 1,
    messages: [{
        id: 1, contents: 'hello world', type: 'TEXT', creator: 1
    }, {
        id: 2, contents: 'hi', type: 'TEXT', creator: 2
    }, {
        id: 3, contents: 'good', type: 'TEXT', creator: 2
    }]
};
