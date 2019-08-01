import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import HotGoods from "../../../../components//hotGoods/"
import Header from "../../../../components/header/"
import "./index.scss"
@inject("my") //注入模块
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.my.get_Collect({ typeId: 0, size: 1000 })
    }
    render() {
        let { collectData } = this.props.my
        console.log(collectData)
        return (
            <div className="wrap">
                <Header data={"easyLikeGoods"} {...this.props}></Header>
                <section className="HotGoods">
                    {
                        collectData && collectData.map((item) => {
                            console.log(item)
                            return (
                                <HotGoods  {...this.props} key={item.id} item={item} />
                            )

                        })
                    }
                </section>

            </div>
        );
    }

}

export default index;