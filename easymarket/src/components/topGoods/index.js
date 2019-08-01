import React, { Component } from 'react'
class TopGoods extends Component {
    gotoDetail = (id, title) => {
        this.props.history.push(`/specialDetail/${id}`, { params: { title: title } })
    }
    render() {
        let { item } = this.props;
        return (
            <div className="slide swiper-slide">
                <div className="topGoodsItem" onClick={() => this.gotoDetail(item.id, item.title)}>
                    <img className="imgLazyload" src={item.item_pic_url} alt="imgLazyLoad" />
                    <div className="topGoodSubTitle">{item.title} <span className="topGoodPrice">￥{item.price_info}元起</span></div>
                    <div className="topGoodsTitle">{item.subtitle}</div>
                </div>
            </div >
        )
    }

}
export default TopGoods