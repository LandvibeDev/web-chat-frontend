import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../molecules/Card';
import Button from '../atoms/Button';

const InternalSection = styled.section`
  width: 100%;
  min-height: 70%;
`;

function RoomBoardSection({ rooms }) {
    const history = useHistory();

    const onClick = () => {
        history.push('/rooms');
    };

    return (
        <InternalSection>
            {
                rooms.map(({ id, text }) => <Card key={id} text={text} padding="3rem" margin="3rem" />)
            }
            <Button onClick={onClick} text="채팅방 생성" margin="3rem auto" padding="1rem" width="80%" />
        </InternalSection>
    );
}

RoomBoardSection.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RoomBoardSection;
