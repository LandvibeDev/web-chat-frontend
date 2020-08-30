import React from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';

const StyledCardList = styled.section`
  margin: 3em;
  padding: 2em;
  border-radius: 12px;
  background-color: white;
`;

function CardList({ rooms }) {
    return (
        <StyledCardList>
            {
                rooms.map((room) => <Card key={room.id} room={room} />)
            }
        </StyledCardList>
    );
}

export default CardList;
