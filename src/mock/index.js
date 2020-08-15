import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Room from './room';
import Chat from './chat';

function willUseMockServer() {
    return process.env.NODE_ENV === 'development'
        && ['true', 'True', 'TRUE'].every((it) => process.env.REACT_APP_USE_API_SERVER !== it);
}

function init() {
    if (willUseMockServer()) {
        const functions = Object.values({ ...Room, ...Chat });
        const mock = new MockAdapter(axios);
        functions.forEach((func) => func(mock));
    }
}

export default init;
