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
        info: {
            type: { required: true },
            description: '메시지 데이터 정보',
            table: {
                type: { summary: 'object' }
            },
            control: {
                type: 'object'
            }
        }
    }
};

export const Mine = (args) => <Message {...args} />;
Mine.args = {
    who: MessageTarget.MINE,
    type: MessageType.TEXT,
    info: {
        contents: 'Mine Message',
        createdAt: '오전 12:00:00'
    }
};

export const Theirs = (args) => <Message {...args} />;
Theirs.args = {
    who: MessageTarget.THEIRS,
    type: MessageType.TEXT,
    info: {
        contents: 'Theirs Message',
        createdAt: '오전 12:00:00'
    }
};

export const TEXT = (args) => <Message {...args} />;
TEXT.args = {
    who: MessageTarget.MINE,
    type: MessageType.TEXT,
    info: {
        contents: 'MINE TEXT Message',
        createdAt: '오전 12:00:00'
    }
};
