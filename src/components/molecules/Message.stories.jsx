import React from 'react';
import MessageTarget from 'common/MessageTarget';
import MessageType from 'common/MessageType';
import Message from './Message';

export default {
    title: 'components/molecules/Message',
    component: Message,
    argTypes: {
        who: {
            type: { required: true },
            description: '누구의 메시지인 지를 판별하는 타입',
            table: {
                type: { summary: 'MessageTarget' }
            },
            control: {
                type: 'select',
                options: Object.values(MessageTarget)
            }
        },
        type: {
            type: { required: true },
            description: '메시지 타입',
            table: {
                type: { summary: 'MessageType' }
            },
            control: {
                type: 'select',
                options: Object.values(MessageType)
            }
        },
        contents: {
            type: { required: true },
            description: '메시지 컨텐츠',
            table: {
                type: { summary: 'string' }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export const Mine = (args) => <Message {...args} />;
Mine.args = {
    who: MessageTarget.MINE,
    type: MessageType.TEXT,
    contents: 'Mine Message'
};

export const Theirs = (args) => <Message {...args} />;
Theirs.args = {
    who: MessageTarget.THEIRS,
    type: MessageType.TEXT,
    contents: 'Theirs Message'
};
