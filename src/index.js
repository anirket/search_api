import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { store, persister } from './Redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById("root"));