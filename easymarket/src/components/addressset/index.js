import React, { Component } from 'react';
import './index.scss'
import isCheck from '../../static/img/isCheck.png'
import noCheck from '../../static/img/noCheck.png'
import { PickerView, Modal } from 'antd-mobile';
import addresList from './address'
class index extends Component {
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
        if (this.props.addressDoType === -1) {
            const {
                city_id,
                district_id,
                province_id,
                city_name,
                full_region,
            } = this.props.addressInfo;
            this.setState({
                provinceId: province_id,
                cityId: city_id,
                districtId: district_id
            })
        }
        this.changePicker()
    }

    constructor(props) {
        super(props);
        this.state = {
            isDefault: false,
            visibleFlag: false,
            // pickerVal: [2, 37, 403],
            newPicker: "",
            provinceId: 2,
            cityId: 37,
            districtId: 403,
        };
    }
    changeDetault = () => {
        let { isDefault } = this.state;
        this.setState({
            isDefault: !isDefault
        })
    }
    openModel = () => {
        let { visibleFlag } = this.state
        this.setState({
            visibleFlag: !visibleFlag
        })
    }
    pcickerChange = (e) => {
        this.setState({
            provinceId: e[0],
            cityId: e[1],
            districtId: e[2],
        })
    }
    closeModel = () => {
        let { visibleFlag } = this.state
        this.setState({
            visibleFlag: !visibleFlag
        })
    }
    tureModel = (e) => {
        let { visibleFlag } = this.state
        this.setState({
            visibleFlag: !visibleFlag
        })
        this.changePicker()
    }
    render() {
        const {
            name,
            city_id,
            district_id,
            province_id,
            is_default,
            mobile,
            address,
            full_region,
            id
        } = this.props.addressInfo;
        console.log(this.props.addressInfo)
        let { isDefault, visibleFlag, newPicker, provinceId, cityId, districtId } = this.state;
        let { addressDoType } = this.props;
        return (
            <div className='add_ress'>
                <div className="addressHeader">
                    {addressDoType === 1 ? '新增' : '修改'}地址
                </div>
                {
                    addressDoType === 1 ?
                        <>
                            <div className="onePx_bottom">
                                <input placeholder="姓名" />
                            </div>
                            <div className="onePx_bottom">
                                <input placeholder="电话号码"
                                />
                            </div>
                            <div className="onePx_bottom" onClick={() => this.openModel()}>
                                {newPicker}
                            </div>
                            <div className="onePx_bottom">
                                <input placeholder="详细地址" />
                            </div>
                            <div className="onePx_bottom">
                                <div className='isDefaultAddress' onClick={() => this.changeDetault()}>
                                    设置默认地址
                                    <img src={isDefault ? isCheck : noCheck} alt="check" />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="onePx_bottom">
                                <input placeholder="姓名" defaultValue={name} />
                            </div>
                            <div className="onePx_bottom">
                                <input placeholder="电话号码" defaultValue={mobile} />
                            </div>
                            <div className="onePx_bottom" onClick={() => this.openModel()}>
                                {newPicker}
                            </div>
                            <div className="onePx_bottom">
                                <input placeholder="详细地址" defaultValue={address} />
                            </div>
                            <div className="onePx_bottom">
                                <div className='isDefaultAddress' onClick={() => this.changeDetault()}>
                                    设置默认地址
                                    <img src={isDefault ? isCheck : noCheck} alt="check" />
                                </div>
                            </div>
                        </>
                }
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
        );
    }
}

export default index;