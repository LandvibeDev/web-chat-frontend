import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
    title: 'components/atoms/Button',
    component: Button,
    argTypes: {
        text: { control: 'text' },
        width: { control: 'text' },
        backgroundColor: { control: 'color' }
    }
};

export const button = (args) => <Button {...args} onClick={action('test')} />;

button.args = {
    width: '100%',
    text: 'Button'
};

export const standard = () => <Button text="생성" margin="3rem auto" padding="1rem" width="80%" />;
export const big = () => <Button text="채팅방 생성" margin="3rem auto" padding="1rem" width="80%" backgroundColor="black" />;
