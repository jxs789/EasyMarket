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
                                    key={item.id}
                                    style={{ backgroundColor: 'gray' }}
                                    autoClose
                                    right={[
                                        {
                                            text: '删除',
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