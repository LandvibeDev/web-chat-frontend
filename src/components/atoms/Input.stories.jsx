import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

export default {
    title: 'components/atoms/Input',
    component: Input,
    argTypes: {
        value: {
            description: '메시지 입력 내용',
            table: {
                type: { summary: ['string'] }
            },
            control: {
                type: 'text'
            }
        },
        groupRatio: {
            type: { required: false },
            description: '입력란 크기 비율',
            control: {
                type: 'range'
            }
        }
    }
};

export const Standard = (args) => <Input {...args} />;
Standard.args = {
    value: 'Standard',
    groupRatio: 3,
    onChange: action('onChange'),
    onKeyPress: action('onKeyPress')
};
