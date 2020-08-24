import React from 'react';
import styled from "styled-components";
import Text from "../atoms/Text";

const StyledCard = styled.div`
  display: inline-block;
  background-color: #ffe78f;
  margin: 1rem;
  width: 95%;
  height: 100%;
  padding: 1rem;
  border-radius: 10px;
`;

function Card({room}) {
    return (
        <StyledCard>
            <Text text={room.title} size="md" boxModel="sm"
                  onClick={()=>window.open('http://localhost:3000/rooms/'+room.id)}/>
        </StyledCard>
    );
}

export default Card;