import React from 'react'
import {render} from 'react-dom'

import './style/style-index.scss'

import App from './components/App'
import configureStore from "./store/configureStore";


import {getInitialState} from './reducers/initial-state';
import {Provider} from "react-redux";

const state = getInitialState();
const store = configureStore(state);

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
