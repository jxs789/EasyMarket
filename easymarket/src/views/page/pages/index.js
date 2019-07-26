import React, { Component } from 'react';
import "./index.scss";
import Swipers from "../../../components/swiper"
import { inject, observer } from "mobx-react";
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
@inject("pages") //注入模块
@observer   //监听
class page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.pages.getpages_data();
        new Swiper(this.refs.swiper, {
            autoplay: {
                // delay: 1000,//1秒切换一次
                // disableOnInteraction: false,  //用户操作之后依然可以autoplay
            },
            observer: true, //当siper内容改变后，从新计算宽高      没有这个会出现无法拖动的情况     //猪儿，好好敲，我回班了
            observeParents: true,//当siper父盒子改变后，从新计算宽高  因为父盒子一般都不是用数据渲染的，这条一般不用加  
        })
    }
    change = (id) => {
        this.props.history.push(`/channelClassify/${id}`)
    }
    render() {
        let { banner, channel, brandList, categoryList, hotGoodsList, newGoodsList, topicList } = this.props.pages.pageData;
        return (
            <section className="bcColor">
                <Swipers {...this.props} data={banner} />
                <ul className="goods_category">
                    {
                        channel && channel.map((item) => {
                            return (
                                <li key={item.id} onClick={() => this.change(item.id)}>
                                    {/* <a href=""> */}
                                    <img className="iconImg" src={item.icon_url} alt="" />
                                    <p>{item.name}</p>
                                    {/* </a> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="brandBox">
                    <div className="brandTitle">品牌制造商直供</div>
                    <div className="brandWrap">
                        {
                            brandList && brandList.map((item) => {
                                return (
                                    <a className="brandItem" key={item.id}>
                                        <div className="brandItemlt">
                                            <div className="brandItemName">{item.name}</div>
                                            <div className="brandItemMinPrice">{item.floor_price}元起</div>
                                        </div>
                                        <img className="imgLazyload" src={item.new_pic_url} alt="imgLazyLoad" />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="newGoodsBox">
                    <div className="newGoodsTitle">新品首发</div>
                    <div className="newGoodsWrap">
                        {newGoodsList && newGoodsList.map((item) => {
                            return (
                                <a className="newGoodsItem" key={item.id}>
                                    <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                                    <div className="newGoodsName">{item.name}</div>
                                    <div className="newGoodsPrice">￥{item.retail_price}</div>
                                </a>
                            )
                        })

                        }

                    </div>
                </div>
                <div className="hotGoodsBox">
                    <div className="hotGoodsTitle">人气推荐</div>
                    <div className="hotGoodsWrap">
                        {
                            hotGoodsList && hotGoodsList.map((item) => {
                                return (
                                    <a className="hotGoodsItem" key={item.id}>
                                        <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                                        <div className="hotGoodsInfos">
                                            <div className="hotGoodsName">{item.name}</div>
                                            <div className="hotGoodsInfo">{item.goods_brief}</div>
                                            <div className="hotGoodsPrice">￥{item.retail_price}</div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="topGoodsBox">
                    <div className="topGoodsTitle">专题精选</div>
                    <div className="topGoodsWrap">
                        <div className="swiper-container" ref='swiper'>
                            <div className="swiper-wrapper">
                                {
                                    topicList && topicList.map((item) => {
                                        return (
                                            <div className="slide swiper-slide" key={item.id}>
                                                <a className="topGoodsItem">
                                                    <img className="imgLazyload" src={item.item_pic_url} alt="imgLazyLoad" />
                                                    <div className="topGoodSubTitle">{item.title} <span className="topGoodPrice">￥{item.price_info}元起</span></div>
                                                    <div className="topGoodsTitle">{item.subtitle}</div>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cateGoryBox'>
                    {
                        categoryList && categoryList.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className='cateGoryName'>{item.name}</div>
                                    {
                                        <div className='cateGoryGoodsWrap' key={item.id}>
                                            {item.goodsList.map((val) => (
                                                <a tag="div" key={val.id}>
                                                    <div className='goodsItemImg'>
                                                        <img src={val.list_pic_url} alt="" />
                                                    </div>
                                                    <div className='goodsItemName'>{val.name}</div>
                                                    <div className='goodsItemPrice'>￥{val.retail_price}</div>
                                                </a>
                                            ))}
                                            <a className="categoryMoreGoods">
                                                {/* href="#/categorys/1005000" */}
                                                <div>更多{item.name}好物</div>
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
                                            </a>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                    {/* <div className='cateGoryGoodsWrap'>

                    </div> */}
                </div>

            </section >
        );
    }
}

export default page;
