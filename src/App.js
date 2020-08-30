import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RoomBoard, RoomMaker } from './pages/rooms';
import { ChatRoom } from './pages/chat';
import { NoMatch } from './pages/error';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={RoomBoard} />
                <Route exact path="/rooms" component={RoomMaker} />
                <Route path="/rooms/:id" component={ChatRoom} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;
