import React from 'react';
import StoryRouter from 'storybook-react-router';
import RoomBoardTemplate from './index';

export default {
    title: 'pages/rooms/board',
    component: RoomBoardTemplate,
    decorators: [StoryRouter()],
    argsType: {
        rooms: { control: 'array' }
    }
};

export const standard = (args) => <RoomBoardTemplate {...args} />;
standard.args = {
    rooms: [{ id: 1, text: 'hello world' }, { id: 2, text: 'hi' }]
};
