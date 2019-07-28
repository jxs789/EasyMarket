import React, { Component } from 'react'
class CateGoryCont extends Component {
    render() {
        let { val } = this.props
        return (
            <a tag="div" key={val.id}>
                <div className='goodsItemImg'>
                    <img src={val.list_pic_url} alt="" />
                </div>
                <div className='goodsItemName'>{val.name}</div>
                <div className='goodsItemPrice'>￥{val.retail_price}</div>
            </a>
        )
    }
}
export default CateGoryCont
