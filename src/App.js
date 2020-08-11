import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { RoomMaker, RoomBoard } from './pages/rooms';

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
