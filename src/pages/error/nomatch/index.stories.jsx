import React from 'react';
import StoryRouter from 'storybook-react-router';
import NoMatch from './index';

export default {
    title: 'pages/error/no-match/NoMatch',
    component: NoMatch,
    decorators: [StoryRouter()],
    argTypes: {
        history: {
            type: { required: true },
            description: 'react-router-dom 모듈의 history api',
            table: {
                type: { summary: 'object' }
            },
            control: {
                type: 'object'
            }
        }
    }
};

export const Standard = (args) => <NoMatch {...args} />;
