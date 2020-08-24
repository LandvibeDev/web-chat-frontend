import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RoomBoard, RoomMaker } from './pages/rooms';
import { ChatRoom } from './pages/chat';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={RoomBoard} />
            <Switch>
                <Route exact path="/rooms" component={RoomMaker} />
                <Route path="/rooms/:id" component={ChatRoom} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;