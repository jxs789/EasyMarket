import React, { Component } from 'react'
import { observer, inject, } from "mobx-react"
import Header from "../../../../components/header"
import { Tabs, WhiteSpace } from 'antd-mobile';
import "./index.scss"
@inject("pages")
@observer
class ChannelClassify extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         page: 0,
    //         currentCategoryId: 0
    //     }
    // }

    // goBack(currentCategoryId) {
    //     this.props.history.go(-1)
    // }
    // componentWillMount() {
    //     const { match: { params: { id } } } = this.props
    //     this.setState({
    //         currentCategoryId: id
    //     })
    // }
    // /*切换分类*/
    clickTab({ id }, index) {
        // if (this.state.currentCategoryId !== id) {
        //     this.setState({
        //         page: index,
        //         currentCategoryId: id
        //     })
        //     window.scrollTo(0, 0)
        // }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.pages.getChannel_data(id)
    }

    render() {
        let datas = this.props.pages.channelData
        console.log(datas)
        const tabs = datas && datas.map((item) => {
            // console.log(item)
            return (
                { "title": item.name, "key": item.id }
            )
        })

        return (
            <div className="wrap bcColor">
                <Header {...this.props} data={"奇趣分类"} />
                <section>
                    <div className="tabWrap">
                        <Tabs tabs={tabs} onTabClick={this.clickTab.bind(this)} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                        </Tabs>
                    </div>
                    <div className="categoryDetail">
                        <div>居家</div><div>回家，放松身心</div>
                        {/* <div>{currentCategory.name}</div>
                        <div>{currentCategory.front_name}</div> */}
                    </div>
                    <div className="goodsList">
                        {/* <GoodsList goodsList={goodsList}></GoodsList> */}
                        <a className="goodsItem">
                            <div className="goodsItemImg">
                                <img className="imgLazyload loadEnd" src="http://yanxuan.nosdn.127.net/1f67b1970ee20fd572b7202da0ff705d.png" alt="imgLazyLoad" />
                            </div><div className="goodsItemName">母亲节礼物-舒适安睡组合</div><div className="goodsItemPrice">￥2598元</div></a>
                        <a className="goodsItem">
                            <div className="goodsItemImg">
                                <img className="imgLazyload loadEnd" src="http://yanxuan.nosdn.127.net/1f67b1970ee20fd572b7202da0ff705d.png" alt="imgLazyLoad" />
                            </div><div className="goodsItemName">母亲节礼物-舒适安睡组合</div><div className="goodsItemPrice">￥2598元</div></a>
                    </div>

                </section>


            </div>
        )
    }
}
export default ChannelClassify
