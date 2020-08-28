import React, {useEffect, useState} from 'react';
import RoomBoardTemplate from './templates';
import getRooms from "../../../service/getRooms";

function RoomBoard() {
    const [rooms, updateRooms] = useState([]);

    useEffect(() => {
        (async () => {
            const roomList = await getRooms();
            updateRooms(roomList.rooms);
        })();
    }, []);
    return (
        <RoomBoardTemplate rooms={rooms}/>
    );
}

export default RoomBoard;
