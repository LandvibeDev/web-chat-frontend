import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RoomBoard, RoomMaker } from './pages/rooms';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={RoomBoard} />
            <Switch>
                <Route path="/rooms" component={RoomMaker} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;