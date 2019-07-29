import React, { Component, Fragment } from 'react'
import { observer, inject, } from "mobx-react"
import Header from "../../../../components/header"
import GoodsList from "../../../../components/goodsList"
import { Tabs } from 'antd-mobile';
import BS from "better-scroll";
import "./index.scss"
@inject("pages")
@observer
class ChannelClassify extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            currentCategoryId: 0,
            channelData: [],
        }
    }
    // /*切换分类*/
    clickTab({ key, page }) {
        if (this.state.currentCategoryId !== key) {
            this.setState({
                page: page,
                currentCategoryId: key
            })
            window.scrollTo(0, 0)
            //获取分类ID分类Nav数据 传入id
            this.props.pages.getChannel_data(key)
            this.props.pages.getGood_data({ categoryId: key, page: 1, size: 1000 })
        }
    }
    componentWillMount() {
        const { match: { params: { id } } } = this.props
        this.setState({
            currentCategoryId: id * 1
        })
        this.props.pages.getGood_data({ categoryId: id, page: 1, size: 1000 })
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.pages.getChannel_data(id)
        new BS(this.refs.goodsListBox, {
            probeType: 3
        })
    }
    render() {
        const { match: { params: { id } } } = this.props
        let { goodlistData, channelData } = this.props.pages
        let { currentCategoryId, } = this.state
        const tabs = channelData.map((item, index) => {
            console.log(item.id)
            return (
                { "title": item.name, "key": item.id, "page": index }
            )
        })
        //渲染顶部分类数据
        let currentCategory = channelData.map((item) => {
            return (
                item.id === currentCategoryId ?
                    <Fragment key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.front_name}</div>
                    </Fragment> : null
            )
        })
        return (
            <div className="channel wrap">
                <Header {...this.props} data={"奇趣分类"} />
                <section className='channelClassifyBox'>
                    <div className="tabWrap">
                        <Tabs tabs={tabs} onTabClick={this.clickTab.bind(this)} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        </Tabs>
                    </div>
                    <div ref="goodsListBox" className="goodsListBox">
                        <div>
                            <div className="categoryDetail">
                                {currentCategory}
                            </div>
                            <div className="goodsList" >
                                {goodlistData.map((item, index) => {
                                    return (<GoodsList name={item.name} list_pic_url={item.list_pic_url} retail_price={item.retail_price} key={item.id}></GoodsList>)
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default ChannelClassify
