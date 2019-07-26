import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import './index.scss'
import { inject, observer } from 'mobx-react'
import { getToken } from '../../../utils/index'

@inject('login')
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            pwd: ''
        };
    }

    render() {
        console.log(this.props.login.getLogin)

        return (
            <div className="wrap">
                <div className='wrap_top'>
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                </div>
                    <div className="wrap_inp">
                        <input value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                    </div>
                    <div className="wrap_inp">
                        <input className='inp' value={this.state.pwd} onChange={(e) => this.setState({ pwd: e.target.value })} />
                    </div>
                    <div className='wrap_btn'>
                        <Button type="primary" onClick={() => this.Submit()}>登录</Button>
                    </div>
                </div>
                );
            }
    Submit = () => {
        if (this.state.phone && this.state.pwd) {
                    this.props.login.get_login(this.state.phone, this.state.pwd)
                } else {
                    alert('请输入手机号或密码！')
                }
                }
            
    componentDidUpdate() {
        // console.log(this.props.login.getLogin)
        if (this.props.login.getLogin === 0) {
            // this.props.history.push('/home')
            if (this.props.location.pathname.indexOf('/login') === -1) {
                    console.log(this.props.location.pathname.indexOf('/login'))
                if (!getToken()) {
                    // dispatch(routerRedux.replace({
                    //     pathname: `/login`,
                    //     search: `?redirect=${encodeURIComponent(pathname)}`
                    // }))
                    this.props.history.push('/')
                }
                } else {    //登录过后跳首页
                if (getToken()) {
                    // dispatch(routerRedux.replace({
                    //     pathname: `/home`
                    // }))
                    // console.log('45')
                    this.props.history.push('/home')
                }
                }
            }
        }
    }
    
export default index;