import React from 'react';
import MessageEditor from './MessageEditor';

export default {
    title: 'components/organisms/MessageEditor',
    component: MessageEditor
};

export const Standard = (args) => <MessageEditor {...args} />;
Standard.args = {
    onSend: () => {}
};
