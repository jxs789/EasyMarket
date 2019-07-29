import React, { Component, Fragment } from 'react'
import Header from "../../components/header/"
import GoodsList from "../../components/goodsList/"
import "./index.scss"
import { inject, observer } from "mobx-react"
import BS from "better-scroll"
@inject("pages")
@observer

class Goods extends Component {
    componentDidMount() {
        const { match: { params: { id } } } = this.props
        console.log(id)
        this.props.pages.getGoodsDetail_data(id)
        this.props.pages.getGoodsrelated_data(id)
        // new BS(this.refs.goodsBox, {
        //     probeType: 3
        // })
    }

    render() {
        let { info, issue } = this.props.pages.goodsDetail
        let { goodsrelated } = this.props.pages
        return (
            <div className="wrap goodsBox" ref="goodsBox">
                <div className="goodsPage">
                    <Header data={info && info.name} {...this.props} className="title" />
                    <div className="imgBox">
                        1
                    </div>
                    <ul className="serviceList">
                        <li><span>★</span>30天无忧退货</li>
                        <li><span>★</span>48小时快速退款</li>
                        <li><span>★</span>满88元免邮费</li>
                    </ul>
                    <div className="goodsWrap">
                        <div className="goodsNameTitle">{info && info.name}</div>
                        <div className="goodsNameSubTitle">{info && info.goods_brief}</div>
                        <div className="goodsPriceTitle">￥{info && info.retail_price}</div>
                    </div>
                    <div className="goodsSize"><div></div><div>x 0</div>
                        <div>选择规格<i>》</i></div>
                    </div>
                    <div className="goodscommodity">
                        <div className="goodsLine">
                            商品参数
                        </div>
                        <div className="goodsCont"></div>
                    </div>
                    <div className="topicDetailImg"></div>
                    <div className="goodscommodity">
                        <div className="goodsLine">
                            常见问题
                        </div>
                        <div className="problemWrap">
                            {
                                issue && issue.map((item, index) => {
                                    return (
                                        <Fragment key={item.id}>
                                            <div className="problemLabel"><span>√</span>{item.question}</div>
                                            <div className="problemContent">{item.answer}</div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="goodscommodity">
                        <div className="goodsLine">
                            大家都在看
                        </div>
                    </div>
                    <div className="goodsList">
                        <div className="goodsList">
                            {
                                goodsrelated && goodsrelated.map((item) => {
                                    console.log(item)
                                    return (<GoodsList key={item.id} list_pic_url={item.list_pic_url} name={item.name} retail_price={item.retail_price} />)
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Goods;
