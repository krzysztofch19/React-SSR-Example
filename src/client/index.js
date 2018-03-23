import React from 'react';
import { hydrate } from 'react-dom';
import App from '@common/App';

hydrate(
    <App data={window.__INITIAL_DATA__}/>,
    document.getElementById("app")
)