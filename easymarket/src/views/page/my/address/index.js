import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import Header from '../../../../components/header'
import Addressset from '../../../../components/addressset'
import './index.scss'
import { Button, Toast } from 'antd-mobile';

@inject("my") //注入模块
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            addressInfo: {},
            addressDoType: 0,
            
        };
    }
    componentDidMount() {
        this.props.my.get_Address()
    }
    render() {
        let { addressData, collectData } = this.props.my;
        let { flag } = this.state;
        // console.log(addressData)
        return (
            <div className='wrap'>

                {
                    flag ? <Addressset {...this.props} {...this.state} /> :
                        <section className='address'>
                            <Header {...this.props} data={'地址管理'} />
                            <ul>
                                {
                                    // item.is_default
                                    addressData && addressData.map(item =>
                                        (

                                            <li key={item.id} onClick={() => this.showAddress(item)}>
                                                {item.is_default === 1 && <div className="isChooseAddress" />}
                                                <div className='li_wrap'>
                                                    <span>{item.name}</span>
                                                    <div>
                                                        <div>{item.mobile}</div>
                                                        <p><span>{item.full_region}</span><i className='iconfont icon-lajitong'></i></p>
                                                        <p>{item.address}</p>
                                                    </div>
                                                </div>

                                            </li>
                                        ))
                                }
                            </ul>
                        </section>
                }
                <div className='addRess'>
                    {
                        flag ? <div className='closeAddress'>
                            <Button onClick={() => this.addAddress()}>取消</Button>
                            <Button type="primary" onClick={() => this.sure()}>确定</Button>
                        </div> : <Button type="primary" onClick={() => this.addAddress()}>新建地址</Button>
                    }
                </div>
            </div>
        );
    }
    //修改地址
    showAddress = (item) => {
        let { flag } = this.state;
        this.setState({
            flag: !flag,
            addressInfo: { ...item },
            addressDoType: -1
        })
    }
    //新建地址
    addAddress = () => {
        let { flag } = this.state;
        this.setState({
            flag: !flag,
            addressInfo: {},
            addressDoType: 1
        })
    }
    //确定
    sure = () => {
        // console.log(this.refs._name)
        // if (this._name.current.value === '') {
        //     Toast.fail('姓名不能为空！')
        //     return
        // }
        // if (this._phone.current.value === '') {
        //     Toast.fail('手机号码不能为空！')
        //     return
        // }
        // if (!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this._phone.current.value)) {
        //     Toast.fail('请输入正确的手机号码！')
        //     return
        // }
    }
}

export default index;