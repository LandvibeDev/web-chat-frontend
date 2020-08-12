import React from 'react';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

export default {
    title: 'components/organisms/Text',
    component: Header,
    decorators: [StoryRouter()]
};

export const standard = () => <Header />;
