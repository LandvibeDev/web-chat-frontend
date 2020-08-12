import React from 'react';
import Panel from './Panel';

export default {
    title: 'components/molecules/Panel',
    component: Panel
};

export const standard = () => <Panel width="40%" margin="2rem auto" padding="2rem">채팅방 생성</Panel>;
export const big = () => <Panel width="80%" margin="2rem auto" padding="2rem">채팅방 생성</Panel>;
