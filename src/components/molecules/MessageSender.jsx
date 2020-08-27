import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const StyledMessageSender = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

function MessageSender(props) {
    const { onSend, direction } = props;
    const [inputMessage, setInputMessage] = useState({ value: '' });

    const on = (func) => (event) => {
        event.stopPropagation();
        func(event);
    };

    const sendInputMessage = () => {
        onSend(inputMessage.value);
        setInputMessage({ value: '' });
    };

    const onClick = on(sendInputMessage);

    const onKeyPress = on((event) => event.key === 'Enter' && sendInputMessage());

    const onChange = on((event) => setInputMessage({ value: event.target.value }));

    return (
        <StyledMessageSender direction={direction}>
            <Input value={inputMessage.value}
                groupRatio={5}
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <Button groupRatio={1}
                text="보내기"
                size="medium"
                onClick={onClick} />
        </StyledMessageSender>
    );
}

MessageSender.propTypes = {
    onSend: PropTypes.func.isRequired,
    direction: PropTypes.string
};

MessageSender.defaultProps = {
    direction: 'row'
};

export default MessageSender;
