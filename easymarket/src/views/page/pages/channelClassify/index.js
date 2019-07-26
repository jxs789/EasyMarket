import React, { Component } from 'react'
import { observer, inject, } from "mobx-react"
import Header from "../../../../components/header"
@inject("pages")
@observer
class ChannelClassify extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.pages.getChannel_data(id)
    }
    render() {
        // let data = this.props.pages.channelData
        // console.log(data)
        return (
            <div className="wrap">
                {/* <Header {...this.props} data={"奇趣分类"} /> */}
                <ul className="category">
                    {
                        // data && data.map((item) => {
                        //     return (
                        //         <li key={item.id}>
                        //             {/* <a href=""> */}
                        //             <p>{item.name}</p>
                        //             {/* </a> */}
                        //         </li>
                        //     )
                        // })
                    }
                </ul>
            </div>
        )
    }
}
export default ChannelClassify
