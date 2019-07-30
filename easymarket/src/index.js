import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index';
import { Provider } from "mobx-react";
import Store from "./store"
import './views/page/home/index.scss'
import "../src/fonts/iconfont.css"
import "antd/dist/antd.css"
import './iconfont/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';


ReactDOM.render(<Provider {...Store}><App /></Provider>, document.getElementById('root'));

