import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { SwipeAction, List } from 'antd-mobile';
import Header from "../../../../components/header/"
import "./index.scss"
@inject("my") //注入模块
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    // toColse(item) {
    //     const collect = new Array(...this.props.collect)
    //     this.props.my.collectData.forEach((item) => {
    //         item.isClose = false
    //     })
    //     // const { apdateData } = this.props.actions
    //     // apdateData(collect)
    // }
    // toOpen(item) {
    //     this.props.my.set_collect(item)  //xiabiao
    // }
    componentDidMount() {
        this.props.my.get_Collect({ typeId: 0, size: 1000 })
    }
    render() {
        let { collectData } = this.props.my;
        return (
            <div className="wrap">
                <Header data={"easyLikeGoods"} {...this.props}></Header>
                <section className="HotGoods">
                    <div className="touchClear">
                        {collectData && collectData.map((item) => {
                            return (
                                <SwipeAction
                                    style={{ backgroundColor: 'gray' }}
                                    autoClose
                                    right={[
                                        {
                                            text: 'Delete',
                                            onPress: () => console.log('delete'),
                                            style: { backgroundColor: '#F4333C', color: 'white' },
                                        },
                                    ]}
                                    onOpen={() => console.log('global open')}
                                    onClose={() => console.log('global close')}
                                >
                                    <List.Item
                                        onClick={e => console.log(e)}
                                    >
                                        <a className="hotGoodsItem" href={`/goods/${item.value_id}`} >
                                            <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                                            <div className="hotGoodsInfos">
                                                <div className="hotGoodsName">{item.name}</div>
                                                <div className="hotGoodsInfo">{item.goods_brief}</div>
                                                <div className="hotGoodsPrice">￥{item.retail_price}</div>
                                            </div>
                                        </a>
                                    </List.Item>
                                </SwipeAction>
                            )
                        }
                        )}

                    </div>
                </section>

            </div >
        );
    }
}
export default index;