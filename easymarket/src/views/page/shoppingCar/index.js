import React, { Component } from 'react'
import "./index.scss"
import { inject, observer } from "mobx-react"
@inject("pages")
@observer
class ShoppingCar extends Component {
    componentDidMount() {
        this.props.pages.getCartIndex_data()
    }
    render() {
        let { cartList, cartTotal } = this.props.pages.caraddcont
        console.log(cartTotal)
        return (
            <section className="cartBox">
                <ul className="serviceList">
                    <li><span>★</span>30天无忧退货</li>
                    <li><span>★</span>48小时快速退款</li>
                    <li><span>★</span>满88元免邮费</li>
                </ul>
                <div className="cartGoodsListWrap">
                    <div>
                        {
                            cartList && cartList.length !== 0 ? cartList.map((item, index) => {
                                console.log(item)
                                return (
                                    <div className="cartItem" key={item.goods_id}>
                                        <div className="isCheckItem">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt="check" />
                                        </div>
                                        <div className="goodsImg">
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        <div className="cartGoodsMsg">
                                            <div>{item.goods_name}</div>
                                            <div></div><div className="price">￥{item.market_price}</div>
                                        </div>
                                        <div className="cartGoodsNum">x{item.number}</div>
                                    </div>
                                )
                            }) : null

                        }
                    </div>

                </div>
                <div className="cartGoodsDo">
                    <div className="isItem">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==" alt="check" />
                    </div>
                    <div className="cartMsgAll">已选({cartTotal && cartTotal.goodsCount})  ￥{cartTotal && cartTotal.goodsAmount}</div>
                    <div className="cartAllDoButton">编辑</div>
                    <div className="cartAllDoButton pay">下单</div>
                </div>
            </section>
        )
    }
}
export default ShoppingCar