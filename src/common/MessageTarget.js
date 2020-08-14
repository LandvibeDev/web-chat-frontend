const MessageTarget = {
    MINE: 'MINE',
    THEIRS: 'THEIRS'
};

export function chooseType(user, creator) {
    return user === creator ? MessageTarget.MINE : MessageTarget.THEIRS;
}

export default MessageTarget;
