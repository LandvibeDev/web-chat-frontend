import React, {useState} from 'react';
import '../../../../css/RoomMake.css';
import userIcon from "../../../../../src/userIcon.PNG";
import axios from 'axios';

function RoomMakerTemplate({history}) {
    const [title, setTitle] = useState('');

    const onChange = (event) => {
        event.stopPropagation();
        setTitle(event.target.value);
    };

    const createRoom = () => {
        axios.post('/rooms', {
            title: title
        })
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    };

    const create = async () => {
        const isSuccesses = await createRoom(title);
        if (isSuccesses) {
            history.goBack();
        } else {
            alert('채팅방 생성이 실패하였습니다.');
        }
    };

    const onEnterPress = (event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
            create();
        }
    };

    const onCreateClick = (event) => {
        event.stopPropagation();
        create();
    };

    return (

        <div>
            <div className='RoomMakeHeader'>
                <label className='fontSetting'>서비스명</label>
                <img className='userIcon' src={userIcon} alt=""/>
            </div>

            <div>
                <div className='enrollment'>
                    <label className='radiusBox'>채팅방 개설</label>
                    <br/>
                    <br/> <br/>
                    <div className='RoomMakeTitle'>
                        <label className='fontSetting'>채팅방 명 : </label>
                        <input className='RoomMakeInput' id="title" onChange={onChange} onKeyPress={onEnterPress}
                               value={title} placeholder="입력해주세요."/>
                    </div>
                    <br/>
                    <br/>
                    <button className='RoomMakeBtn' onClick={onCreateClick}>생성</button>
                </div>
            </div>
        </div>
    );
}

export default RoomMakerTemplate;
