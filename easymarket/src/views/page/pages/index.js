import React, { Component } from 'react';
import ReactSwiper from "react-swipe";
import "./index.scss"
class page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let opt = {
            auto: 1000,
            autoPlay: true, //是否开启自动播放
            currentPoint: 1, //初始位置，默认从0即第一个元素开始
            distance: 620, // 每次移动的距离，卡片的真实宽度
        }
        return (
            <section>
                <div className="box">
                    <ReactSwiper swipeOptions={opt} className="imgBox">
                        <div className="slide">
                            <img
                                src="http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="http://pic31.nipic.com/20130705/9527735_231540074000_2.jpg"
                                alt=""
                            />
                        </div>
                    </ReactSwiper>
                </div>
                <ul className="goods_category">
                    <li>
                        <span></span>
                        <p>居家</p>
                    </li>
                    <li>
                        <span></span>
                        <p>餐厨</p>
                    </li>
                    <li>
                        <span></span>
                        <p>配件</p>
                    </li>
                    <li>
                        <span></span>
                        <p>服装</p>
                    </li>
                    <li>
                        <span></span>
                        <p>志趣</p>
                    </li>
                </ul>
                <div className="brandTitle">品牌制造商直供</div>
                <div className="brandWrap">

                </div>
            </section>
        );
    }
}

export default page;
