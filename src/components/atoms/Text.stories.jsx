import React from 'react';
import { action } from '@storybook/addon-actions';
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
        size: {
            type: { required: false },
            description: '크기 설정 구분자',
            control: {
                type: 'select',
                options: ['std', 'sm', 'md']
            }
        },
        boxModel: {
            type: { required: false },
            description: 'Padding | Margin | Border 설정하는 구분자',
            control: {
                type: 'select',
                options: ['std', 'sm']
            }
        }
    }
};

export const Standard = (args) => <Text {...args} />;
Standard.args = {
    text: 'Standard',
    size: 'std',
    boxModel: 'std'
};

export const Small = (args) => <Text {...args} />;
Small.args = {
    text: 'SmallSize',
    size: 'sm',
    boxModel: 'sm'
};

export const MediumSize = (args) => <Text {...args} />;
MediumSize.args = {
    text: 'MediumSize',
    size: 'md',
    boxModel: 'sm'
};

export const ClickAbleText = (args) => <Text {...args} />;
ClickAbleText.args = {
    text: 'ClickAbleText',
    size: 'md',
    boxModel: 'sm',
    onClick: action('onClick')
};
