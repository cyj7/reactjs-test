import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

render(
    <h1>hello</h1>,
    document.getElementById('root')
);
