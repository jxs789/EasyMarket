import React, { Component } from 'react';
import './index.scss'
import isCheck from '../../static/img/isCheck.png'
import noCheck from '../../static/img/noCheck.png'
import { PickerView, Modal } from 'antd-mobile';
import addresList from './address'
import { Button, Toast } from 'antd-mobile';
import { inject, observer } from "mobx-react";

@inject("my")
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDefault: false,
            visibleFlag: false,
            newPicker: "",
            provinceId: 2,
            cityId: 37,
            districtId: 403,
            nameVal: '',
            telVal: '',
            addressVal: '',
            id: ''
        };
    }
    //改变地址
    changePicker = () => {
        const firstData = addresList.filter(item => item.value === this.state.provinceId)
        const secondData = firstData.map(item => {
            return item.children.find(val => val.value === this.state.cityId)
        })
        const thirdData = secondData.map(item => {
            return item.children.find(val => val.value === this.state.districtId)
        })
        const str = firstData[0].label + "/" + secondData[0].label + "/" + thirdData[0].label;
        this.setState({
            newPicker: str
        })
    }
    componentDidMount() {
        this.changePicker()
        //父组件传的整条数据
        const { addressInfo } = this.props;
        if (addressInfo) {
            this.setState({
                cityId: addressInfo.city_id,
                districtId: addressInfo.district_id,
                provinceId: addressInfo.province_id,
                nameVal: addressInfo.name,
                telVal: addressInfo.mobile,
                addressVal: addressInfo.address,
                isDefault: addressInfo.is_default,
                id: addressInfo.id,
                newPicker: `${addressInfo.province_name}/${addressInfo.city_name}/${addressInfo.district_name}`
            })
        }
    }

    render() {
        let { isDefault, visibleFlag, newPicker, provinceId, cityId, districtId, nameVal, telVal, addressVal } = this.state;
        let { addressDoType } = this.props;
        return (
            <>
                <div className='add_ress'>
                    <div className="addressHeader">
                        {addressDoType === 1 ? '新增' : '修改'}地址
                </div>
                    <div className="onePx_bottom">
                        <input placeholder="姓名" value={nameVal} onChange={e => this.setState({ nameVal: e.target.value })} />
                    </div>
                    <div className="onePx_bottom">
                        <input placeholder="电话号码"
                            value={telVal} onChange={e => this.setState({ telVal: e.target.value })} />
                    </div>
                    <div className="onePx_bottom" onClick={() => this.openModel()}><p>{newPicker}</p></div>
                    <div className="onePx_bottom">
                        <input placeholder="详细地址"
                            value={addressVal} onChange={e => this.setState({ addressVal: e.target.value })} />
                    </div>
                    <div className="onePx_bottom">
                        <div className='isDefaultAddress' onClick={() => this.changeDetault()}>
                            设置默认地址
                                    <img src={isDefault ? isCheck : noCheck} alt="check" />
                        </div>
                    </div>

                    <Modal
                        popup
                        onClose={this.closeModel}
                        visible={visibleFlag}
                        animationType="slide-up"
                    >
                        <div className='sure_btn'>
                            <span onClick={this.closeModel}>取消</span>
                            <span onClick={this.tureModel}>确定</span>
                        </div>
                        <PickerView
                            onChange={(e) => this.pcickerChange(e)}
                            data={addresList}
                            value={[provinceId, cityId, districtId]}
                        />
                    </Modal>
                </div>
                <div className='closeAddress'>
                    <Button onClick={() => this.props.closeDo()}>取消</Button>
                    <Button type="primary" onClick={this.add_ok} >确定</Button>
                </div>
            </>
        );
    }
    //添加
    add_ok = () => {
        let { nameVal, telVal, addressVal, provinceId, isDefault, cityId, districtId, id } = this.state;
        let { addressDoType } = this.props;

        if (nameVal === '') {
            Toast.fail('姓名不能为空！')
            return
        }
        if (telVal === '') {
            Toast.fail('手机号码不能为空！')
            return
        }
        if (!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(telVal)) {
            Toast.fail('请输入正确的手机号码！')
            return
        }
        this.props.my.set_site({
            name: nameVal,
            mobile: telVal,
            province_id: provinceId,
            city_id: cityId,
            district_id: districtId,
            address: addressVal,
            is_default: isDefault,
            id
        })
        if (addressDoType === 1) {
            Toast.success('添加成功!', 1)
            this.props.closeDo()
        } else {
            Toast.success('修改成功!', 1)
            this.props.closeDo()
        }
    }

    //改变对号
    changeDetault = () => {
        let { isDefault } = this.state;
        this.setState({
            isDefault: !isDefault
        })
    }
    //打开遮罩
    openModel = () => {
        let { visibleFlag } = this.state
        this.setState({
            visibleFlag: !visibleFlag
        })
    }
    //改变城市
    pcickerChange = (e) => {
        this.setState({
            provinceId: e[0],
            cityId: e[1],
            districtId: e[2],
        })
        this.changePicker()
    }
    //隐藏遮罩
    closeModel = () => {
        let { visibleFlag } = this.state
        this.setState({
            visibleFlag: !visibleFlag
        })
    }
    //确认按钮
    tureModel = () => {
        let { visibleFlag } = this.state
        this.setState({
            visibleFlag: !visibleFlag
        })
        this.changePicker()
    }
}

export default index;