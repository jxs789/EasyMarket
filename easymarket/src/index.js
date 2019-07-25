import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index';
import { Provider } from "mobx-react";
import Store from "./store"
import './iconfont/iconfont.css'

ReactDOM.render(<Provider {...Store}><App /></Provider>, document.getElementById('root'));

