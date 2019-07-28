import React, { Component } from 'react'
import "./index.scss";
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
class Swipers extends Component {
    componentDidUpdate() {
        // console.log(this.props.pages)
        new Swiper(this.refs.swiper, {
            autoplay: {
                delay: 1000,//1秒切换一次
                disableOnInteraction: false,  //用户操作之后依然可以autoplay
            },
            loop: true,
            observer: true, //当siper内容改变后，从新计算宽高      没有这个会出现无法拖动的情况     //猪儿，好好敲，我回班了
            observeParents: true,//当siper父盒子改变后，从新计算宽高  因为父盒子一般都不是用数据渲染的，这条一般不用加  
        })
    }
    render() {
        let data = this.props.data
        return (
            <div className="bannerbox">
                <div className="swiper-container" ref='swiper'>
                    <div className="swiper-wrapper">
                        {
                            data && data.map((item) => {
                                return (
                                    <div className="slide swiper-slide" key={item.id}>
                                        <img src={item.image_url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Swipers
