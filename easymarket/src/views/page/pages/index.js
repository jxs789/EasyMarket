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
    render() {
        let pageData = this.props.pages.pageData;
        console.log(pageData)
        return (
            <section>
                <Swipers {...this.props} data={this.props.pages.pageData.banner} />
                <ul className="goods_category">
                    <li>
                        <span></span>
                        <p>居家</p>
                    </li>
                </ul>
                <div className="brandBox">
                    <div className="brandTitle">品牌制造商直供</div>
                    <div className="brandWrap">
                        <a className="brandItem">
                            <div className="brandItemlt">
                                <div className="brandItemName">CK制造商</div>
                                <div className="brandItemMinPrice">39元起</div>
                            </div>
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt="imgLazyLoad" />
                        </a>
                        <a className="brandItem">
                            <div className="brandItemlt">
                                <div className="brandItemName">MUJI制造商</div>
                                <div className="brandItemMinPrice">12.9元起</div>
                            </div>
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg" alt="imgLazyLoad" />
                        </a>
                        <a className="brandItem">
                            <div className="brandItemlt">
                                <div className="brandItemName">WMF制造商</div>
                                <div className="brandItemMinPrice">9.9元起</div>
                            </div>
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/abcfa79205679db51198adc19c184dd1.jpg" alt="imgLazyLoad" />
                        </a>
                        <a className="brandItem">
                            <div className="brandItemlt">
                                <div className="brandItemName">Coach制造商</div>
                                <div className="brandItemMinPrice">49元起</div>
                            </div>
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/b5cd73d3b310bad02539412f064d4ea1.jpg" alt="imgLazyLoad" />
                        </a>
                    </div>
                </div>
                <div className="newGoodsBox">
                    <div className="newGoodsTitle">新品首发</div>
                    <div className="newGoodsWrap">
                        <a className="newGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt="imgLazyLoad" />
                            <div className="newGoodsName">蔓越莓曲奇 200克</div>
                            <div className="newGoodsPrice">￥36</div>
                        </a>
                        <a className="newGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt="imgLazyLoad" />
                            <div className="newGoodsName">蔓越莓曲奇 200克</div>
                            <div className="newGoodsPrice">￥36</div>
                        </a>
                        <a className="newGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt="imgLazyLoad" />
                            <div className="newGoodsName">蔓越莓曲奇 200克</div>
                            <div className="newGoodsPrice">￥36</div>
                        </a>
                        <a className="newGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt="imgLazyLoad" />
                            <div className="newGoodsName">蔓越莓曲奇 200克</div>
                            <div className="newGoodsPrice">￥36</div>
                        </a>
                    </div>
                </div>
                <div className="hotGoodsBox">
                    <div className="hotGoodsTitle">人气推荐</div>
                    <div className="hotGoodsWrap">
                        <a className="hotGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt="imgLazyLoad" />
                            <div className="hotGoodsInfos">
                                <div className="hotGoodsName">双宫茧桑蚕丝被 空调被</div>
                                <div className="hotGoodsInfo">一级桑蚕丝，吸湿透气柔软</div>
                                <div className="hotGoodsPrice">￥699</div>
                            </div>
                        </a>
                        <a className="hotGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt="imgLazyLoad" />
                            <div className="hotGoodsInfos">
                                <div className="hotGoodsName">双宫茧桑蚕丝被 空调被</div>
                                <div className="hotGoodsInfo">一级桑蚕丝，吸湿透气柔软</div>
                                <div className="hotGoodsPrice">￥699</div>
                            </div>
                        </a>
                        <a className="hotGoodsItem">
                            <img className="imgLazyload" src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt="imgLazyLoad" />
                            <div className="hotGoodsInfos">
                                <div className="hotGoodsName">双宫茧桑蚕丝被 空调被</div>
                                <div className="hotGoodsInfo">一级桑蚕丝，吸湿透气柔软</div>
                                <div className="hotGoodsPrice">￥699</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="topGoodsBox">
                    <div className="topGoodsTitle">专题精选</div>
                    <div className="topGoodsWrap">
                        <div className="swiper-container" ref='swiper'>
                            <div className="swiper-wrapper">
                                <div className="slide swiper-slide">
                                    <a className="topGoodsItem">
                                        <img className="imgLazyload" src="https://yanxuan.nosdn.127.net/14943267735961674.jpg" alt="imgLazyLoad" />

                                        <div className="topGoodSubTitle">关爱他成长的每一个足迹 <span className="topGoodPrice">￥0元起</span></div>
                                        <div className="topGoodsTitle">专业运动品牌同厂，毛毛虫鞋买二送一</div>
                                    </a>
                                </div>
                                <div className="slide swiper-slide">
                                    <a className="topGoodsItem">
                                        <img className="imgLazyload" src="https://yanxuan.nosdn.127.net/14942996754171334.jpg" alt="imgLazyLoad" />
                                        <div className="topGoodSubTitle">一次解决5个节日送礼难题 <span className="topGoodPrice">￥59.9元起</span></div>
                                        <div className="topGoodsTitle">这些就是他们想要的礼物清单</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cateGoryBox'>
                    <div className='cateGoryName'>厨具</div>
                    <div className='cateGoryGoodsWrap'>
                        <a tag="div">
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a tag="div">
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a>
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a>
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a>
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a>
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a>
                            <div className='goodsItemImg'>
                                <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                            </div>
                            <div className='goodsItemName'>100年传世珐琅锅</div>
                            <div className='goodsItemPrice'>￥268</div>
                        </a>
                        <a className="categoryMoreGoods">
                            {/* href="#/categorys/1005000" */}
                            <div>更多居家好物</div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" /></a>
                    </div>
                </div>

            </section>
        );
    }
}

export default page;
