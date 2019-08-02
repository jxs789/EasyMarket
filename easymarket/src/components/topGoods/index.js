import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss'

class TopGoods extends Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    gotoDetail = (id, title) => {
        this.props.history.push(`/specialDetail/${id}`, { params: { title: title } })
    }
    render() {
        let { item } = this.props;
        return (
            <WingBlank>
                <Carousel
                    className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.9}
                    autoplay
                    infinite
                    dots={false}
                    afterChange={index => this.setState({ slideIndex: index })}
                >
                    {item && item.map((val) => (
                        <a
                            key={val.id}
                            style={{
                                display: 'block',
                                position: 'relative',
                                height: this.state.imgHeight
                            }}
                        >
                            <div className="topGoodsItem" onClick={() => this.gotoDetail(val.id, val.title)}>
                                <img
                                    src={val.item_pic_url}
                                    alt=""
                                    style={{ verticalAlign: 'top' }}
                                    onLoad={() => {
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <div className="topGoodSubTitle">{val.title} <span className="topGoodPrice">￥{val.price_info}元起</span></div>
                                <div className="nofont">{val.subtitle}</div>
                            </div>
                        </a>
                    ))}
                </Carousel>
            </WingBlank>

        )
    }

}
export default TopGoods