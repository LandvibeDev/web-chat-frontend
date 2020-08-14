const MessageType = {
    TEXT: 'TEXT'
};

export function isText(type) {
    return type === MessageType.TEXT;
}

export default MessageType;
