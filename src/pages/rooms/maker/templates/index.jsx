import React, { useState } from 'react';
import 'css/RoomMake.css';
import userIcon from 'userIcon.PNG';
import createRooms from 'service/createRooms';
import { useHistory } from 'react-router-dom';

function RoomMakerTemplate() {
    const [title, setTitle] = useState('');
    const history = useHistory();

    function on(func) {
        return function (event) {
            event.stopPropagation();
            func(event);
        };
    }

    const onChange = on((event) => setTitle(event.target.value));

    const create = async () => {
        if (title.length < 2 || title.length > 20) {
            alert('채팅방 생성이 실패하였습니다.');
        } else {
            const isSuccesses = await createRooms(title);
            if (isSuccesses) {
                history.goBack();
            } else {
                alert('채팅방 생성이 실패하였습니다.');
            }
        }
    };

    const onEnterPress = on((event) => event.key === 'Enter' && create());

    const onCreateClick = on(create);

    return (
        <div>
            <div className="RoomMakeHeader">
                <label className="fontSetting">서비스명</label>
                <img className="userIcon" src={userIcon} alt="" />
            </div>

            <div>
                <div className="enrollment">
                    <label className="radiusBox">채팅방 개설</label>
                    <div className="RoomMakeTitle">
                        <label className="fontSetting">채팅방 명 : </label>
                        <input className="RoomMakeInput"
                            id="title"
                            onChange={onChange}
                            onKeyPress={onEnterPress}
                            value={title}
                            placeholder="입력해주세요." />
                    </div>
                    <button className="RoomMakeBtn" onClick={onCreateClick}>생성</button>
                </div>
            </div>
        </div>
    );
}

export default RoomMakerTemplate;
