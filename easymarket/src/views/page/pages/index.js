import React, { Component } from 'react';
import "./index.scss";
import Swipers from "../../../components/swiper"
import { inject, observer } from "mobx-react";
import 'swiper/dist/css/swiper.min.css'
import BrandCont from "../../../components/brandCont/"
import Swiper from 'swiper'
import NewGoods from '../../../components/newGoods';
import HotGoods from "../../../components//hotGoods/"
import TopGoods from "../../../components//topGoods/";
import GoodList from "../../../components//goodsList/"
@inject("pages") //注入模块
@observer   //监听
class page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidUpdate() {
        new Swiper(this.refs.swiper, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            // autoplay: {
            //     delay: 1000,//1秒切换一次
            //     disableOnInteraction: false,  //用户操作之后依然可以autoplay
            // },
            observer: true, //当siper内容改变后，从新计算宽高      没有这个会出现无法拖动的情况     //猪儿，好好敲，我回班了
            observeParents: true,//当siper父盒子改变后，从新计算宽高  因为父盒子一般都不是用数据渲染的，这条一般不用加  
        })
    }
    componentDidMount() {
        this.props.pages.getpages_data();
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
                                    <img className="iconImg" src={item.icon_url} alt="" />
                                    <p>{item.name}</p>
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
                                    <BrandCont  {...this.props} item={item} key={item.id} />
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
                                <NewGoods  {...this.props} key={item.id} item={item} />
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
                                    <HotGoods  {...this.props} key={item.id} item={item} />
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
                                            <TopGoods  {...this.props} key={item.id} item={item}></TopGoods>
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
                                                <GoodList key={val.id} list_pic_url={val.list_pic_url} name={val.name} retail_price={val.retail_price} id={val.id} {...this.props} />
                                            ))}
                                            <a className="categoryMoreGoods" href={`/channelClassify/${item.id}`}>
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
                </div>
            </section >
        );
    }
}

export default page;
