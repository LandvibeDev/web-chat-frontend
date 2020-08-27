import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
    title: 'components/atoms/Button',
    component: Button,
    argTypes: {
        text: {
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
        },
        size: {
            type: { required: false },
            description: '크기 설정 구분자',
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        color: {
            type: { required: false },
            description: '색상 설정 구분자',
            control: {
                type: 'select',
                options: ['standard', 'orange']
            }
        }
    }
};

export const Small = (args) => <Button {...args} />;
Small.args = {
    text: 'button',
    size: 'small',
    onClick: action('onClick')
};

export const Medium = (args) => <Button {...args} />;
Medium.args = {
    text: 'button',
    size: 'medium',
    onClick: action('onClick')
};

export const Large = (args) => <Button {...args} />;
Large.args = {
    text: 'button',
    size: 'large',
    onClick: action('onClick')
};

export const Standard = (args) => <Button {...args} />;
Standard.args = {
    text: 'button',
    size: 'medium',
    color: 'standard',
    onClick: action('onClick')
};

export const Orange = (args) => <Button {...args} />;
Orange.args = {
    text: 'button',
    size: 'medium',
    color: 'orange',
    onClick: action('onClick')
};
