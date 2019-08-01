import React, { Component } from 'react'
import "./index.scss"
import { inject, observer } from "mobx-react"
import IscheckItem from "../../../components/IscheckItem"
import { Toast } from 'antd-mobile';
import Bs from "better-scroll"
@inject("pages")
@observer
class ShoppingCar extends Component {
    constructor(props) {
        super();
        this.state = {
            redact: 0,
            perItem: null
        }
    }
    componentDidMount() {
        this.props.pages.getCartIndex_data()
        new Bs(this.refs.cartGoodsListWrap, {
            probeType: 3,
            click: true
        })
    }
    //单选
    highlight(id) {
        this.setState({
            perItem: id
        })
        this.props.pages.getIsChecked(id)
    }
    //全选
    Allhighlight(flag) {
        this.props.pages.getAllChecked(flag * 1)
    }
    //编辑    完成 业务逻辑
    redactChange() {
        this.setState({
            redact: !this.state.redact
        })
        if (this.state.redact) {
            this.props.pages.getAllChecked(this.state.redact * 1)
        } else {
            this.props.pages.geteliminate()
        }
    }
    //减少
    decreaseCar(id) {
        this.props.pages.getCalculate(id, -1)
    }
    //增加
    increaseCar(id) {
        this.props.pages.getCalculate(id, +1)
    }
    del() {
        this.props.pages.delete()
    }
    //下单
    loadingToast() {
        Toast.loading('下单功能还未GET,耐心等待~', 1, () => {
        });
    }
    gotoDetail = (id) => {
        this.props.history.push(`/goods/${id}`)
    }
    render() {
        let { cartList } = this.props.pages.caraddcont
        let { redact } = this.state
        //判断上边是否全部选中状态，让下面也全部选中
        let isFlag = cartList && cartList.length !== 0 ? cartList.some(item => {
            return item.checked !== 1
        }) : null
        //总个数
        let aggregateNum = cartList ? cartList.reduce((pre, cur) => {
            pre += cur.checked === 1 ? cur.number : 0
            return pre
        }, 0) : 0
        ////总计
        let aggregate = cartList ? cartList.reduce((pre, cur) => {
            pre += cur.checked === 1 ? (cur.number) * (cur.market_price) : 0
            return pre
        }, 0) : 0
        //删除的时候选中的个数
        let cartMsNum = 0;
        cartList && cartList.forEach((item) => {
            if (item.checked === 1) {
                cartMsNum += 1
            }
        })
        return (
            <section className="cartBox">
                <ul className="serviceList">
                    <li><span>★</span>30天无忧退货</li>
                    <li><span>★</span>48小时快速退款</li>
                    <li><span>★</span>满88元免邮费</li>
                </ul>
                <div className="cartGoodsListWrap" ref="cartGoodsListWrap">
                    <div>
                        {
                            cartList && cartList.length !== 0 ? cartList.map((item) => {
                                return (
                                    <div className="cartItem" key={item.goods_id} >
                                        <IscheckItem {...this.props} iFlag={item.checked} click={this.highlight.bind(this, item.goods_id)} />
                                        <div className="goodsImg" onClick={() => this.gotoDetail(item.goods_id)}>
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        {
                                            redact === 0 ?
                                                <>
                                                    <div className="cartGoodsMsg">
                                                        <div>{item.goods_name}</div>
                                                        <div></div>
                                                        <div className="price">￥{item.market_price}</div>
                                                    </div>
                                                    <div className="cartGoodsNum">x{item.number}</div>
                                                </>
                                                :
                                                <div className="cartGoodEditWrap">
                                                    <div className="cartEditSizeName">已选择：</div>
                                                    <div className="cartEditNum">
                                                        <div className="price">￥{item.market_price}</div>
                                                        <div>
                                                            <div className="countOp">
                                                                <div onClick={this.decreaseCar.bind(this, item.goods_id)}>-</div>
                                                                <div ref="number">{item.number}</div>
                                                                <div onClick={this.increaseCar.bind(this, item.goods_id)}>+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
                <div className="cartGoodsDo">
                    <IscheckItem {...this.props} click={this.Allhighlight.bind(this, isFlag)} iFlag={!isFlag} />
                    <div className="cartMsgAll">已选 {"(" + (!this.state.redact ? aggregateNum : cartMsNum) + ")"}   {!this.state.redact ? "￥" + aggregate : ''} </div>
                    <div className="cartAllDoButton" ref="cartAllDoButton" onClick={() => this.redactChange()}>{this.state.redact ? "完成" : "编辑"}</div>
                    <div className="cartAllDoButton pay" onClick={this.state.redact ? this.del.bind(this) : this.loadingToast.bind(this)}>{this.state.redact ? "删除所选" : "下单"}</div>
                </div>
            </section>
        )
    }
}
export default ShoppingCar