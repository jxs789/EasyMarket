import React, { Component } from 'react';
import Header from '../../../../components/header'
import Addressset from '../../../../components/addressset'
import './index.scss'
import { Button, Toast } from 'antd-mobile';
import { inject, observer } from "mobx-react";

@inject("my")
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            addressInfo: {},
            addressDoType: 0,
        };
    }
    componentDidMount() {
        this.props.my.get_Address()
    }
    closeDo = () => {
        let { flag } = this.state;
        this.setState({
            flag: !flag,
        })
    }
    render() {
        let { addressData, collectData } = this.props.my;
        let { flag } = this.state;
        return (
            <div className='wrap'>
                {
                    flag ? <Addressset {...this.props} closeDo={this.closeDo} {...this.state} /> :
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
                                                        <p><span>{item.full_region}</span><i onClick={(e) => this.delSite(e, item.id)} className='iconfont icon-lajitong'></i></p>
                                                        <p>{item.address}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                }
                            </ul>
                            <div className='addRess'>
                                <Button type="primary" onClick={() => this.addAddress()}>新建地址</Button>
                            </div>
                        </section>
                }
            </div>
        );
    }

    closeModel = () => {
        let { visibleFlag } = this.state;
        this.setState({
            visibleFlag: !visibleFlag
        })
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
            addressInfo: {
                province_id: 2,
                city_id: 37,
                district_id: 403,
                province_name: '北京',
                city_name: '北京市',
                district_name: '东城区'
            },
            addressDoType: 1
        })
    }
    //删除地址
    delSite = (e, id) => {
        e.stopPropagation();
        this.props.my.del_Site(id)
        Toast.success('删除成功!', 1);
    }

}

export default index;