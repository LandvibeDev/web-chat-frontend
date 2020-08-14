import React from 'react';
import Text from './Text';

export default {
    title: 'components/atoms/Text',
    component: Text,
    argTypes: {
        text: {
            description: '내용',
            table: {
                type: { summary: ['string', 'number'] }
            },
            control: {
                type: 'text'
            }
        },
        type: {
            type: { required: false },
            description: '타입',
            control: {
                type: 'select',
                options: ['std', 'ms']
            }
        },
        size: {
            type: { required: false },
            description: '크기',
            control: {
                type: 'select',
                options: ['std', 'md']
            }
        }
    }
};

export const Standard = (args) => <Text {...args} />;
Standard.args = {
    text: 'Standard',
    type: 'std',
    size: 'std'
};

export const MessageType = (args) => <Text {...args} />;
MessageType.args = {
    text: 'MessageType',
    type: 'ms',
    size: 'md'
};
