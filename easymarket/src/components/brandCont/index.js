import React, { Component } from 'react'

export default class BrandCont extends Component {
    render() {
        let { item } = this.props;
        return (
            <a className="brandItem" href={`/brandDetail/${item.id}`}>
                <div className="brandItemlt">
                    <div className="brandItemName">{item.name}</div>
                    <div className="brandItemMinPrice">{item.floor_price}元起</div>
                </div>
                <img className="imgLazyload" src={item.new_pic_url} alt="imgLazyLoad" />
            </a>
        )
    }
}
