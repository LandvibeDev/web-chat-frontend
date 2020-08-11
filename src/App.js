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
            <Route exact path="/" component={RoomMaker} />
            <Switch>
                <Route path="/rooms" component={RoomBoard} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
