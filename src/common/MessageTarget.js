const MessageTarget = {
    MINE: 'MINE',
    THEIRS: 'THEIRS'
};

export function chooseType(user, createdBy) {
    if (!createdBy) {
        return MessageTarget.MINE;
    }

    return createdBy === user ? MessageTarget.MINE : MessageTarget.THEIRS;
}

export default MessageTarget;
