import React from 'react';
import StoryRouter from 'storybook-react-router';
import RoomMakerTemplate from './index';

export default {
    title: 'pages/rooms/maker',
    component: RoomMakerTemplate,
    decorators: [StoryRouter()]
};

export const standard = () => <RoomMakerTemplate />;
