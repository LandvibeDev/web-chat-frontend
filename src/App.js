import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { ChatConstructor, ChatRoomDashboard } from './components/pages';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ChatRoomDashboard} />
            <Switch>
                <Route path="/rooms" component={ChatConstructor} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
