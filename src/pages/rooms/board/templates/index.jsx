import React from 'react';
import styled from "styled-components";
import CardList from "../../../../components/organisms/CardList";
import Button from "../../../../components/atoms/Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function RoomBoardTemplate({rooms}) {
    return (
        <Container>
            <CardList rooms={rooms} />
            <Button onClick={()=>window.open('http://localhost:3000/rooms')}>채팅방 생성</Button>
        </Container>
    )
}

export default RoomBoardTemplate;
