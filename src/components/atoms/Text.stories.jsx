import React from 'react';
import Text from './Text';

export default {
    title: 'components/atoms/Text',
    component: Text
};

export const standard = () => <Text text="Storybook" fontSize="1.5rem" />;
export const big = () => <Text text="Storybook" fontSize="3rem" />;
export const block = () => <Text text="Storybook" display="block" fontSize="2rem" />;
