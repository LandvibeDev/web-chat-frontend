import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Room from './room';
import Chat from './chat';

function init() {
    if (process.env.NODE_ENV === 'development') {
        const functions = Object.values({ ...Room, ...Chat });
        const mock = new MockAdapter(axios);
        functions.forEach((func) => func(mock));
    }
}

export default init;
