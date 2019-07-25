import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index';
import { Provider } from "mobx-react";
import Store from "./store"
import './iconfont/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';  
// import DatePicker from 'antd-mobile/lib/date-picker'

ReactDOM.render(<Provider {...Store}><App /></Provider>, document.getElementById('root'));

