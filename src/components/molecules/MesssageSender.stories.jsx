import React from 'react';
import MessageSender from './MessageSender';

export default {
    title: 'components/molecules/MessageSender',
    component: MessageSender,
    argTypes: {
        send: {
            description: '메시지 보내기 핸들러',
            table: {
                type: { summary: ['function'] }
            },
            action: 'clicked'
        },
        direction: {
            type: { required: false },
            description: '가로/세로 구분',
            control: {
                type: 'select',
                options: ['row', 'column']
            }
        }
    }
};

export const Default = (args) => <MessageSender {...args} />;
Default.args = {
    send: () => {}
};

export const Column = (args) => <MessageSender {...args} />;
Column.args = {
    send: () => {},
    direction: 'column'
};
