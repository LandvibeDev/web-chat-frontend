import React from 'react';
import styled from "styled-components";
import Text from "../atoms/Text";
import { useHistory } from 'react-router-dom';

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
    const history=useHistory();
    return (
        <StyledCard>
            <Text text={room.title} size="md" boxModel="sm"
                  onClick={()=>history.push('/rooms/'+room.id)}/>
        </StyledCard>
    );
}

export default Card;