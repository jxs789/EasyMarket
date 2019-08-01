import React, { Component, Fragment } from 'react'
import Header from "../../components/header/"
import GoodsList from "../../components/goodsList/"
import "./index.scss"
import { inject, observer } from "mobx-react"
import { Toast } from 'antd-mobile';
import Swipers from "../swiper"
import BS from "better-scroll"
import CommentItem from "../commentItem/"
@inject("pages")
@inject("my")
@observer
@observer
class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userHasCollect: 0,
            modal2: false,
            modal1: false,
            flag: false,
            goodsNum: 0,
            defaultValue: "",
            ind1: 0,
            ind2: 0
        };
    }
    async componentDidMount() {
        const { match: { params: { id } } } = this.props;
        await this.props.pages.getGoodsDetail_data(id)
        await this.props.pages.getGoodsrelated_data(id)
        await this.props.pages.getCarGoodscount_data()
        new BS(this.refs.goodsCont, {
            probeType: 3,
            click: true
        })
        let { userHasCollect } = this.props.pages.goodsDetail;
        this.setState({
            userHasCollect
        })
    }
    showModal() {
        this.setState({
            flag: !this.state.flag
        })
    }
    onClose() {
        this.setState({
            flag: false
        })
    }
    popupCar() {
        this.setState({
            flag: true
        })
    }
    //减少
    decrease() {
        if (this.state.goodsNum === 0) {
            return
        }
        this.setState({
            goodsNum: this.state.goodsNum -= 1
        })
    }
    //增加
    increase() {
        this.setState({
            goodsNum: this.state.goodsNum += 1
        })
    }
    //切换样式
    sizeItemChange(ind, index) {
        if (index === 0) {
            this.setState({
                ind1: ind
            })
        } else if (index === 1) {
            this.setState({
                ind2: ind
            })
        }
    }
    //添加收藏
    async linkChange() {
        let { match: { params: { id } } } = this.props
        await this.props.pages.getcollectDaddordelete_data({ typeId: 0, valueId: id })
        let { type } = this.props.pages.collect
        this.setState({ userHasCollect: type === 'add' ? 1 : 0 })
    }
    //调到购物车
    cartChanege() {
        this.props.history.push(`/home/shoppingCar`)
    }
    //加入购物车
    failToast() {
        if (this.state.goodsNum === 0) {
            Toast.fail('请选择商品数量', 1);
        } else if (this.state.goodsNum >= 0) {
            Toast.success('添加成功', 1);
            let goodsId = this.props.pages.goodsDetail.info.id
            let productId = this.props.pages.goodsDetail.productList[0].id
            let number = this.state.goodsNum
            this.props.pages.getCartAdd_data({ goodsId, productId, number })
        }
    }
    loadingToast() {
        Toast.loading('下单功能还未GET,耐心等待~', 1, () => {
        });
    }
    render() {

        let { info, issue, gallery, attribute, brand, comment, specificationList } = this.props.pages.goodsDetail;
        let { goodsrelated, carContnum } = this.props.pages
        return (
            <div className="wrap goodsBox" >
                <div className="goodsPage">
                    <Header data={info && info.name} {...this.props} className="title goodsTitle" />
                    <div className="goodsCont" ref="goodsCont" onClick={() => this.popupCar()}>
                        <div>
                            {
                                gallery && gallery.length !== 0 ? <div className="imgbox-c"><Swipers {...this.props} data={gallery} height={7.7} /></div> : <div className="imgBox-k">
                                </div>
                            }
                            <ul className="serviceList">
                                <li><span>★</span>30天无忧退货</li>
                                <li><span>★</span>48小时快速退款</li>
                                <li><span>★</span>满88元免邮费</li>
                            </ul>
                            <div className="goodsWrap">
                                <div className="goodsNameTitle">{info && info.name}</div>
                                <div className="goodsNameSubTitle">{info && info.goods_brief}</div>
                                <div className="goodsPriceTitle">￥{info && info.retail_price}</div>
                                <div className="goodsBrandTitle">{brand && brand.name ? <div>{brand && brand.name}</div> : ""}</div>
                            </div>
                            <div className="goodsSize">
                                <div>
                                    {specificationList && specificationList.map((item, index) => {
                                        return item.valueList[this.state['ind' + (1 + index)]].value
                                    })}
                                </div>
                                <div>x {this.state.goodsNum}</div>
                                <div onClick={() => this.popupCar()}>选择规格<i className="iconfont icon-angle-right"></i></div>
                            </div>
                            {comment && comment.data.add_time ? <div className='goodsComment'>
                                <div className='goodsCommentTitle'>
                                    <div>评论（{comment && comment.count}）</div>
                                    <div>
                                        <a href={`/allcomment/${info && info.id}?typeId=0`}>
                                            查看全部
                                    <i className='iconfont icon-angle-right'></i>
                                        </a>
                                    </div>
                                </div>
                                {/**
                                 * 评论
                                 */ }
                                <div className='commentList'>
                                    <CommentItem {...this.props} data={comment.data} />
                                </div>
                            </div> : null}
                            <div className="goodscommodity">
                                <div className="goodsLine">
                                    商品参数
                                </div>
                                <div className="goodsAttributeList">
                                    {
                                        attribute && attribute.length !== 0 ? attribute.map((item, index) => {
                                            return (
                                                <div className="goodsAttributeItem" key={index}>
                                                    <div className="attributeLabel">{item.name}</div>
                                                    <div className="attributeContent">{item.value}</div>
                                                </div>
                                            )
                                        }) : null
                                    }
                                </div>
                                <div className="topicDetailImg" dangerouslySetInnerHTML={{ __html: info && info.goods_desc }}>

                                </div>
                                <div className="goodscommodity">
                                    <div className="goodsLine goodsLines">
                                        常见问题
                                     </div>
                                    <div className="problemWrap">
                                        {
                                            issue && issue.map((item) => {
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
                                    <div className="goodsLine ">
                                        大家都在看
                        </div>
                                </div>
                                <div className="goodsList">
                                    <div className="goodsList">
                                        {
                                            goodsrelated && goodsrelated.map((item) => {
                                                return (<GoodsList key={item.id} list_pic_url={item.list_pic_url} name={item.name} retail_price={item.retail_price} id={item.id} />)
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="goodsPageDo">
                        <div className={this.state.userHasCollect === 1 ? "like isLike" : "isLike"} onClick={this.linkChange.bind(this)}>{this.state.userHasCollect === 1 ? '★' : '☆'}</div>
                        <div className="cartNum" onClick={() => this.cartChanege()}>
                            <i className="iconfont icon-gouwuche"><span>{carContnum && carContnum + this.state.goodsNum * 1}</span></i>
                        </div>
                        <div className="addCart" onClick={() => this.popupCar()}>加入购物车</div><div className="payGoods" onClick={() => { this.loadingToast() }}>立即购买</div>
                    </div>
                    {this.state.flag === true ? <div className='am-modal-container-1564386063872'>
                        <div>
                            <div className='am-modal-mask'></div>
                            <div className='am-modal-wrap am-modal-wrap-popup' role='dialog' onClick={() => { this.onClose('modal1') }} >
                                <div className='am-modal am-modal-popup am-modal-popup-slide-up'>
                                    <div className='am-modal-content'>
                                        <div className='am-modal-body'>
                                            <div className='goodsSizeDo'>
                                                <div className='goodsSizeSetMsg'>
                                                    <img src={info && info.list_pic_url} alt="" />
                                                    <div className='gooodsSizePriceAndSize'>
                                                        <div>
                                                            单价：
                                                    <span>￥{info && info.retail_price}</span>
                                                        </div>
                                                        <div>
                                                            库存：
                                                    <span>{info && info.goods_number}{info && info.goods_unit}</span>
                                                        </div>
                                                        <div>
                                                            已选择：
                                                    <br />
                                                            {specificationList && specificationList.map((item) => {
                                                                return item.valueList[0].value
                                                            })}

                                                        </div>
                                                    </div>
                                                    <div className='closeModel' onClick={() => { this.onClose('modal1') }}>
                                                        <i className='iconfont icon-quxiao'></i>
                                                    </div>
                                                </div>

                                                <div className='goodsSizeWrap'>
                                                    {specificationList && specificationList.map((item, index) => {
                                                        return (
                                                            <div className="goodsSizeItem" key={item.specification_id}>
                                                                <div className="goodsSizeItemName">{item.name}</div>
                                                                <div className="goodsSizeListWrap">
                                                                    {
                                                                        item.valueList.map((val, ind) => {

                                                                            return (
                                                                                <Fragment key={val.id}>
                                                                                    <div className={this.state['ind' + (index + 1)] === ind ? "active" : "goodsSizeListItem"} onClick={() => this.sizeItemChange(ind, index)}>{val.value}</div>
                                                                                </Fragment>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })

                                                    }
                                                    <div className='goodsSizeItem'>
                                                        <div className='goodsSizeItemName'>数量</div>
                                                        <div className='goodsSizeListWrap'>
                                                            <div className='goodsBuyCount'>
                                                                <div className='onePx_border' onClick={() => { this.decrease() }}>-</div>
                                                                <div className='onePx_border'>{this.state.goodsNum}</div>
                                                                <div className='onePx_border' onClick={() => { this.increase() }}>+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='goodsDoWrap'>
                                                <div onClick={() => { this.failToast() }}>加入购物车</div>
                                                <div onClick={() => { this.loadingToast() }}>立即下单</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                </div>
            </div >
        )
    }
}
export default Goods;
