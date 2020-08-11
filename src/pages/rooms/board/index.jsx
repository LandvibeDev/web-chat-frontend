import React, { useEffect, useState } from 'react';
import RoomBoardTemplate from './templates';
import getRooms from '../../../service/getRooms';

function RoomBoard() {
    const [rooms, setRooms] = useState([]);

    async function fetchRooms() {
        const roomsData = await getRooms();
        setRooms([...roomsData]);
    }

    useEffect(() => {
        fetchRooms();
    }, []);
    return (
        <RoomBoardTemplate rooms={rooms} />
    );
}

export default RoomBoard;
