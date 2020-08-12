import React from 'react';
import StoryRouter from 'storybook-react-router';
import Linker from './Linker';

export default {
    title: 'components/atoms/Linker',
    component: Linker,
    decorators: [StoryRouter()]
};

export const linker = (args) => <Linker {...args} />;

linker.args = {
    to: '/',
    text: 'test'
};
