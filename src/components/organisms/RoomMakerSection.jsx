import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import crateRooms from '../../service/createRoom';
import Button from '../atoms/Button';
import InputBox from '../molecules/InputBox';
import Panel from '../molecules/Panel';

const InternalSection = styled.section`
  width: 100%;
  min-height: 70%;
`;

function RoomMakerSection() {
    const [name, setName] = useState('');
    const history = useHistory();

    const onClick = () => {
        history.push('/');
        crateRooms(name);
        setName('');
    };

    const onChange = (event) => {
        setName(event.target.value);
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    };

    return (
        <InternalSection>
            <Panel width="40%" margin="2rem auto" padding="2rem">채팅방 생성</Panel>
            <InputBox label="이름" onChange={onChange} onKeyPress={onKeyPress} name={name} margin="10em 0" />
            <Button onClick={onClick} text="생성" margin="3rem auto" padding="1rem" width="80%" />
        </InternalSection>
    );
}

export default RoomMakerSection;
