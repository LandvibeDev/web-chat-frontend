import React from 'react';
import styled from 'styled-components';
import CardList from 'components/organisms/CardList';
import Button from 'components/atoms/Button';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function RoomBoardTemplate({ rooms }) {
    const history = useHistory();
    return (
        <Container>
            <CardList rooms={rooms} />
            <Button onClick={() => history.push('/rooms')} text="채팅방 생성" />
        </Container>
    );
}

export default RoomBoardTemplate;
