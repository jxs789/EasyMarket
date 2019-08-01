import React, { Component } from 'react'
import "./index.scss";
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
class Swipers extends Component {
    componentDidMount() {
        new Swiper(this.refs.swiper, {
            // autoplay: {
            //     delay: 1000,//1秒切换一次
            //     disableOnInteraction: false,  //用户操作之后依然可以autoplay
            // },
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
            observer: true, //当siper内容改变后，从新计算宽高      没有这个会出现无法拖动的情况     //猪儿，好好敲，我回班了
            observeParents: true,//当siper父盒子改变后，从新计算宽高  因为父盒子一般都不是用数据渲染的，这条一般不用加  
        })
    }
    componentDidUpdate() {
        new Swiper(this.refs.swiper, {
            // autoplay: {
            //     delay: 1000,//1秒切换一次
            //     disableOnInteraction: false,  //用户操作之后依然可以autoplay
            // },
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
            observer: true, //当siper内容改变后，从新计算宽高      没有这个会出现无法拖动的情况     //猪儿，好好敲，我回班了
            observeParents: true,//当siper父盒子改变后，从新计算宽高  因为父盒子一般都不是用数据渲染的，这条一般不用加  
        })
    }

    render() {
        let data = this.props.data
        return (
            <div className="bannerbox" style={{ height: this.props.height + 'rem' }}>
                <div className="swiper-container" ref='swiper'>
                    <div className="swiper-wrapper">
                        {
                            data && data.map((item) => {
                                return (
                                    item.content ?
                                        <div className="slide swiper-slide" key={item.id + "slide"}>
                                            <img src={item.image_url} alt="" />
                                        </div>
                                        : <div className="slider swiper-slide" key={item.id + "slider"}>
                                            <img src={item.img_url} alt="" />
                                        </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default Swipers