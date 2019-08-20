import { Provider } from 'react-redux';
import { DvaOption } from './types/dva.d';
import { create } from 'dva-core';
import models from './models/index';
import * as React from 'react';
import { render } from 'react-dom';
import Router from './router';
import AppPage from './pages/app/App';

const options: DvaOption = {};

/* // redux-logger
if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    options.onAction = createLogger();
} */
const dva = create({
    ...options,
    onError(e: any) {
        console.error(e);
    }
});
models.forEach((model: any) => dva.model(model));
dva.start();

render(
    <Provider store={dva._store}>
        <Router />
    </Provider>,
    document.getElementById('root'),
);


